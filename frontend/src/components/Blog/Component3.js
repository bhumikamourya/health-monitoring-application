import React from "react";
import { Link } from "react-router-dom";

function Component3() {
    return (
        <>
            <div className="py-10 px-5">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-2xl font-bold mt-5">More Articles Coming Soon</h1>
                    <p className="text-lg mt-3">
                        We're working on more in-depth guides about habit formation, productivity tips,
                        and the science behind visual tracking. Stay tuned for more insights!
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to={"/login"}>
                            <button className="coloured-btn px-6 py-2 rounded-md">
                                Start Building Habits
                            </button>
                        </Link>
                        <button className="border border-gray-400 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-md">
                            Learn More About Habitualy
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component3;
