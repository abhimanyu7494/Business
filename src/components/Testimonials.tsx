import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const speed = 240; // slower scroll

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
      className="py-20 px-6 relative overflow-hidden bg-gray-50"
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{ x: ["0%", "25%", "0%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-green-300 via-blue-200 to-purple-300 opacity-20 rounded-full filter blur-3xl -top-32 -left-64"></div>
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-pink-300 via-yellow-200 to-indigo-300 opacity-20 rounded-full filter blur-2xl -bottom-32 -right-64"></div>
      </motion.div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 text-black text-center relative z-10">
        What Clients Say
      </h2>

      {/* Carousel */}
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
          <motion.div
            key={i}
            className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 backdrop-blur-sm p-6 rounded-2xl min-w-[280px] flex-shrink-0 shadow-xl shadow-green-200/30 border border-white/30 overflow-hidden"
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 40px rgba(0,255,128,0.2)" }}
          >
            {/* Floating light effect */}
            <motion.div
              className="absolute w-20 h-20 bg-green-200/40 rounded-full blur-3xl -top-10 -right-10 pointer-events-none"
              animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <p className="italic text-green-600 text-sm mb-4 leading-relaxed">
              “{t.feedback}”
            </p>
            <h4 className="font-semibold text-black text-base mb-1">{t.name}</h4>
            <span className="text-xs text-gray-600">{t.role}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
