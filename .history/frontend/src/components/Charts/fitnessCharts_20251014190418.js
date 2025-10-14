import { Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useChartData } from "../../Hook/useChartData";
import { CustomTooltip } from "../../utils/CustomTooltip.js";

// Water Chart
function WaterChart({ days = 7, target = 8 }) {
  const { data, todayTotal, avg } = useChartData("water", "water", days);

  const getWaterColor = (value, target) => {
    if (value < target * 0.5) return "#ef4444";   // 🔴 Red - very low hydration
    if (value < target * 0.8) return "#8cb5f7ff"; // 🟠 Light blue - low
    if (value < target) return "#facc15";         // 🟡 Yellow - almost there
    return "#3b82f6";                             // 🔵 Blue - good hydration
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
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          fontSize: 14
        }}
      >
        <div><span style={{ background: "#ef4444", padding: "5px 10px",margin:"10px", borderRadius: 50 }}><i className="fa-solid fa-droplet"></i></span> Very Low Hydration</div>
        <div><span style={{ background: "#8cb5f7ff", padding: "4px 10px", borderRadius: 6 }}></span> Low Hydration</div>
        <div><span style={{ background: "#facc15", padding: "4px 10px", borderRadius: 6 }}></span> Almost There</div>
        <div><span style={{ background: "#3b82f6", padding: "4px 10px", borderRadius: 6 }}></span> Good Hydration</div>
      </div>
    </div>
  );
}



// Calories Chart
function CaloriesChart({ days = 7, target = 2500 }) {
  const { data, todayTotal, avg } = useChartData("calories", "calories", days);
  const getCaloriesColor = (value, target) => {
    if (value <= target) return "#22c55e";          // green
    if (value <= target * 1.1) return "#f59e0b";   // yellow
    return "#dc2626";                               // red
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getCaloriesColor(d.calories, target)
  }));
  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#fff7ed", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#b45309" }}><i className="fa-solid fa-fire" style={{ color: "#f59e0b" }}></i> Calories Burned </h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} kcal</div>
        <div><b>Avg ({days}d):</b> {avg} calories</div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fde2c0" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="kcal" />} />
            <Bar dataKey="calories" fill={({ payload }) => payload.fill} />
            <Line type="monotone" dataKey={() => target} stroke="#991b1b" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Steps Chart
function StepsChart({ days = 7, target = 12000 }) {
  const { data, todayTotal, avg } = useChartData("steps", "steps", days);
  const getStepsColor = (value) => {
    if (value < target * 0.7) return "#dc2626";   // red (low)
    if (value < target) return "#1ff66eff";         // amber (medium)
    return "#16a34a";                             // green (good)
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getStepsColor(d.steps)
  }));

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#ecfdf5", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#065f46" }}><i className="fa-solid fa-shoe-prints"></i> Steps </h2>
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
            <Tooltip content={<CustomTooltip unit="Steps" />} />
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
    </div>
  );
}

// Sleep Chart
function SleepChart({ days = 7, target = 8 }) {
  const { data, todayTotal, avg } = useChartData("sleep", "sleep", days);
  const getSleepColor = (value) => {
    if (value < 5) return "#e33636ff";
    if (value < 7) return "#beabe8ff";
    if (value <= 9) return "#ab89fbff";
    return "#8b5cf6";
  };
  const coloredData = data.map(d => ({
    ...d,
    fill: getSleepColor(d.sleep, target)
  }));
  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#f3e8ff", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#8b5cf6" }}><i className="fa-solid fa-bed"></i> Sleep</h2>
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
            <Line type="monotone" dataKey={() => target} stroke="#7c3aed" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
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
    if (value < target * 0.7) return "#ef4444";   // red - low
    if (value < target) return "#fbbf24";         // amber - medium
    return "#d97706";                             // green - achieved
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getWorkoutColor(d.caloriesBurned, target)
  }));
  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#fef3c7", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#d97706" }}>
        <i className="fa-solid fa-dumbbell"></i>
        Workout Calories Burned </h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} kcal</div>
        <div><b>Avg ({days}d):</b> {avg} kcal</div>
        <div><b>Goal:</b> {target}min/day</div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fde68a" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="kcal" />} />
            <Bar dataKey="caloriesBurned" fill={({ payload }) => payload.fill} />
            <Line type="monotone" dataKey={() => target} stroke="#b45309" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}




export { WaterChart, CaloriesChart, StepsChart, SleepChart, DistanceChart, WorkoutChart };