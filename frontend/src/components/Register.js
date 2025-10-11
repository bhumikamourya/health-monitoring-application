import { useState } from 'react';
import api from '../utils/api.js';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [form, setform] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/register", form);
            localStorage.setItem('token', res.data.token);
            alert('User Registerd Successfully!');
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong!");
            }
        }
    }
    return (
        <>
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-20 px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-8"
        >
          {/* Heading */}
          <h1 className="text-center font-bold text-3xl text-gray-800">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
            Join us and start your journey
          </p>

          {/* Name */}
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Full Name
          </label>
          <input
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="name"
            required
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="email"
            required
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="password"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Register
          </button>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
        </>
    );
}

export default Register;