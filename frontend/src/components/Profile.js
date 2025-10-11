import { useState, useEffect } from "react";
import api from "../utils/api.js";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/profile", {
          headers: { Authorization: `Bearer ${token} ` }
        });
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, [token]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <>
    <div className="min-h-screen flex justify-center items-start bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <i className="fa-solid fa-user text-indigo-600"></i> Profile Details
        </h2>
        <hr className="my-3 border-gray-200" />

        {/* Info */}
        <div className="space-y-3 text-gray-700 text-base md:text-lg">
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {user.age || "Not set"}
          </p>
          <p>
            <span className="font-semibold">Height:</span>{" "}
            {user.height ? `${user.height} cm` : "Not set"}
          </p>
          <p>
            <span className="font-semibold">Weight:</span>{" "}
            {user.weight ? `${user.weight} kg` : "Not set"}
          </p>
          <p>
            <span className="font-semibold">Gender:</span>{" "}
            {user.gender || "Not set"}
          </p>
        </div>

        {/* Goals Section */}
        <div className="mt-6">
          <p className="text-base md:text-lg font-semibold flex items-center gap-2 text-gray-800">
            <i className="fa-solid fa-bullseye text-indigo-600"></i> Goals:
          </p>
          {user.goal ? (
            <ul className="mt-2 space-y-1 text-gray-700 text-sm md:text-base">
              <li>
                <i className="fa-solid fa-droplet text-blue-500 mr-2"></i> Water:{" "}
                {user.goal.water} glasses
              </li>
              <li>
                <i className="fa-solid fa-shoe-prints text-green-600 mr-2"></i>{" "}
                Steps: {user.goal.steps} steps
              </li>
              <li>
                <i className="fa-solid fa-bed text-purple-500 mr-2"></i> Sleep:{" "}
                {user.goal.sleep} hrs
              </li>
              <li>
                <i className="fa-solid fa-fire text-orange-500 mr-2"></i>{" "}
                Calories: {user.goal.calories} kcal
              </li>
              <li>
                <i className="fa-solid fa-fire text-orange-500 mr-2"></i>{" "}
                Weight: {user.goal.weight} kg
              </li>
            </ul>
          ) : (
            <p className="text-sm text-gray-500 mt-2">Not set</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <Link
            to={"/profileform"}
            className="w-1/2 text-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2.5 rounded-lg text-base font-medium transition duration-200"
          >
            Update
          </Link>

          <Link
            to={"/logout"}
            className="w-1/2 text-center border border-rose-500 text-rose-500 hover:bg-rose-200 py-2.5 rounded-lg text-base font-medium transition duration-200"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>

    </>
  );
}

export default Profile;