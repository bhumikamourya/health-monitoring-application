import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedMenu, setselectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <nav className="background shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => handleMenuClick(0)}
            className={`${selectedMenu === 0 ? activeMenuClass : menuClass} text-white font-bold text-2xl`}
          >
            HealthTracker
          </Link>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              onClick={() => handleMenuClick(1)}
              className={`${selectedMenu === 1 ? activeMenuClass : menuClass}  hover:text-green-300`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => handleMenuClick(2)}
              className={`${selectedMenu === 2 ? activeMenuClass : menuClass} hover:text-green-300`}
            >
              Blog
            </Link>
            <Link
              to="/pomodoro"
              onClick={() => handleMenuClick(4)}
              className={`${selectedMenu === 4 ? activeMenuClass : menuClass}  hover:text-green-300`}
            >
              <i className="fa-solid fa-stopwatch mr-1"></i> Pomodoro
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <a className="nav-links text-white text-xl cursor-pointer">
              <i className="fa-solid fa-sun"></i>
            </a>

            <Link to="/register">
              <button className="nav-links bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="nav-links border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition">
                LogIn
              </button>
            </Link>
            <Link to="/profile" className="nav-links text-white text-3xl">
              <i className="fa-solid fa-circle-user"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
