import React from "react";

function Component2() {
    return (
        <>
            <div className="component1-container py-10">
                <div className="container mx-auto px-5">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold">Latest Articles</h1>
                        <p className="text-lg mt-2">
                            Insights on habit formation, productivity, and the science behind visual tracking
                        </p>
                    </div>

                    {/* Responsive grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        
                        {/* Card 1 */}
                        <div className="blog-component2-card rounded-lg shadow-md overflow-hidden bg-white">
                            <img src="/media/5.png" alt="..." className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <a href="">
                                    <h5 className="text-lg font-semibold hover:underline">
                                        3 Best ADHD Tools That Actually Work (From Someone Who's Tried Them All)
                                    </h5>
                                </a>
                                <p className="text-sm mt-2">
                                    Cut through the noise. After testing dozens of productivity apps, here are the only three tools that actually help ADHD brains stay organized, focused, and productive.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    <i className="fa-solid fa-user"></i> Habitualy Team &nbsp;&nbsp;
                                    <i className="fa-solid fa-calendar-days"></i> 26/6/2025 &nbsp;&nbsp;
                                    <i className="fa-regular fa-clock"></i> 7 min read
                                </p>
                                <div className="mt-2">
                                    <a className="capsule-text">adhd</a>&nbsp;&nbsp;
                                    <a className="capsule-text">tools</a>
                                </div>
                                <a href="" className="links inline-block mt-3">
                                    Read more →
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="blog-component2-card rounded-lg shadow-md overflow-hidden bg-white">
                            <img src="/media/2.png" alt="..." className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <a href="">
                                    <h5 className="text-lg font-semibold hover:underline">
                                        Should You Have a Daily Checklist?
                                    </h5>
                                </a>
                                <p className="text-sm mt-2">
                                    Discover why daily checklists are one of the most powerful tools for clarity, focus, and habit formation. Learn the science behind why they work and how to build one that sticks.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    <i className="fa-solid fa-user"></i> Habitualy &nbsp;&nbsp;
                                    <i className="fa-solid fa-calendar-days"></i> 26/5/2025 &nbsp;&nbsp;
                                    <i className="fa-regular fa-clock"></i> 5 min
                                </p>
                                <div className="mt-2">
                                    <a className="capsule-text">productivity</a>&nbsp;&nbsp;
                                    <a className="capsule-text">checklists</a>
                                </div>
                                <a href="" className="links inline-block mt-3">
                                    Read more →
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="blog-component2-card rounded-lg shadow-md overflow-hidden bg-white">
                            <img src="/media/4.png" alt="..." className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <a href="">
                                    <h5 className="text-lg font-semibold hover:underline">
                                        How to Color Code Your Habits
                                    </h5>
                                </a>
                                <p className="text-sm mt-2">
                                    Discover the psychology of color in habit tracking and learn three powerful ways to use color coding to enhance your habit-building journey. From categorization to priority setting, colors can transform how you view and maintain your habits.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    <i className="fa-solid fa-user"></i> Habitualy &nbsp;&nbsp;
                                    <i className="fa-solid fa-calendar-days"></i> May 28, 2025 &nbsp;&nbsp;
                                    <i className="fa-regular fa-clock"></i> 6 min
                                </p>
                                <div className="mt-2">
                                    <a className="capsule-text">habits</a>&nbsp;&nbsp;
                                    <a className="capsule-text">psychology</a>
                                </div>
                                <a href="" className="links inline-block mt-3">
                                    Read more →
                                </a>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="blog-component2-card rounded-lg shadow-md overflow-hidden bg-white">
                            <img src="/media/1.png" alt="..." className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <a href="">
                                    <h5 className="text-lg font-semibold hover:underline">
                                        Why Grids Can Boost Your Productivity
                                    </h5>
                                </a>
                                <p className="text-sm mt-2">
                                    Discover the science and psychology behind visual habit tracking. Learn why simple grids are more effective than complex productivity systems for building lasting habits.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    <i className="fa-solid fa-user"></i> Habitualy &nbsp;&nbsp;
                                    <i className="fa-solid fa-calendar-days"></i> 25/5/2025 &nbsp;&nbsp;
                                    <i className="fa-regular fa-clock"></i> 6 min
                                </p>
                                <div className="mt-2">
                                    <a className="capsule-text">productivity</a>&nbsp;&nbsp;
                                    <a className="capsule-text">productivity</a>
                                </div>
                                <a href="" className="links inline-block mt-3">
                                    Read more →
                                </a>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="blog-component2-card rounded-lg shadow-md overflow-hidden bg-white">
                            <img src="/media/3.png" alt="..." className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <a href="">
                                    <h5 className="text-lg font-semibold hover:underline">
                                        Streaks: Why It Takes 30 Days to Build a Habit
                                    </h5>
                                </a>
                                <p className="text-sm mt-2">
                                    Uncover the truth behind the 30-day habit formation myth. Explore the latest research on how long it really takes to build lasting habits and why streaks are your secret weapon.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    <i className="fa-solid fa-user"></i> Habitualy &nbsp;&nbsp;
                                    <i className="fa-solid fa-calendar-days"></i> 27/5/2025 &nbsp;&nbsp;
                                    <i className="fa-regular fa-clock"></i> 7 min
                                </p>
                                <div className="mt-2">
                                    <a className="capsule-text">habits</a>&nbsp;&nbsp;
                                    <a className="capsule-text">streaks</a>
                                </div>
                                <a href="" className="links inline-block mt-3">
                                    Read more →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Component2;
