// src/components/Contact.tsx
import { motion } from "framer-motion";
import React from "react";

// Temporary placeholder image
const contactIllustration = "https://via.placeholder.com/400x300?text=Contact+Illustration";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0f172a] text-gray-200 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* 📝 Left Side Text + Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Let’s build a website that helps your brand shine online. Whether you
          need a personal website, a business platform, or something custom — I’m here to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            🟢 Get a Free Quote
          </a>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            🔵 Contact Now
          </a>
        </div>
      </motion.div>

      {/* 🖼️ Right Side Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src={contactIllustration}
          alt="Contact Illustration"
          className="w-80 md:w-[400px] rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
