import { motion } from "framer-motion";
import React from "react";

// Temporary placeholder image
const whyChooseImg = "https://via.placeholder.com/400x400?text=Why+Choose";

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
      className="py-20 px-6 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      {/* 💡 Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mb-12 md:mb-0"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Why Clients Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your goals come first. Always.
        </p>

        <div className="space-y-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ Right Side Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={whyChooseImg}
          alt="Why Choose A3 Technos"
          className="w-80 md:w-[400px] rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default WhyChoose;
