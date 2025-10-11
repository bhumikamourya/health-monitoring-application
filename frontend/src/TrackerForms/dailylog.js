import { useState, useEffect } from "react";
import api from "../utils/api";
import WorkoutList from "./WorkoutList.js";

const DailyLogForm = () => {
  const [formData, setFormData] = useState({
    sleep: "",
    steps: "",
    water: "",
    calories: "",
    heartrate: "",
    systolic: "",
    diastolic: "",
    sugar: "",
    oxygen: "",
    ldl: "",
    hdl: "",
    total: "",
    distance: "",
    workouts: [],
    foodIntake: [],
    notes: ""
  });

  const [foodName, setFoodName] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fats, setFats] = useState("");
  const [calories, setCalories] = useState("");

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await api.get("/dailylog");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value
    });
  };

  const addFood = () => {
    if (!foodName || !calories) return;
    const newFood = { foodName, carbs, protein, fats, calories };
    setFormData({
      ...formData,
      foodIntake: [...formData.foodIntake, newFood]
    });

    setFoodName("");
    setCarbs("");
    setProtein("");
    setFats("");
    setCalories("");
  };

  const removeFood = (index) => {
    const updated = formData.foodIntake.filter((_, i) => i !== index);
    setFormData({ ...formData, foodIntake: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/dailylog", {
        sleep: formData.sleep,
        steps: formData.steps,
        water: formData.water,
        distance: formData.distance,
        calories: formData.calories,
        heartrate: formData.heartrate,
        blood_pressure: {
          systolic: formData.systolic,
          diastolic: formData.diastolic
        },
        sugar: formData.sugar,
        oxygen: formData.oxygen,
        cholesterol: {
          ldl: formData.ldl,
          hdl: formData.hdl,
          total: formData.total
        },
        workouts: formData.workouts,
        foodIntake: formData.foodIntake,
        notes: formData.notes
      });
      alert(res.data.message);
      fetchRecords();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error submitting log");
    }
  };

  const todayRecords = records.filter((r) => {
    const recordDate = new Date(r.date).toDateString();
    const todayDate = new Date().toDateString();
    return recordDate === todayDate;
  });

  return (
    <div>
  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
    <i className="fa-solid fa-notes-medical text-blue-600"></i> Daily Health Log
  </h2>

  <form onSubmit={handleSubmit} className="space-y-3">
    {/* Health Inputs */}
    <div>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          name="sleep"
          value={formData.sleep}
          min="0"
          max="24"
          onChange={handleChange}
          placeholder="Sleep (hrs)"
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="steps"
          value={formData.steps}
          min="0"
          onChange={handleChange}
          placeholder="Steps"
          required
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <input
          type="number"
          name="water"
          value={formData.water}
          min="0"
          max="20"
          onChange={handleChange}
          placeholder="Water (glasses)"
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="distance"
          value={formData.distance}
          min="0"
          onChange={handleChange}
          placeholder="Distance (km)"
          className="w-full border rounded-lg p-2"
        />
      </div>

      <input
        type="number"
        name="calories"
        value={formData.calories}
        min="0"
        max="10000"
        onChange={handleChange}
        placeholder="Calories"
        className="w-full border rounded-lg p-2 mt-3"
      />
      <input
        type="number"
        name="heartrate"
        value={formData.heartrate}
        min="30"
        max="220"
        onChange={handleChange}
        placeholder="Heart Rate"
        required
        className="w-full border rounded-lg p-2 mt-3"
      />

      <div className="grid grid-cols-2 gap-3 mt-3">
        <input
          type="number"
          name="systolic"
          value={formData.systolic}
          min="80"
          max="250"
          onChange={handleChange}
          placeholder="Systolic BP"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="diastolic"
          value={formData.diastolic}
          min="40"
          max="150"
          onChange={handleChange}
          placeholder="Diastolic BP"
          className="w-full border rounded-lg p-2"
        />
      </div>

      <input
        type="number"
        name="sugar"
        value={formData.sugar}
        min="50"
        max="400"
        onChange={handleChange}
        placeholder="Sugar (mg/dL)"
        className="w-full border rounded-lg p-2 mt-3"
      />
      <input
        type="number"
        name="oxygen"
        value={formData.oxygen}
        min="50"
        max="100"
        onChange={handleChange}
        placeholder="Oxygen (%)"
        required
        className="w-full border rounded-lg p-2 mt-3"
      />

      <div className="grid grid-cols-2 gap-3 mt-3">
        <input
          type="number"
          name="ldl"
          value={formData.ldl}
          min="50"
          max="300"
          onChange={handleChange}
          placeholder="LDL Cholesterol"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="hdl"
          value={formData.hdl}
          min="10"
          max="150"
          onChange={handleChange}
          placeholder="HDL Cholesterol"
          className="w-full border rounded-lg p-2"
        />
      </div>
    </div>

    {/* Workouts */}
    <WorkoutList
      workouts={formData.workouts}
      setWorkouts={(w) => setFormData({ ...formData, workouts: w })}
    />

    {/* Food Intake */}
    <h3 className="font-semibold mt-4">Food Intake</h3>
    {formData.foodIntake.map((f, idx) => (
      <div
        key={idx}
        className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
      >
        <span>
          {f.foodName} - {f.calories} kcal
        </span>
        <button
          type="button"
          onClick={() => removeFood(idx)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded"
        >
          Remove
        </button>
      </div>
    ))}

    <div className="grid grid-cols-3 gap-3 mt-3">
      <input
        type="text"
        placeholder="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="number"
        placeholder="Carbs (g)"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="number"
        placeholder="Protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
    </div>

    <div className="grid grid-cols-2 gap-3 mt-3">
      <input
        type="number"
        placeholder="Fats (g)"
        value={fats}
        onChange={(e) => setFats(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
    </div>

    <button
      type="button"
      onClick={addFood}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-3"
    >
      Add Food
    </button>

    {/* Notes */}
    <textarea
      placeholder="Notes"
      value={formData.notes}
      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
      className="w-full border rounded-lg p-2 mt-3"
    />

    {/* Single Submit Button */}
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-3"
    >
      Save Log
    </button>
  </form>

  {/* Today's Records */}
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Today's Records</h3>
    <ul className="space-y-2">
      {todayRecords.length > 0 ? (
        todayRecords.map((r) => (
          <li
            key={r._id}
            className="p-3 bg-gray-50 rounded-lg shadow-sm text-sm"
          >
            <b>
              {new Date(r.updatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              :
            </b>
            &nbsp;Sleep: {r.sleep} hrs, Steps: {r.steps}, Distance:{" "}
            {r.distance || 0} km, Water: {r.water} glasses, Calories:{" "}
            {r.calories}, HeartRate: {r.heartrate}, Sugar: {r.sugar}, Oxygen:{" "}
            {r.oxygen}%
            <br />
            Workouts:{" "}
            {r.workouts.map((w, idx) => `${w.type} ${w.duration}min`).join(", ") ||
              "None"}
            <br />
            Food:{" "}
            {r.foodIntake?.map((f) => `${f.foodName} ${f.calories} kcal`).join(", ") ||
              "None"}
            <br />
            Notes: {r.notes || "-"}
          </li>
        ))
      ) : (
        <p className="text-gray-500 italic">No records found for today.</p>
      )}
    </ul>
  </div>
</div>

  );
};

export default DailyLogForm;
