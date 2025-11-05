import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

// Temporary placeholder image
const aboutImg = "https://via.placeholder.com/400x400?text=About+Image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-float top-[-10%] left-[-10%]" />
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-slow top-[50%] right-[-10%]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src={aboutImg}
          alt="About A3 Technos"
          className="w-80 md:w-[400px] rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-green-600">A3 Technos</span>, 
          a web development studio founded by{" "}
          <span className="font-semibold">Abhimanyu</span> — a passionate web
          developer who loves turning creative ideas into powerful online experiences.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our mission is simple — to make web development easy, affordable, and
          accessible for everyone. Whether it’s a personal portfolio, business
          website, or online store, we deliver custom solutions designed to match
          your goals and style.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We believe your website is your digital identity — and we’re here to
          make it look, feel, and perform perfectly.
        </p>

        <Link
          to="/about"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
        >
          Learn More About Me
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
