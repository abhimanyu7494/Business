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

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 ${
        show ? "block" : "hidden"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
