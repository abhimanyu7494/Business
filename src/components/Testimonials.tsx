import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(60); // duration in seconds

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isPaused, speed]);

  return (
    <section
      id="testimonials"
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200/50 to-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10 text-black text-center z-10 relative">
        What Clients Say
      </h2>

      <motion.div
        className="flex gap-6 w-max relative z-10 cursor-grab"
        animate={controls}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        drag="x"
        dragConstraints={{ left: -9999, right: 0 }}
        dragElastic={0.05}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
      >
        {testimonials.concat(testimonials).map((t, i) => (
          <div
            key={i}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl min-w-[280px] flex-shrink-0 shadow-xl transform transition-all hover:scale-105"
          >
            <p className="italic text-green-600 text-sm mb-4 leading-relaxed">
              “{t.feedback}”
            </p>
            <h4 className="font-semibold text-black text-base mb-1">{t.name}</h4>
            <span className="text-xs text-gray-600">{t.role}</span>
          </div>
        ))}
      </motion.div>

      {/* Speed Control Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setSpeed((prev) => Math.max(prev - 10, 10))}
          className="w-10 h-10 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => setSpeed((prev) => prev + 10)}
          className="w-10 h-10 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition flex items-center justify-center"
        >
          -
        </button>
      </div>

      <div className="absolute inset-0 bg-gray-200/10 pointer-events-none rounded-3xl"></div>
    </section>
  );
};

export default Testimonials;
