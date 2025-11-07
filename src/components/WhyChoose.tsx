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
      className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 
                 flex flex-col-reverse md:flex-row items-center justify-center 
                 gap-12 md:gap-20 overflow-hidden"
    >
      {/* 💡 Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-center md:text-left"
        >
          Why Clients Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600 mb-10 text-center md:text-left"
        >
          Your goals come first. Always.
        </motion.p>

        <div className="space-y-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-white shadow-md hover:shadow-lg 
                         rounded-xl p-4 transition-all duration-300"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ Right Side Image with Soft Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.img
          src={whyChooseImg}
          alt="Why Choose A3 Technos"
          className="w-100 sm:w-80 md:w-[400px] rounded-2xl shadow-2xl object-cover"
          loading="lazy"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default WhyChoose;
