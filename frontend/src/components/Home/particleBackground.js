import React from 'react';
import './particleBackground.css';
import {Link} from "react-router-dom";

function ParticleBackground() {
    return ( 
        <>
    <div class="particles-container">
        <div class="particle"style={{width:"10px" ,height:"10px"}}></div>
        <div class="particle" style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" ></div>
        <div class="particle" style={{width:"10px" ,height:"10px"}}></div>
        <div class="particle" style={{width:"10px" ,height:"10px"}}></div>
        <div class="particle" ></div>
        <div class="particle" style={{width:"17px" ,height:"17px"}}></div>
        <div class="particle" style={{width:"17px" ,height:"17px"}}></div>
        <div class="particle" style={{width:"8px" ,height:"8px"}}></div>
        <div class="particle" ></div>
        <div class="particle" style={{width:"6px" ,height:"6px"}}></div>
        <div class="particle"  style={{width:"8px" ,height:"8px"}}></div>
        <div class="particle"  style={{width:"10px" ,height:"10px"}}></div>
        <div class="particle"  style={{width:"8px" ,height:"8px"}}></div>
        <div class="particle"  style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" style={{width:"8px" ,height:"8px"}}></div>
        <div class="particle"></div>
        <div class="particle" style={{width:"10px" ,height:"10px"}}></div>
        <div class="particle" style={{width:"6px" ,height:"6px"}}></div>
        <div class="particle"></div>
        <div class="particle" style={{width:"17px" ,height:"17px"}}></div>
        <div class="particle" style={{width:"14px" ,height:"14px"}}></div>
        <div class="particle" style={{width:"17px" ,height:"17px"}}></div>
        <div class="particle" style={{width:"12px" ,height:"12px"}}></div>
        <div class="particle"style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" style={{width:"6px" ,height:"6px"}}></div>
        <div class="particle" style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" style={{width:"5px" ,height:"5px"}}></div>
        <div class="particle" style={{width:"5px" ,height:"5px"}}></div>
        
        
        <div className="content text-center px-6 md:px-12">
  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
    Visualize your patterns.{" "}
    <span className="text-[#1976d2]">Built for neurodivergent minds.</span>
  </h1>

  <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
    Track your habits and mood on a grid made for your brain — not for dopamine.
    See what fuels you. Fix what drains you.
  </p>

  <div className="flex flex-wrap justify-center gap-4">
    <button className="px-6 py-3 rounded-lg bg-[#1976d2] text-white  hover:bg-[#176cc1] transition home-btn1">
      Visualize Now
    </button>

    <Link to="/login">
      <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white transition home-btn2">
        See Demo
      </button>
    </Link>
  </div>

  <div className="mt-6">
    <Link to="/blog" className="text-[#1976d2] font-medium hover:underline">
      Read our blog →
    </Link>
  </div>
</div>

    </div>
</>
     );
}
export default ParticleBackground;