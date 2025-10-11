import React from 'react';

function Component1() {
    return (
        <div className="mt-16 p-5 component1-container">
            <div className="max-w-7xl mx-auto text-center p-5">
                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-semibold mt-10 px-4">
                    Master your daily routine with powerful habit tools
                </h1>

                {/* 3 Cards Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Card 1 */}
                    <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white ">
                        <div className="flex justify-center text-indigo-600 text-4xl ">
                            <i className="fa-regular fa-square-check component1-icons"></i>
                        </div>
                        <h2 className="text-lg font-medium mt-4">Visual Progress Grid</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Your week, visualized like your code commits but for your mind. 
                            See streaks, slumps, and wins in seconds.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
                        <div className="flex justify-center text-indigo-600 text-4xl">
                            <i className="fa-solid fa-calendar-week component1-icons"></i>
                        </div>
                        <h2 className="text-lg font-medium mt-4">Daily Accountability</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            No pings. No badges. Just a quiet nudge from your past self 
                            and a visual streak that pulls you forward.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
                        <div className="flex justify-center text-indigo-600 text-4xl ">
                            <i className="fa-solid fa-chart-line component1-icons"></i>
                        </div>
                        <h2 className="text-lg font-medium mt-4">Mood Intelligence</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Your habits don't exist in a vacuum. Track your mood and see 
                            which routines help you thrive and which ones silently 
                            sabotage your energy.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Component1;
