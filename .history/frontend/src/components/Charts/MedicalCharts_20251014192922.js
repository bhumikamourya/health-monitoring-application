import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { CustomTooltip } from "../../utils/CustomTooltip.js";
import { useChartData } from "../../Hook/useChartData.js";
import { useCholesterolChartData } from "../../Hook/useCholesterolChartData.js";
import { useBPChartData } from "../../Hook/useBPChartData.js";

// Sugar Chart
function SugarChart({ days = 7, target = 120 }) {
  const { data, todayTotal, avg } = useChartData("sugar", "sugar", days);

  const getSugarColor = (value, target) => {
    if (value <= target) return "#16a34a";      // 🟢 Normal
    if (value <= target + 20) return "#fbbf24"; // 🟠 Slightly High
    return "#ef4444";                           // 🔴 High
  };

  const coloredData = data.map(d => ({
    ...d,
    fill: getSugarColor(d.sugar, target)
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
        <i className="fa-solid fa-candy-cane" style={{ color: "#f59e0b" }}></i> Blood Sugar
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} mg/dL</div>
        <div><b>Avg ({days}d):</b> {avg} mg/dL</div>
        <div><b>Target:</b> ≤ {target} mg/dL</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fde68a" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="mg/dL" />} />
            <Bar dataKey="sugar" fill={({ payload }) => payload.fill} />
            <Line
              type="monotone"
              dataKey={() => target}
              stroke="#b91c1c"
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
        <div><i style={{ color: "#16a34a" }} className="fa-solid fa-candy-cane"></i> Normal</div>
        <div><i style={{ color: "#fbbf24" }} className="fa-solid fa-candy-cane"></i> Slightly High</div>
        <div><i style={{ color: "#ef4444" }} className="fa-solid fa-candy-cane"></i> High</div>
      </div>
    </div>
  );
}


// Blood Pressure Chart
function BPChart({ days = 7, systolicTarget = 120, diastolicTarget = 80 }) {
  const { data, todaySys, todayDia, avgSys, avgDia } = useBPChartData(days);

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        background: "#d1fae5",
        borderRadius: 12,
        padding: 16
      }}
    >
      <h2 style={{ marginBottom: 8, color: "#065f46" }}>
        <i className="fa-solid fa-stethoscope"></i> Blood Pressure
      </h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todaySys}/{todayDia} mmHg</div>
        <div><b>Avg ({days}d):</b> {avgSys}/{avgDia} mmHg</div>
        <div><b>Target:</b> {systolicTarget}/{diastolicTarget} mmHg</div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#a7f3d0" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="mmHg" />} />
            <Bar dataKey="systolic" fill="#047857" />
            <Bar dataKey="diastolic" fill="#059669" />
            {/* Reference Lines */}
            <Line type="monotone" dataKey={() => systolicTarget} stroke="#064e3b" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey={() => diastolicTarget} stroke="#10b981" strokeWidth={2} dot={false} />
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
        <div>
          <i style={{ color: "#047857" }} className="fa-solid fa-stethoscope"></i> Systolic
        </div>
        <div>
          <i style={{ color: "#059669" }} className="fa-solid fa-stethoscope"></i> Diastolic
        </div>
        <div>
          <i style={{ color: "#064e3b" }} className="fa-solid fa-line"></i>120- Systolic Target
        </div>
        <div>
          <i style={{ color: "#10b981" }} className="fa-solid fa-line"></i>80- Diastolic Target
        </div>
      </div>
    </div>
  );
}


// Heart Rate Chart
function HeartRateChart({ days = 7, target = 75 }) {
  const { data, todayTotal, avg } = useChartData("heartrate", "heartrate", days);
const getHRColor = (value) => {
  if (value < 60) return "#f87171";     // light red
  if (value <= 100) return "#dc2626";   // normal red
  return "#991b1b";                     // dark red
};

const coloredData = data.map(d => ({
  ...d,
  fill: getHRColor(d.heartrate)
}));
  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#fee2e2", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#b91c1c" }}><i class="fa-solid fa-heart"></i> Heart Rate </h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} bpm</div>
        <div><b>Avg ({days}d):</b> {avg} bpm</div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#fecaca" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="bpm" />} />
            <Bar dataKey="heartrate" fill= {({ payload }) => payload.fill}/>
            <Line type="monotone" dataKey={() => target} stroke="#991b1b" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Cholesterol Chart
function CholesterolChart({ days = 7, ldlTarget = 100, hdlTarget = 40 }) {
  const { data, todayTotal, avg } = useCholesterolChartData(days);

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#e0f2fe", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#0c4a6e" }}><i class="fa-solid fa-dna"></i> Cholesterol</h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal} mg/dL</div>
        <div><b>Avg ({days}d):</b> {avg} mg/dL</div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#bae6fd" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="mg/dL" />} />
            <Bar dataKey="ldl" fill="#f59e0b" />
            <Bar dataKey="hdl" fill="#10b981" />
            {/* <Bar dataKey="total" fill="#0284c7" /> */}
            <Line type="monotone" dataKey={() => ldlTarget} stroke="#0c4a6e" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey={() => hdlTarget} stroke="#0c4a6e" strokeWidth={2} dot={false} />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Oxygen Chart
function OxygenChart({ days = 7, target = 95 }) {
  const { data, todayTotal, avg } = useChartData("oxygen", "oxygen", days);
const getOxygenColor = (value, target) => {
  if (value < 90) return "#f65a45ff";      // red → low
  if (value < 95) return "#6a89dfff";      // yellow → medium
  return "#1d4ed8";                      // blue → good
};
const coloredData = data.map(d => ({
  ...d,
  fill: getOxygenColor(d.oxygen, target)
}));
  return (
    <div style={{ maxWidth: 700, margin: "20px auto", background: "#dbeafe", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginBottom: 8, color: "#1e40af" }}><i class="fa-solid fa-lungs"></i> Blood Oxygen </h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div><b>Today:</b> {todayTotal}%</div>
        <div><b>Avg ({days}d):</b> {avg}%</div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={coloredData}>
            <CartesianGrid stroke="#bfdbfe" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip content={<CustomTooltip unit="%" />} />
            <Bar dataKey="oxygen" fill={({ payload }) => payload.fill} />
            <Line type="monotone" dataKey={() => target} stroke="#1e40af" strokeWidth={2} dot={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



export { SugarChart, BPChart, HeartRateChart, CholesterolChart, OxygenChart };
