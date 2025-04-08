import React, { useState } from 'react';

const Services = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <section className="px-6 md:px-20 py-20 bg-white text-black">

      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap mb-4 md:mb-0 leading-tight">
          <span className="bg-[#B9FF66] px-3 py-1 rounded-md">Services</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-[#F3F3F3] p-8 rounded-2xl shadow-[6px_6px_0px_#000] hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start gap-4">
            {/* Left: Text */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                Search engine optimization
              </h3>
              {showFirst && (
                <p className="text-sm text-gray-800 mb-4">
                  SEO helps increase your visibility in search engines, bringing more organic traffic to your site and boosting your brand's online presence.
                </p>
              )}
              <button
                onClick={() => setShowFirst(!showFirst)}
                className="text-sm md:text-base font-medium text-black hover:underline flex items-center gap-1"
              >
                Learn more {showFirst ? '⬇' : '➜'}
              </button>
            </div>
            {/* Right: Icon/Image */}
            <div className="w-20 h-20 bg-white rounded-xl border border-black flex items-center justify-center text-3xl">
              🔍
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#B9FF66] p-8 rounded-2xl shadow-[6px_6px_0px_#000] hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start gap-4">
            {/* Left: Text */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                Pay-per-click advertising
              </h3>
              {showSecond && (
                <p className="text-sm text-black mb-4">
                  PPC advertising drives targeted traffic instantly by placing your ads on search engines and websites, ensuring you pay only when someone clicks.
                </p>
              )}
              <button
                onClick={() => setShowSecond(!showSecond)}
                className="text-sm md:text-base font-medium text-black hover:underline flex items-center gap-1"
              >
                Learn more {showSecond ? '⬇' : '➜'}
              </button>
            </div>
            {/* Right: Icon/Image */}
            <div className="w-20 h-20 bg-white rounded-xl border border-black flex items-center justify-center text-3xl">
              🖱️
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
