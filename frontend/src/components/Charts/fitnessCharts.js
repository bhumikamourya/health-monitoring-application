import { Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useChartData } from "../../Hook/useChartData";
import { CustomTooltip } from "../../utils/CustomTooltip.js";

// Water Chart
function WaterChart({ days = 7, target = 8 }) {
  const { data, todayTotal, avg } = useChartData("water", "water", days);

  const getWaterColor = (value, target) => {
    if (value < target * 0.5) return "#ef4444";   // very low hydration
    if (value < target * 0.8) return "#8cb5f7ff"; //low
    if (value < target) return "#facc15";         // almost there
    return "#3b82f6";                             // good hydration
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getWaterColor(d.water, target)
  }));

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#e0f2fe",
        borderRadius: 12,
        padding: 16
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#2563eb" }}>
        <i className="fa-solid fa-droplet"></i> Water Intake
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} glasses</div>
        <div><b>Avg ({days}d):</b> {avg} glasses</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#bae6fd" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="glasses" />} />
            <Bar dataKey="water" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#1d4ed8"
              strokeWidth={2}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Color Legend Section */}
      <div
        style={{
           marginTop: 16,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 14
        }}
      >
        <div><i style={{color: "#ef4444"}} className="fa-solid fa-droplet"></i>Very Low Hydration</div>
        <div><i style={{color: "#8cb5f7ff"}} className="fa-solid fa-droplet"></i> Low Hydration</div>
        <div><i style={{color: "#facc15"}} className="fa-solid fa-droplet"></i> Almost There</div>
        <div><i style={{color: "#3b82f6"}} className="fa-solid fa-droplet"></i> Good Hydration</div>
      </div>
    </div>
  );
}



// Calories Chart
function CaloriesChart({ days = 7, target = 2500 }) {
  const { data, todayTotal, avg } = useChartData("calories", "calories", days);

  const getCaloriesColor = (value, target) => {
    if (value <= target) return "#22c55e";        // 🟢 Green - within goal
    if (value <= target * 1.1) return "#f59e0b";  // 🟡 Yellow - slightly high
    return "#dc2626";                             // 🔴 Red - over limit
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getCaloriesColor(d.calories, target)
  }));

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#fff7ed",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#b45309" }}>
        <i className="fa-solid fa-fire" style={{ color: "#f59e0b" }}></i>{" "}
        Calories Burned
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} kcal</div>
        <div><b>Avg ({days}d):</b> {avg} kcal</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fde2c0" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="kcal" />} />
            <Bar dataKey="calories" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#991b1b"
              strokeWidth={2}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Color Legend Section - matching WaterChart style */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 14,
        }}
      >
        <div>
          <i style={{ color: "#22c55e" }} className="fa-solid fa-fire"></i> Within Goal
        </div>
        <div>
          <i style={{ color: "#f59e0b" }} className="fa-solid fa-fire"></i> Slightly High
        </div>
        <div>
          <i style={{ color: "#dc2626" }} className="fa-solid fa-fire"></i> Over Limit
        </div>
      </div>
    </div>
  );
}



// Steps Chart
function StepsChart({ days = 7, target = 12000 }) {
  const { data, todayTotal, avg } = useChartData("steps", "steps", days);

  const getStepsColor = (value) => {
    if (value < target * 0.7) return "#dc2626";    // 🔴 Red - Low activity
    if (value < target) return "#facc15";          // 🟡 Yellow - Moderate activity
    return "#16a34a";                              // 🟢 Green - Goal achieved
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getStepsColor(d.steps)
  }));

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#ecfdf5",
        borderRadius: 12,
        padding: 16
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#065f46" }}>
        <i className="fa-solid fa-shoe-prints"></i> Steps
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} steps</div>
        <div><b>Avg ({days}d):</b> {avg} steps</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#bbf7d0" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="steps" />} />
            <Bar dataKey="steps" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#047857"
              strokeWidth={2}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Color Legend Section - same style as other charts */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 14
        }}
      >
        <div>
          <i style={{ color: "#dc2626" }} className="fa-solid fa-shoe-prints"></i> Low Activity
        </div>
        <div>
          <i style={{ color: "#facc15" }} className="fa-solid fa-shoe-prints"></i> Moderate Activity
        </div>
        <div>
          <i style={{ color: "#16a34a" }} className="fa-solid fa-shoe-prints"></i> Goal Achieved
        </div>
      </div>
    </div>
  );
}


// Sleep Chart
function SleepChart({ days = 7, target = 8 }) {
  const { data, todayTotal, avg } = useChartData("sleep", "sleep", days);

  const getSleepColor = (value) => {
    if (value < 5) return "#e33636ff";   // 🔴 Very Poor Sleep
    if (value < 7) return "#beabe8ff";   // 🟣 Below Optimal
    if (value <= 9) return "#ab89fbff";  // 💜 Healthy Sleep
    return "#8b5cf6";                    // 💙 Overslept
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getSleepColor(d.sleep, target)
  }));

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#f3e8ff",
        borderRadius: 12,
        padding: 16
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#8b5cf6" }}>
        <i className="fa-solid fa-bed"></i> Sleep
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} hours</div>
        <div><b>Avg ({days}d):</b> {avg} hours</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#ddd6fe" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="hours" />} />
            <Bar dataKey="sleep" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#7c3aed"
              strokeWidth={2}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Color Legend Section - consistent with other charts */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 14
        }}
      >
        <div>
          <i style={{ color: "#e33636ff" }} className="fa-solid fa-bed"></i> Very Poor Sleep
        </div>
        <div>
          <i style={{ color: "#beabe8ff" }} className="fa-solid fa-bed"></i> Below Optimal
        </div>
        <div>
          <i style={{ color: "#ab89fbff" }} className="fa-solid fa-bed"></i> Healthy Sleep
        </div>
        <div>
          <i style={{ color: "#8b5cf6" }} className="fa-solid fa-bed"></i> Overslept
        </div>
      </div>
    </div>
  );
}


function DistanceChart({ days = 7, target = 5 }) {
  const { data, todayTotal, avg } = useChartData("distance", "distance", days);

  const getDistanceColor = (value, target) => {
    if (value < target * 0.5) return "#ef4444";   // 🔴 Very low
    if (value < target * 0.8) return "#81f2aaff";   // 🟠 Low
    if (value < target) return "#facc15";         // 🟡 Almost there
    return "#22c55e";                             // 🟢 Good
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getDistanceColor(d.distance, target)
  }));

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#ecfdf5", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#047857" }}>
        <i className="fa-solid fa-person-walking"></i> Distance
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} km</div>
        <div><b>Avg ({days}d):</b> {avg} km</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#d1fae5" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="km" />} />
            <Bar dataKey="distance" fill={({ payload }) => payload.fill} />
            <Line type="monotone" dataKey={() => target} stroke="#047857" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


function WorkoutChart({ days = 7, target = 90 }) {
  // workoutsCalories ke liye hook call 
  const { data, todayTotal, avg } = useChartData("workouts", "caloriesBurned", days);

  const getWorkoutColor = (value, target) => {
    if (value < target * 0.5) return "#ef4444";    // 🔴 Very Low
    if (value < target * 0.8) return "#fbbf24";    // 🟠 Moderate
    if (value < target) return "#facc15";          // 🟡 Almost There
    return "#d97706";                              // 🟢 Achieved
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getWorkoutColor(d.caloriesBurned, target)
  }));

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#fef3c7",
        borderRadius: 12,
        padding: 16
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#b45309" }}>
        <i className="fa-solid fa-dumbbell" style={{ color: "#f59e0b" }}></i> Workout Calories Burned
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} kcal</div>
        <div><b>Avg ({days}d):</b> {avg} kcal</div>
        <div><b>Goal:</b> {target} kcal/day</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fde68a" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="kcal" />} />
            <Bar dataKey="caloriesBurned" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#b45309"
              strokeWidth={2}
              dot={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Color Legend Section */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 14
        }}
      >
        <div><i style={{ color: "#ef4444" }} className="fa-solid fa-dumbbell"></i> Very Low</div>
        <div><i style={{ color: "#fbbf24" }} className="fa-solid fa-dumbbell"></i> Moderate</div>
        <div><i style={{ color: "#facc15" }} className="fa-solid fa-dumbbell"></i> Almost There</div>
        <div><i style={{ color: "#d97706" }} className="fa-solid fa-dumbbell"></i> Achieved</div>
      </div>
    </div>
  );
}





export { WaterChart, CaloriesChart, StepsChart, SleepChart, DistanceChart, WorkoutChart };