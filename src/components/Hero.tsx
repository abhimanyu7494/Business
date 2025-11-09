import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import Video1 from "../assets/images/Welcome.mp4";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playError, setPlayError] = useState<string | null>(null);

  useEffect(() => {
    const tryPlay = async () => {
      const v = videoRef.current;
      if (!v) return;
      try {
        await v.play();
        setPlayError(null);
      } catch (err: unknown) {
        console.warn("Video play() rejected:", err);
        setPlayError(
          "Autoplay blocked — click anywhere or unmute manually to play."
        );
      }
    };

    tryPlay();

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          onLoadedData={() => console.log("Background video loaded")}
          onError={(e) => {
            console.error("Background video error:", e);
            setPlayError("Video load/play error — check console.");
          }}
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-wide drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-pulse-slow"
        >
          <Typewriter
            words={[
              "Build Stunning Websites with A3 Technos",
              "Design. Develop. Deliver.",
              "Turning Ideas into Digital Reality 🚀",
            ]}
            loop
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
          className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
        >
          We craft modern, fast, and responsive websites — built to impress and
          perform. Every pixel we design has a purpose, every line of code tells
          your story.
        </motion.p>

        {playError && (
          <p className="mt-4 text-red-300 text-sm">
            ⚠️ {playError}
          </p>
        )}
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-8 animate-bounce text-white/80 z-10"
      >
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
