import React from "react";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
>>>>>>> 590292f (Updated images and components in Business website)
import Video1 from "../assets/images/Welcome.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
<<<<<<< HEAD
      {/* Background Blur Layer for depth */}
=======
      {/* Background blur video */}
>>>>>>> 590292f (Updated images and components in Business website)
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

<<<<<<< HEAD
      {/* Main Video - fully visible and centered */}
=======
      {/* Foreground overlay */}
>>>>>>> 590292f (Updated images and components in Business website)
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <video
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
<<<<<<< HEAD
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
=======
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
      </div>
>>>>>>> 590292f (Updated images and components in Business website)

      {/* Animated Text */}
      <div className="relative z-10 text-center px-4 md:px-8 mt-20 md:mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-black tracking-wide drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-pulse-slow"
        >
          <Typewriter
            words={[
              "Build Stunning Websites with A3 Technos",
              "Design. Develop. Deliver.",
              "Turning Ideas into Digital Reality 🚀",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={35}
            delaySpeed={1600}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
        >
          We craft modern, fast, and responsive websites — built to impress and
          perform. Every pixel we design has a purpose, every line of code tells
          your story.
        </motion.p>
      </div>

      {/* Down Arrow */}
<<<<<<< HEAD
      <div className="absolute bottom-8 animate-bounce text-white/80 z-10">
=======
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-8 animate-bounce text-white/80 z-10"
      >
>>>>>>> 590292f (Updated images and components in Business website)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mx-auto md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>

      {/* Custom animation style */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.3); opacity: 1; }
          50% { text-shadow: 0 0 40px rgba(255,255,255,0.6); opacity: 0.95; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
