import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-16 left-4
        bg-gradient-to-r from-green-400 to-blue-500
        text-white p-3 rounded-full shadow-lg
        transform transition-transform duration-300
        hover:scale-110 hover:rotate-6
        animate-bounce
        z-50
        ${show ? "block" : "hidden"}
      `}
      aria-label="Scroll to Top"
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollTop;
