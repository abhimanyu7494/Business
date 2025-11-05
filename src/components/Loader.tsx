import { motion } from "framer-motion";

const Loader = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-[#0f172a] z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="w-16 h-16 border-4 border-t-blue-400 border-gray-700 rounded-full"
    ></motion.div>
  </div>
);

export default Loader;
