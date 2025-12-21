import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.js';
import Blog from "./components/Blog/BlogPage.js";
import Pomodoro from "./components/Pomodoro/PomodoroPage.js";

import './index.css';
import Navbar from './Navbar';
import Footer from './Footer.js';
import NotFound from './components/NotFound.js';
import Profileform from './pages/Profileform.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Profile from './pages/Profile.js';
import Logout from './pages/Logout.js';
import Dashboard from './TrackerForms/Dashboard.js';
import MainPage from './TrackerForms/MainPage.js';
import ProtectedRoute from './components/ProtectedRoute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="app-wrapper flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pomodoro' element={<Pomodoro />} />
          <Route path='/profileform' element={<Profileform />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/seedemo' element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);