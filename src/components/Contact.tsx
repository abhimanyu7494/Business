import { motion } from "framer-motion";
import React from "react";

import contactIllustration from "../assets/images/contactIllustration.jpg";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-gray-900 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Let’s build a website that helps your brand shine online. Whether you
          need a personal website, a business platform, or something custom — I’m here to help.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/916207282922"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md text-center mx-auto"
          >
            Get a Free Quote
          </a>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md text-center mx-auto"
          >
            Contact Now
          </a>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <div className="w-72 sm:w-80 md:w-[400px] lg:w-[450px] relative rounded-xl overflow-hidden shadow-xl">
          <img
            src={contactIllustration}
            alt="Contact Illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
