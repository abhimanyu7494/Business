import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-3 text-[#00C48C]">A3 Technos</h2>
          <p className="text-gray-300">
            Crafting Professional Websites That Represent Your Vision
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#00C48C] transition-colors duration-300">Home</a></li>
            <li><a href="/services" className="hover:text-[#00C48C] transition-colors duration-300">Services</a></li>
            <li><a href="/projects" className="hover:text-[#00C48C] transition-colors duration-300">Projects</a></li>
            <li><a href="/pricing" className="hover:text-[#00C48C] transition-colors duration-300">Pricing</a></li>
            <li><a href="/contact" className="hover:text-[#00C48C] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">📍 Patna, Bihar, India</p>
          <p className="text-gray-300 mb-2">📞 +91 6207282922</p>
          <p className="text-gray-300">✉ abhimanyukrpandey@zohomail.in</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-5">
            <a href="#" className="text-[#1877F2] text-lg hover:scale-110 transform transition-transform duration-300"><FaFacebookF /></a>
            <a href="#" className="text-[#E4405F] text-lg hover:scale-110 transform transition-transform duration-300"><FaInstagram /></a>
            <a href="#" className="text-[#0A66C2] text-lg hover:scale-110 transform transition-transform duration-300"><FaLinkedinIn /></a>
            <a href="#" className="text-[#1DA1F2] text-lg hover:scale-110 transform transition-transform duration-300"><FaTwitter /></a>
          </div>

          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row shadow-lg">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l sm:rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none flex-1 mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-[#00C48C] px-4 rounded-r sm:rounded-r font-semibold hover:bg-[#00a972] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© 2025 A3 Technos. All Rights Reserved.</span>
        <span>|</span>
        <a href="/privacy" className="hover:text-[#00C48C] transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="/terms" className="hover:text-[#00C48C] transition-colors">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
