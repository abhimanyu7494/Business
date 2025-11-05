import { useState, useEffect } from "react";
import Img2 from "../assets/images/2.jpeg";
import Img3 from "../assets/images/3.jpeg";
import Img4 from "../assets/images/4.jpeg";
import Video1 from "../assets/images/1.mp4";

const media = [
  { type: "video", src: Video1 },
  { type: "image", src: Img2 },
  { type: "image", src: Img3 },
  { type: "image", src: Img4 },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Media */}
      <div className="absolute inset-0 flex items-center justify-center">
        {media[currentIndex].type === "video" ? (
          <video
            src={media[currentIndex].src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        ) : (
          <img
            src={media[currentIndex].src}
            alt={`Hero ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 mt-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Build Stunning Websites with A3 Technos
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
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
      <div className="absolute bottom-8 animate-bounce text-white/80">
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
