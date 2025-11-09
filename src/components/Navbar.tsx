import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-200 overflow-hidden bg-transparent backdrop-blur-lg"
    >
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-float top-[-20%] left-[-10%]"></div>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-float-slow top-[10%] left-[70%]"></div>
        <div className="absolute w-72 h-72 bg-white/20 rounded-full filter blur-2xl animate-float top-[50%] left-[40%]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        <Link to="/" className="flex items-center gap-2 z-20">
          <img
            src="/logo.png"
            alt="A3T Technos Logo"
            className="w-10 h-10 object-contain drop-shadow-lg"
          />
          <span className="text-2xl font-bold text-white hover:text-gray-100 transition">
            A3 T<span className="text-green-500">echnos</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-6 font-medium z-20">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition-all duration-200 ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-200"
                }`
              }
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-20 p-2 rounded-md bg-black/30 backdrop-blur-sm text-white hover:text-yellow-200 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 border-t border-gray-200 shadow-md relative z-10 bg-black/60 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 mt-2 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
