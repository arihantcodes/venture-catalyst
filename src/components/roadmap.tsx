import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Gamifying the Process
        </h1>
        <p className="text-lg mt-4">Roadmap to making your venture a reality</p>
      </div>

      <div className="relative w-full max-w-6xl px-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex flex-wrap justify-between">
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Introduction</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>What is a Start-up?</li>
                <li>Why should you build your own?</li>
                <li>Why us?</li>
                <li>What is Entrepreneurship?</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 1</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Problem Statement</li>
                <li>What to solve?</li>
                <li>How to solve?</li>
                <li>Market Research. What is it and how to do it?</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 2</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Continuing Market Research</li>
                <li>Competitor Analysis</li>
                <li>Target Audience</li>
                <li>SWOT</li>
                <li>Proof of Concept</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 3</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="text-red-400">MVP. Welcome to the big games</li>
                <li>How to make an MVP?</li>
                <li>How to Monetize your business?</li>
                <li>Scalable intelligent routing</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 4</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Angel Investors</li>
                <li>How to network?</li>
                <li>Ask yourself</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-10 sm:mb-0">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 5</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>How to proceed further?</li>
                <li>Reiteration?</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="absolute w-full text-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold">Module 6</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Product Development</li>
                <li>Structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
