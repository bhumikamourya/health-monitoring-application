const express = require("express");
const DailyLog = require("../models/DailyLogs.js");
const router = express.Router();

const getNested = (obj, path) =>
  path.split(".").reduce((o, key) => (o ? o[key] : undefined), obj);

// Metric field mapping
const metricFields = {
  sleep: "sleep",
  steps: "steps",
  water: "water",
  calories: "calories",
  heartrate: "heartrate",
  systolic: "blood_pressure.systolic",
  diastolic: "blood_pressure.diastolic",
  sugar: "sugar",
  oxygen: "oxygen",
  ldl: "cholesterol.ldl",
  hdl: "cholesterol.hdl",
  total: "cholesterol.total",
  distance: "distance",
  workouts:"workouts",
  // Grouped metrics
  bloodPressure: ["blood_pressure.systolic", "blood_pressure.diastolic"],
  cholesterol: ["cholesterol.ldl", "cholesterol.hdl", "cholesterol.total"],
};

// Generic endpoint for any metric
router.get("/:metric/summary", async (req, res) => {
  try {
    const { metric } = req.params;
    const days = parseInt(req.query.days) || 7;

    if (!metricFields[metric]) {
      return res.status(400).json({ error: "Invalid metric" });
    }

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - (days - 1));

    let fields = metricFields[metric];
    //workout special case
    if(metric ==="workouts"){
       const logs = await DailyLog.find(
        { date: { $gte: startDate } },
        { workouts: 1, date: 1 }
      ).sort({ date: 1 });

      const response = logs.map((log) => {
        const date = log.date.toISOString().split("T")[0];
        let totalCalories = 0;
        let totalDuration = 0;

        if (Array.isArray(log.workouts)) {
          log.workouts.forEach((w) => {
            totalCalories += w.caloriesBurned || 0;
            totalDuration += w.duration || 0;
          });
        }

        return {
          date,
          caloriesBurned: totalCalories,
          duration: totalDuration,
        };
      });

      return res.json(response);
    }

    // ✅ Distance special case
    if (metric === "distance") {
      const logs = await DailyLog.find(
        { date: { $gte: startDate } },
        { distance: 1, date: 1 }
      ).sort({ date: 1 });

      const response = logs.map((log) => ({
        date: log.date.toISOString().split("T")[0],
        distance: log.distance ?? 0,   // km me jo save kiya hai wahi use karo
      }));

      return res.json(response);
    }

    // ✅ Multiple fields (BP, cholesterol)
    if (Array.isArray(fields)) {
      const projection = fields.reduce((acc, f) => ({ ...acc, [f]: 1 }), {
        date: 1,
      });

      const logs = await DailyLog.find(
        { date: { $gte: startDate } },
        projection
      ).sort({ date: 1 });

      const response = logs.map((log) => {
        let data = { date: log.date.toISOString().split("T")[0] };
        fields.forEach((f) => {
          const key = f.split(".").pop(); // e.g., systolic, diastolic
          data[key] = getNested(log, f) ?? 0;
        });
        return data;
      });

      return res.json(response);
    }

    // ✅ Single field
    const logs = await DailyLog.find(
      { date: { $gte: startDate } },
      { [fields]: 1, date: 1 }
    ).sort({ date: 1 });

    const response = logs.map((log) => ({
      date: log.date.toISOString().split("T")[0],
      [metric]: getNested(log, fields) ?? 0,
    }));

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching metric data" });
  }
});

module.exports = router;
