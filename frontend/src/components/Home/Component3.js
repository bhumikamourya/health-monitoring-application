import { Link } from "react-router-dom";

function Component3() {
  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Take control of your habits
      </h1>
      <p className="text-base md:text-lg mt-3 text-center max-w-2xl mx-auto text-gray-700">
        Start building powerful habits for free with
        our lifetime plan. No subscriptions, no hidden fees.
      </p>

      {/* Pricing Cards */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
        {/* Starter Card */}
        <div className="flex-1 max-w-sm border rounded-xl shadow-md p-6 bg-white ">
          <div className="text-center">
            <h3 className="text-lg font-semibold mt-2">Starter</h3>
            <h2 className="text-3xl font-bold mt-2">Free</h2>
            <p className="text-gray-600 mt-1">Perfect for getting started</p>
          </div>
          <div className="mt-6 space-y-2 text-gray-700 text-sm leading-relaxed">
            <p>
              <i className="fa-regular fa-square-check text-green-600"></i> 3
              core habits
            </p>
            <p>
              <i className="fa-regular fa-square-check text-green-600"></i>{" "}
              Essential tracking
            </p>
            <p>
              <i className="fa-regular fa-square-check text-green-600"></i>{" "}
              Beautiful themes
            </p>
            <p>
              <i className="fa-regular fa-square-check text-green-600"></i>{" "}
              Export your data
            </p>
          </div>
          <div className="text-center mt-6">
            <Link to="/login" >
              <button className="w-full md:w-auto px-6 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
                Start Building Habits
              </button>
            </Link>
          </div>
        </div>

        {/* Master Card
        <div className="flex-1 max-w-sm rounded-xl shadow-md p-6  relative coloured-card">
          <div className="text-center font-semibold uppercase tracking-wide complete-control-text">
            Complete Control
          </div>
          <div className="text-center">
            <h3 className="text-lg mt-3">Master</h3>
            <h2 className="text-3xl font-bold mt-3">$19</h2>
            <p className="text-sm text-gray-500 mt-1">
              One-time payment for lifetime access
            </p>
          </div>
          <div className="mt-6 space-y-2 text-sm leading-relaxed">
            <p>
              <i className="fa-regular fa-square-check"></i> Unlimited
              habits
            </p>
            <p>
              <i className="fa-regular fa-square-check "></i> Custom
              colors & organization
            </p>
            <p>
              <i className="fa-regular fa-square-check "></i> Advanced
              insights
            </p>
            <p>
              <i className="fa-regular fa-square-check "></i> Priority
              support
            </p>
          </div>
          <div className="text-center mt-6">
            <button className="w-full md:w-auto px-6 py-3 bg-white text-[#1976d2] font-medium rounded-lg hover:bg-gray-100 transition">
              Unlock Full Control
            </button>
          </div>
        </div> */}
      </div>

      {/* Footer Note */}
      {/* <p className="text-center mt-6 text-xs text-gray-600 max-w-xl mx-auto">
        If you can not afford the app but still would like premium access for
        your own journey, send us an email here letting us know your situation
        and we'll gift you a membership
      </p> */}
    </div>
  );
}

export default Component3;
