import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaShoppingCart, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import servicesImg from "../assets/images/services-illustration.jpeg"; // ✅ Add your illustration here

const services = [
  {
    icon: <FaGlobe size={40} className="text-blue-500" />,
    title: "Portfolio Websites",
    desc: "Perfect for freelancers, artists, and professionals who want to showcase their work.",
  },
  {
    icon: <FaBuilding size={40} className="text-blue-500" />,
    title: "Business Websites",
    desc: "Modern, responsive, and conversion-focused websites for companies and startups.",
  },
  {
    icon: <FaShoppingCart size={40} className="text-blue-500" />,
    title: "E-commerce Stores",
    desc: "Fully functional online stores with payment integration and easy management.",
  },
  {
    icon: <FaCogs size={40} className="text-blue-500" />,
    title: "Custom Web Solutions",
    desc: "Tailored apps or tools built exactly for your business needs.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 overflow-hidden"
    >
      {/* 💡 Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          🧰 Services We Offer
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 mb-10"
        >
          Complete Web Solutions Tailored for You
        </motion.p>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 border border-gray-200 hover:border-blue-400 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/services"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold 
                       hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md"
          >
             See All Services
          </Link>
        </motion.div>
      </motion.div>
      {/* 🖼️ Right Side Illustration */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full md:w-1/2 flex justify-center"
>
  <motion.img
    src={servicesImg}
    alt="Our Web Design Services"
    className="w-100 sm:w-96 md:w-[500px] lg:w-[550px] h-auto rounded-2xl object-cover shadow-xl"
    loading="lazy"
    animate={{ y: [0, -8, 0] }}
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

export default Services;
