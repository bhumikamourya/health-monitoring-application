import React from 'react';
import { Link } from 'react-router-dom';

function Component1() {
    return (
        <>
            <div className="container mx-auto mt-10 p-5">
                
                {/* Heading + Description */}
                <div className="text-center mb-10">
                    <p className="text-lg bold-text">Pricing</p>
                    <h1 className="font-extrabold text-3xl mt-2">Upgrade your clarity.</h1>
                    <p className="text-lg mt-3">
                        Start with our free tools and see your patterns unfold. Upgrade when you're ready to go deeper for life, no subscriptions.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Starter Card */}
                    <div className="p-5 pricing-cards bg-white rounded-xl shadow-md">
                        <h3 className="text-lg">Starter</h3>
                        <p className="text-sm mt-2">Everything you need to begin building powerful habits and taking control of your routine</p>
                        <h1 className="font-bold text-2xl mt-2">Free</h1>
                        <Link to={"/login"}>
                            <button className="w-full mt-4 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition">
                                Start Building Habits
                            </button>
                        </Link>

                        <div className="mt-4 text-left text-sm leading-relaxed">
                            <p><i className="fa-solid fa-check text-green-500 mr-2"></i>Up to 3 core habits</p>
                            <p><i className="fa-solid fa-check text-green-500 mr-2"></i>Essential habit tracking</p>
                            <p><i className="fa-solid fa-check text-green-500 mr-2"></i>Daily mood tracking</p>
                            <p><i className="fa-solid fa-check text-green-500 mr-2"></i>Beautiful dark/light themes</p>
                            <p><i className="fa-solid fa-check text-green-500 mr-2"></i>Export your progress data</p>

                            <div className="mt-2 text-gray-400">
                                <p><i className="fa-solid fa-xmark mr-2"></i>Custom habit colors</p>
                                <p><i className="fa-solid fa-xmark mr-2"></i>Import data from other apps</p>
                                <p><i className="fa-solid fa-xmark mr-2"></i>Advanced progress insights</p>
                                <p><i className="fa-solid fa-xmark mr-2"></i>Priority support</p>
                                <p><i className="fa-solid fa-xmark mr-2"></i>Early access to new features</p>
                            </div>
                        </div>
                    </div>

                    {/* Master Card */}
                    <div className="p-5 pricing-card2 bg-gradient-to-br from-blue-500 to-indigo-600  rounded-xl shadow-md">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-lg">Master</span>
                            <div className='text-center complete-text bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium'>
                                Complete Control
                            </div>
                        </div>
                        <p className="text-sm mt-2">
                            Complete control over your habits with unlimited tracking, personalization, and advanced insights
                        </p>
                        <p className="text-lg mt-2"><b className="text-2xl">$19</b> USD one-time payment</p>
                        <button className="w-full mt-4 bg-white text-indigo-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                            Unlock Full Control
                        </button>

                        <div className="mt-4 text-left text-sm leading-relaxed">
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Unlimited habits for total life control</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Advanced analytics & insights</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Daily mood tracking</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Beautiful dark/light themes</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Export your progress data</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Custom colors to stack your habits</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Import data from other apps</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Detailed progress reports (coming soon)</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>Priority support when you need help</p>
                            <p><i className="fa-solid fa-check text-green-200 mr-2"></i>First access to powerful new features</p>
                        </div>
                    </div>

                </div>

                {/* Footer Note */}
                <p className="text-center mt-6 text-xs text-gray-500">
                    If you cannot afford the app but still would like premium access for your own journey,
                    send us an email here letting us know your situation and we'll gift you a membership
                </p>
            </div>
        </>
    );
}

export default Component1;
