import { motion } from "framer-motion";
import React from "react";
import whyChooseImg from "../assets/images/whychoos.jpeg"; // ✅ Correct import

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: "✅",
      title: "Simple Process",
      desc: "From idea to launch — smooth, clear, and hassle-free.",
    },
    {
      icon: "🚀",
      title: "Fast & Responsive",
      desc: "Every website runs smoothly on all devices.",
    },
    {
      icon: "🎨",
      title: "Creative & Modern Design",
      desc: "Looks good and feels amazing.",
    },
    {
      icon: "🔒",
      title: "Privacy-Focused",
      desc: "Your data and business info stay safe.",
    },
    {
      icon: "💬",
      title: "Direct Support",
      desc: "You’ll always talk to the developer directly — no middlemen.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 px-6 bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 
                 flex flex-col-reverse md:flex-row items-center justify-center 
                 gap-12 md:gap-20 overflow-hidden transition-colors duration-500"
    >
      {/* 💡 Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 
                       text-gray-900 dark:text-white text-center md:text-left">
          Why Clients Choose Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 
                      text-center md:text-left">
          Your goals come first. Always.
        </p>

        <div className="space-y-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
          <img
            src={whyChooseImg}
            alt="Why Choose A3 Technos"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover 
                       brightness-100 dark:brightness-90 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t 
                          from-black/10 via-transparent 
                          rounded-2xl dark:from-black/40"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChoose;
