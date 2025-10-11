import React from "react";

function Component1() {
  return (
    <>
      <div className="w-full px-5 py-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mt-10 text-3xl md:text-5xl font-semibold">
            The Science of <b className="bold-text">Visual Habits</b>
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            Discover why simple grids are more powerful than complex systems.
            Learn the psychology behind visual tracking and how to build habits
            that actually stick.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-3">
            <button className="coloured-btn m-1 px-5 py-2 rounded-md">
              Read Our Latest Article
            </button>
            <button className="m-1 px-5 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Start Your Grid
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component1;
