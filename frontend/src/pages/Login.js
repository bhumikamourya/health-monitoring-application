import React, { useState } from 'react';
import api from '../utils/api.js';
import {Link,useNavigate} from 'react-router-dom';

function Login() {
    const [form, setform] = useState({ email: "", password: "" });
     const navigate = useNavigate(); 
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/login", form);
            localStorage.setItem("token", res.data.token);
            alert('Login Successful!');
            navigate("/");
        } catch (error) {
            if (error.response && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong!");
            }
        }
    };
    return (
        <>
             <div className="flex items-center justify-center min-h-[80vh] bg-gray-20 px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-8"
        >
          <h1 className="text-center font-bold text-3xl text-gray-800">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
            Sign in to continue your journey
          </p>

          <label
            htmlFor="emailAddress"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Email address
          </label>
          <input
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="emailAddress"
            required
          />

          <label
            htmlFor="userpassword"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="userpassword"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Login
          </button>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
        </>
    );
}

export default Login;