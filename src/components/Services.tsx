import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaShoppingCart, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaGlobe size={40} className="text-green-400" />,
    title: "Portfolio Websites",
    desc: "Perfect for freelancers, artists, and professionals who want to showcase their work.",
  },
  {
    icon: <FaBuilding size={40} className="text-green-400" />,
    title: "Business Websites",
    desc: "Modern, responsive, and conversion-focused websites for companies and startups.",
  },
  {
    icon: <FaShoppingCart size={40} className="text-green-400" />,
    title: "E-commerce Stores",
    desc: "Fully functional online stores with payment integration and easy management.",
  },
  {
    icon: <FaCogs size={40} className="text-green-400" />,
    title: "Custom Web Solutions",
    desc: "Tailored apps or tools built exactly for your business needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#0f172a] text-gray-200 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-green-400"
        >
          What We Do
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 mb-12"
        >
          Complete Web Solutions Tailored for You
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#1e293b] p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-green-500/20 transition-transform"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <Link
            to="/services"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105"
          >
            See All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
