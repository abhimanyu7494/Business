import React, { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes strongGlow {
        0% {
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.8),
                      0 0 30px rgba(37, 211, 102, 0.6),
                      0 0 45px rgba(37, 211, 102, 0.4);
        }
        50% {
          box-shadow: 0 0 25px rgba(37, 211, 102, 1),
                      0 0 50px rgba(37, 211, 102, 0.9),
                      0 0 70px rgba(37, 211, 102, 0.8);
        }
        100% {
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.8),
                      0 0 30px rgba(37, 211, 102, 0.6),
                      0 0 45px rgba(37, 211, 102, 0.4);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles: { button: React.CSSProperties; icon: React.CSSProperties } = {
    button: {
      position: "fixed",
      width: "65px",
      height: "65px",
      bottom: "100px",
      right: "50px",
      backgroundColor: "#25D366",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      zIndex: 1000,
      textDecoration: "none",
      animation: "strongGlow 2s infinite ease-in-out",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    icon: {
      margin: 0,
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1.3)";
    e.currentTarget.style.boxShadow =
      "0 0 40px rgba(37, 211, 102, 1), 0 0 70px rgba(37, 211, 102, 1), 0 0 100px rgba(37, 211, 102, 0.9)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "";
  };

  return (
    <a
      href="https://wa.me/919661104667"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SiWhatsapp style={styles.icon} />
    </a>
  );
};

export default WhatsAppButton;
