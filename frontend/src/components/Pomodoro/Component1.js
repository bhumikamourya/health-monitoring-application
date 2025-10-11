import React from 'react';
import { Link } from 'react-router-dom';

function Component1() {
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex justify-center mt-10">
                    <div className="w-full md:w-2/3 text-center">

                        {/* Heading & Description */}
                        <h1 className="text-3xl font-extrabold">Pomodoro Timer</h1>
                        <p className="text-lg mt-3">
                            Stay focused and productive with our beautiful Pomodoro timer. Work in focused intervals and take regular breaks.
                        </p>

                        {/* Timer Card */}
                        <div className="pomodoro-card mt-6 p-6 rounded-xl shadow-md bg-white">

                            {/* Buttons: Work / Short / Long */}
                            <div className="flex justify-center flex-wrap">
                                <button className="m-2 coloured-btn px-10 py-2 rounded-lg">Work</button>
                                <button className="m-2 border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition">Short Break</button>
                                <button className="m-2 border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition">Long Break</button>
                            </div>

                            {/* Timer */}
                            <h1 className="mt-4 text-6xl font-bold">25 : 00</h1>
                            <p className="text-sm mt-2">Session 1 - Focus Time</p>

                            {/* Control Buttons */}
                            <div className="flex justify-center mt-4 flex-wrap">
                                <button className="m-3 border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                                    <i className="fa-solid fa-arrow-rotate-left"></i>
                                </button>
                                <button className="m-3 coloured-btn px-6 py-2 rounded-lg">
                                    <i className="fa-solid fa-play"></i> &nbsp;Start
                                </button>
                                <button className="m-3 border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                                    <i className="fa-solid fa-sliders"></i>
                                </button>
                            </div>
                        </div>

                        {/* Footer text & Sign Up */}
                        <p className="text-sm mt-4">Track your progress and build lasting habits</p>
                        <Link to={'/login'}>
                            <button className="btn btn-success mt-4 mb-10 px-6 py-2 rounded-lg">
                                <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Sign Up Free
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component1;
