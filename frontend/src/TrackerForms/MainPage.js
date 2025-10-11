import { Link } from "react-router-dom";
import DailyLogForm from "./dailylog.js";

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content wrapper */}
      <div className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <Link
              to="/dashboard"
              className="text-xl font-semibold text-indigo-600 hover:text-indigo-800 transition"
            >
              Go To Dashboard
            </Link>
            <hr className="my-4 border-gray-200" />
          </div>

          {/* Daily Log Form */}
          <DailyLogForm />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
