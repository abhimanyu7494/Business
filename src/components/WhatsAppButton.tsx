import { useEffect, CSSProperties } from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes strongGlow {
        0% {
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.6),
                      0 0 20px rgba(37, 211, 102, 0.4);
        }
        50% {
          box-shadow: 0 0 20px rgba(37, 211, 102, 1),
                      0 0 40px rgba(37, 211, 102, 0.8);
        }
        100% {
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.6),
                      0 0 20px rgba(37, 211, 102, 0.4);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles: { button: CSSProperties; icon: CSSProperties } = {
    button: {
      position: "fixed",
      width: "50px",
      height: "50px",
      bottom: "80px", // Adjusted for scroll-top button
      right: "20px",
      backgroundColor: "#25D366",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
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
    const target = e.currentTarget;
    target.style.transform = "scale(1.2)";
    target.style.boxShadow =
      "0 0 30px rgba(37, 211, 102, 1), 0 0 50px rgba(37, 211, 102, 0.8)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = "scale(1)";
    target.style.boxShadow = "";
  };

  return (
    <a
      href="https://wa.me/916207282922"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp style={styles.icon} />
    </a>
  );
};

export default WhatsAppButton;
