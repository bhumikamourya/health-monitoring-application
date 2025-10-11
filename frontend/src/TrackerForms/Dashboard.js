import { useState } from "react";
import { WaterChart, CaloriesChart, StepsChart, SleepChart, DistanceChart,WorkoutChart } from "../components/Charts/fitnessCharts.js";
import { SugarChart, BPChart, HeartRateChart, CholesterolChart, OxygenChart } from "../components/Charts/MedicalCharts.js";
// ✅ Reusable Card component
function ChartCard({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">{title}</h2>
      {children}
    </div>
  );
}

export default function Dashboard() {
  // Step 1: state for dynamic filter
  const [days, setDays] = useState(14);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to Dashboard</h1>

      {/* Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {[7, 14, 30].map((d) => (
          <button
            key={d}
            className={`px-4 py-2 rounded-lg font-medium shadow-sm transition ${
              days === d
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50"
            }`}
            onClick={() => setDays(d)}
          >
            Last {d} Days
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <ChartCard title="Water Intake">
          <WaterChart days={days} />
        </ChartCard>

        <ChartCard title="Calories Burned">
          <CaloriesChart days={days} />
        </ChartCard>

        <ChartCard title="Steps Walked">
          <StepsChart days={days} />
        </ChartCard>

        <ChartCard title="Workouts">
          <WorkoutChart days={days} goal={60} />
        </ChartCard>

        {/* Column 2 */}
        <ChartCard title="Sleep Hours">
          <SleepChart days={days} />
        </ChartCard>

        <ChartCard title="Distance Covered">
          <DistanceChart days={days} />
        </ChartCard>

        <ChartCard title="Blood Sugar">
          <SugarChart days={days} />
        </ChartCard>

        <ChartCard title="Blood Pressure">
          <BPChart days={days} />
        </ChartCard>

        {/* Column 3 */}
        <ChartCard title="Heart Rate">
          <HeartRateChart days={days} />
        </ChartCard>

        <ChartCard title="Cholesterol Levels">
          <CholesterolChart days={days} />
        </ChartCard>

        <ChartCard title="Oxygen Levels">
          <OxygenChart days={days} />
        </ChartCard>
      </div>
    </div>
  );
}
