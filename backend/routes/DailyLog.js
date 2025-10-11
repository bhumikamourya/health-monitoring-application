const express = require("express");
const router = express.Router();
const DailyLog = require("../models/DailyLogs.js");
const auth = require("../middleware/authMiddleware.js"); // JWT middleware

// Create & Update Daily Log
router.post("/", auth, async (req, res) => {
  try {
    const { sleep, steps, water, calories, heartrate, blood_pressure, sugar, oxygen, cholesterol, workouts, distance, notes, foodIntake } = req.body;
    // Basic validations
    if (sleep < 0 || sleep > 24)
      return res.status(400).json({
        error: "Sleep must be between 0-24 hours"
      });
    if (steps < 0)
      return res.status(400).json({
        error: "Steps must be >= 0"
      });
    if (water < 0 || water > 20)
      return res.status(400).json({
        error: "Water must be 0-20 glasses"
      });
    if (calories < 0)
      return res.status(400).json({
        error: "Calories must be >= 0"
      });
    if (heartrate < 30 || heartrate > 220)
      return res.status(400).json({
        error: "Heart Rate must be 30-220"
      });
    if (blood_pressure?.systolic < 80 || blood_pressure?.systolic > 250)
      return res.status(400).json({
        error: "Systolic BP must be 80-250"
      });
    if (blood_pressure?.diastolic < 40 || blood_pressure?.diastolic > 150) 
      return res.status(400).json({ 
    error: "Diastolic BP must be 40-150" });
    if (sugar < 50 || sugar > 400) 
      return res.status(400).json({ 
    error: "Sugar must be 50-400 mg/dL" });
    if (oxygen < 50 || oxygen > 100) 
      return res.status(400).json({ 
    error: "Oxygen must be 50-100%" });
    if (cholesterol?.ldl < 0 || cholesterol?.ldl > 300) 
      return res.status(400).json({ 
    error: "LDL must be 0-300" });
    if (cholesterol?.hdl < 0 || cholesterol?.hdl > 150) 
      return res.status(400).json({ 
    error: "HDL must be 0-150" });
    if (distance < 0) 
      return res.status(400).json({ 
    error: "Distance must be >= 0" });
    if (workouts && !Array.isArray(workouts)) 
      return res.status(400).json({ 
    error: "Workouts must be an array" });
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);

    let log = await DailyLog.findOne({
      user: req.user._id,
      date: { $gte: todayStart, $lt: tomorrowStart }
    });

    const ldl = Number(cholesterol?.ldl) || 0;
    const hdl = Number(cholesterol?.hdl) || 0;
    const total = ldl + hdl;

    if (log) {
      // Update today's log
      log.sleep = sleep ?? log.sleep;
      log.steps = steps ?? log.steps;
      log.water = water ?? log.water;
      log.calories = calories ?? log.calories;
      log.heartrate = heartrate ?? log.heartrate;
      log.blood_pressure = blood_pressure ?? log.blood_pressure;
      log.sugar = sugar ?? log.sugar;
      log.oxygen = oxygen ?? log.oxygen;
      log.cholesterol = {
        ldl,
        hdl,
        total
      };
      log.workouts = Array.isArray(workouts) ? workouts : [];
      log.distance = Number(distance) || 0;
      log.notes = notes || "";

      await log.save();
      return res.json({ message: "Today's log updated", log });
    }

    const newLog = new DailyLog({
      user: req.user._id,
      sleep,
      steps,
      water,
      calories,
      heartrate,
      blood_pressure,
      sugar,
      oxygen,
      cholesterol: {
        ldl,
        hdl,
        total
      },
      workouts: Array.isArray(workouts) ? workouts : [],
      distance: Number(distance) || 0,
      notes: notes || "",
       foodIntake
    });

    await newLog.save();
    res.status(201).json({ message: "Daily log saved with food intake!", log: newLog });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Get all logs of logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const logs = await DailyLog.find({ user: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Get logs by date range (for charts)
router.get("/range", auth, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const logs = await DailyLog.find({
      user: req.user._id,
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).sort({ date: 1 });

    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cholesterol summary
router.get("/cholesterol/summary", auth, async (req, res) => {
  try {
    const { days = 7 } = req.query;
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date(end);
    start.setDate(end.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);

    const logs = await DailyLog.aggregate([
      { $match: { user: req.user._id, date: { $gte: start, $lte: end } } },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          ldl: "$cholesterol.ldl",
          hdl: "$cholesterol.hdl"
        }
      },
      {
        $group: {
          _id: "$date",
          ldl: { $avg: "$ldl" },
          hdl: { $avg: "$hdl" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(logs.map(l => ({
      date: l._id,
      ldl: Math.round(l.ldl || 0),
      hdl: Math.round(l.hdl || 0),
      total: Math.round((l.ldl || 0) + (l.hdl || 0))
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//  Blood Pressure summary
router.get("/bloodPressure/summary", auth, async (req, res) => {
  try {
    const { days = 7 } = req.query;
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date(end);
    start.setDate(end.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);

    const logs = await DailyLog.aggregate([
      { $match: { user: req.user._id, date: { $gte: start, $lte: end } } },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          systolic: "$blood_pressure.systolic",
          diastolic: "$blood_pressure.diastolic"
        }
      },
      {
        $group: {
          _id: "$date",
          systolic: { $avg: "$systolic" },
          diastolic: { $avg: "$diastolic" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(logs.map(l => ({
      date: l._id,
      systolic: Math.round(l.systolic || 0),
      diastolic: Math.round(l.diastolic || 0)
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// field (water, sleep, steps, calories)
router.get("/:field/summary", auth, async (req, res) => {
  try {
    const { field } = req.params;
    const days = parseInt(req.query.days) || 7;

    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date();
    start.setDate(end.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);

    // aggregation pipeline
    const logs = await DailyLog.aggregate([
      { $match: { user: req.user._id, date: { $gte: start, $lte: end } } },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          value: `$${field}` // dynamic field
        }
      },
      {
        $group: {
          _id: "$date",
          total: { $sum: "$value" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // format frontend ke liye
    const response = logs.map(l => ({
      date: l._id,
      [field]: l.total
    }));

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Distance summary - total distance per day
router.get("/distance/summary", auth, async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 7;

    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date();
    start.setDate(end.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);

    const logs = await DailyLog.aggregate([
      { $match: { user: req.user._id, date: { $gte: start, $lte: end } } },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          distance: "$distance"
        }
      },
      {
        $group: {
          _id: "$date",
          totalDistance: { $sum: "$distance" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const response = logs.map(l => ({
      date: l._id,
      distance: l.totalDistance
    }));

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Workouts summary - total duration per type per day
router.get("/workouts/summary", auth, async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 7;

    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date();
    start.setDate(end.getDate() - (days - 1));
    start.setHours(0, 0, 0, 0);

    const logs = await DailyLog.aggregate([
      { $match: { user: req.user._id, date: { $gte: start, $lte: end } } },
      { $unwind: "$workouts" },
      {
        $group: {
          _id: { date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }, type: "$workouts.type" },
          totalDuration: { $sum: "$workouts.duration" }
        }
      },
      { $sort: { "_id.date": 1, "_id.type": 1 } }
    ]);

    // Convert to frontend friendly format
    const responseMap = {};
    logs.forEach(l => {
      const date = l._id.date;
      const type = l._id.type;
      if (!responseMap[date]) responseMap[date] = {};
      responseMap[date][type] = l.totalDuration;
    });

    const response = Object.keys(responseMap).map(date => ({
      date,
      workouts: responseMap[date]
    }));

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
