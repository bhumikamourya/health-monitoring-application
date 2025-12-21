import { useProtectedNavigate } from "../../utils/useProtectedNavigate.js";

function Component4() {
  const protectedNavigate = useProtectedNavigate();

  const handleStart = () => {
    protectedNavigate("/seedemo"); // will check token internally
  };

  return (
    <div className="component1-container bg-gray-50 py-16 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="fs-2 text-3xl md:text-4xl font-bold text-gray-900">
          Transform your daily routines
        </h1>

        <p className="fs-5 mt-4 text-lg text-gray-600">
          Join thousands of people who have improved their productivity,
          health, and well-being with Health Tracker.
        </p>

        <p className="fs-6 mt-6 text-base text-gray-700 flex flex-col md:flex-row items-center justify-center gap-3">
          <span className="flex items-center">
            <i className="fa-solid fa-check text-green-600 mr-2"></i>Start for
            free
          </span>
          <span className="flex items-center">
            <i className="fa-solid fa-check text-green-600 mr-2"></i>No credit
            card required
          </span>
          <span className="flex items-center">
            <i className="fa-solid fa-check text-green-600 mr-2"></i>
            Privacy-focused
          </span>
        </p>

        <div className="mt-8">
          <button
            className="btn btn-lg home-btn1 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md px-8 py-3 transition"
            onClick={handleStart}
          >
            Start for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component4;
