import { useState, useEffect } from "react";
import api from "../utils/api.js";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    goal: {
      water: 8,
      steps: 12000,
      sleep: 8,
      calories: 2000,
      weight: 0
    }
  });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch profile when page loads
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get("/users/profile", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm({
        ...res.data,
        goal: res.data.goal || {
          water: 8,
          steps: 12000,
          sleep: 8,
          calories: 2000,
          weight: 0
        }
      });
    };
    fetchProfile();
  }, [token]);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // jo fields number hain unko number banao
    if (["age", "height", "weight"].includes(name)) {
      setForm({ ...form, [name]: Number(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle goal input
  const handleGoalChange = (e) => {
    setForm({
      ...form,
      goal: { ...form.goal, [e.target.name]: e.target.value }
    });
  };

  // Update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.put("/users/profile", form, {
      headers: { Authorization: `Bearer ${token} ` }
    });
    setForm(res.data);
    alert("Profile updated successfully!");
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 border border-gray-200"
        >
          {/* Header */}
          <h1 className="text-center text-3xl font-bold text-gray-800">
            Update Profile
          </h1>
          <p className="text-center text-gray-500 mt-2 text-sm">
            Keep your details and goals up to date
          </p>
          <hr className="my-6 border-gray-300" />

          {/* Basic Info */}
          <div className="space-y-4">
            <input
              name="name"
              value={form.name}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-3  shadow-sm  outline-none"
              onChange={handleChange}
            />
            <input
              name="age"
              value={form.age}
              placeholder="Age"
              className="w-full border border-gray-300 rounded-lg px-3 py-3  shadow-sm focus:ring-2  outline-none"
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="height"
                value={form.height}
                placeholder="Height (cm)"
                className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
                onChange={handleChange}
              />
              <input
                name="weight"
                value={form.weight}
                placeholder="Weight (kg)"
                className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
                onChange={handleChange}
              />
            </div>
            <label className="block text-gray-700 font-medium">Gender</label>
<select
  name="gender"
  value={form.gender}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none bg-white focus:ring-2 focus:ring-indigo-500"
>
  <option value="" disabled>Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

          </div>

          {/* Goals */}
          <h4 className="mt-8 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-bullseye text-indigo-600"></i> Goals
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Set your daily health targets
          </p>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="water"
              value={form.goal.water}
              placeholder="Water (glasses)"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
              onChange={handleGoalChange}
            />
            <input
              name="steps"
              value={form.goal.steps}
              placeholder="Steps"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
              onChange={handleGoalChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              name="sleep"
              value={form.goal.sleep}
              placeholder="Sleep (hours)"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
              onChange={handleGoalChange}
            />
            <input
              name="calories"
              value={form.goal.calories}
              placeholder="Calories (kcal)"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
              onChange={handleGoalChange}
            />
            <input
              name="weight"
              value={form.goal.weight}
              placeholder="Weight (kg)"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 shadow-sm outline-none"
              onChange={handleGoalChange}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg mt-8 shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>

  );
}

export default Profile;