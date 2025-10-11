import React, { useState } from "react";

const WorkoutList = ({ workouts, setWorkouts }) => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const addWorkout = () => {
    if (!workoutType || !duration) return;

    const newWorkout = {
      type: workoutType,
      duration: Number(duration),
      caloriesBurned: Number(caloriesBurned) || 0,
    };

    setWorkouts([...workouts, newWorkout]);

    // Reset inputs
    setWorkoutType("");
    setDuration("");
    setCaloriesBurned("");
  };

  const removeWorkout = (index) => {
    const updated = workouts.filter((_, i) => i !== index);
    setWorkouts(updated);
  };

  return (
   <div className="mt-6">
  <h3 className="text-lg font-semibold mb-3">Workouts</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    <select
      value={workoutType}
      onChange={(e) => setWorkoutType(e.target.value)}
      className="w-full border rounded-lg p-2"
    >
      <option value="">Select Type</option>
      <option value="Cardio">Cardio</option>
      <option value="Strength">Strength</option>
      <option value="Yoga">Yoga</option>
    </select>

    <input
      type="number"
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      placeholder="Duration (min)"
      className="w-full border rounded-lg p-2"
    />

    <input
      type="number"
      value={caloriesBurned}
      onChange={(e) => setCaloriesBurned(e.target.value)}
      placeholder="Calories"
      className="w-full border rounded-lg p-2"
    />
  </div>

  <button
    type="button"
    onClick={addWorkout}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-3"
  >
    Add
  </button>

  {workouts.length > 0 && (
    <ul className="mt-4 space-y-2">
      {workouts.map((w, idx) => (
        <li
          key={idx}
          className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm text-sm"
        >
          <span>
            {w.type} - {w.duration} min - {w.caloriesBurned} cal
          </span>
          <button
            type="button"
            onClick={() => removeWorkout(idx)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default WorkoutList;
