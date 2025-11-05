import React from "react";
import Video1 from "../assets/images/Welcome.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Blur Layer for depth */}
      <div className="absolute inset-0">
        <video
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40"
        />
      </div>

      {/* Main Video - fully visible and centered */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <video
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
          className="max-w-full max-h-full object-contain transition-all duration-700 rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 md:px-12 mt-20 md:mt-32">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Build Stunning Websites with A3 Technos
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          We design and develop modern, fast, and user-friendly websites that
          help individuals and businesses grow online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            🟢 Start Your Project
          </a>
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            🔵 View My Work
          </a>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 animate-bounce text-white/80 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
