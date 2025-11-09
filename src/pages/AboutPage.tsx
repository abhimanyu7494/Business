import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaTrophy,
  FaLock,
  FaClock,
  FaHeart,
  FaHandshake,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiWordpress,
} from "react-icons/si";

import profileImg from "../assets/images/profile.jpg";
import techStack from "../assets/images/tech-stack.png";
import step1 from "../assets/images/How i work 1.jpeg";
import step2 from "../assets/images/How i work 2.jpeg";
import step3 from "../assets/images/How i work 3.jpeg";
import step4 from "../assets/images/How i work 4.jpeg";
import achievement from "../assets/images/achievement.jpeg";
import handshake from "../assets/images/handshake.jpg";

const AboutPage = () => {
  return (
    <section id="about" className="bg-white text-gray-800">

      {/* 🧭 Section 1: Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#007BFF] mb-4">
            Meet the Developer Behind A3 Technos
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I’m <strong>Abhimanyu</strong>, the founder and developer behind{" "}
            <strong>A3 Technos</strong>. I’m passionate about building clean,
            creative, and performance-driven websites that help people grow
            online.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What started as a small passion project soon turned into a mission —
            to make high-quality web development accessible to everyone.
          </p>
          <a
            href="/projects"
            className="inline-block bg-[#00C48C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009f73] transition"
          >
            Explore My Projects
          </a>
        </motion.div>

        <motion.div
          className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImg}
            alt="Abhimanyu - A3 Technos"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* 💡 Section 2: Mission & Vision */}
      <div className="relative py-20 text-center text-white bg-gradient-to-r from-[#007BFF] to-[#00C48C] px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">My Mission</h3>
          <p className="mb-8 text-lg leading-relaxed">
            To empower individuals and businesses by creating digital experiences that are simple, elegant, and effective.
          </p>
          <h3 className="text-3xl font-bold mb-4">My Vision</h3>
          <p className="text-lg leading-relaxed">
            To become a trusted name in web development known for quality, creativity, and honesty.
          </p>
        </div>
      </div>

      {/* 🧰 Section 3: Skills */}
      <div className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[#007BFF] mb-6">
            Technologies & Tools
          </h3>
          <p className="mb-6 text-lg text-gray-700">
            I work with the latest web technologies to ensure every site is
            modern, secure, and lightning-fast.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">
            <Skill icon={<FaHtml5 />} text="HTML" color="#E34F26" />
            <Skill icon={<FaCss3Alt />} text="CSS" color="#1572B6" />
            <Skill icon={<FaJs />} text="JavaScript" color="#F7DF1E" />
            <Skill icon={<FaReact />} text="React.js" color="#61DAFB" />
            <Skill icon={<FaNodeJs />} text="Node.js" color="#68A063" />
            <Skill icon={<SiExpress />} text="Express.js" color="#000000" />
            <Skill icon={<SiMongodb />} text="MongoDB" color="#47A248" />
            <Skill icon={<SiTailwindcss />} text="Tailwind CSS" color="#38B2AC" />
            <Skill icon={<SiBootstrap />} text="Bootstrap" color="#7952B3" />
            <Skill icon={<FaGithub />} text="Git / GitHub" color="#181717" />
            <Skill icon={<SiVercel />} text="Vercel" color="#000000" />
            <Skill icon={<SiNetlify />} text="Netlify" color="#00C7B7" />
            <Skill icon={<SiWordpress />} text="WordPress" color="#21759B" />
          </div>
        </div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={techStack} alt="Tech Stack" className="max-w-xs w-full" />
        </motion.div>
      </div>

      {/* 💬 Section 4: How I Work (Updated with card layout) */}
      {/* 💬 Section 4: How I Work (Updated - Image on top, text below) */}
<div className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-[#007BFF] mb-10">How I Work</h3>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        [
          "Understand Your Idea",
          "I start by understanding your goals, audience, and design preferences.",
          step1,
        ],
        [
          "Plan & Design",
          "I create a wireframe and layout for how your website will look.",
          step2,
        ],
        [
          "Develop & Test",
          "I write clean code and make sure your site performs perfectly.",
          step3,
        ],
        [
          "Launch & Support",
          "Once live, I help with updates, changes, and technical support.",
          step4,
        ],
      ].map(([title, desc, img], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* 🖼 Image on top */}
          <motion.img
            src={img}
            alt={title}
            className="w-full h-56 sm:h-64 object-cover object-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* 📝 Text below */}
          <div className="p-6">
            <h4 className="text-xl font-semibold text-[#007BFF] mb-2">
              {i + 1}️⃣ {title}
            </h4>
            <p className="text-gray-700 text-base sm:text-lg">{desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <a
      href="/contact"
      className="mt-12 inline-block bg-[#007BFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0062cc] transition"
    >
      Get a Free Consultation
    </a>
  </div>
</div>


      {/* 🌟 Section 5: Values */}
      <motion.div
        className="bg-gradient-to-r from-[#007BFF]/10 to-[#00C48C]/10 py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3 className="text-3xl font-bold text-[#007BFF] mb-10">
          What I Believe In
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <FaLock />, title: "Privacy", desc: "Your data stays yours, always." },
            { icon: <FaClock />, title: "Timeliness", desc: "I value your time and deliver on schedule." },
            { icon: <FaHeart />, title: "Client First", desc: "I treat every project as if it’s my own brand." },
            { icon: <FaTrophy />, title: "Quality", desc: "Every line of code matters." },
            { icon: <FaHandshake />, title: "Transparency", desc: "Clear communication, no surprises." },
          ].map((value, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Value icon={value.icon} title={value.title} desc={value.desc} />
            </motion.div>
          ))}
        </div>
      </motion.div>

     {/* 💼 Section 6: Achievements (Background Image + Smoky Transparent Cards) */}
<motion.section
  className="relative py-20 px-6 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* 🖼️ Background Image */}
  <div className="absolute inset-0">
    <img
      src={achievement}
      alt="Achievements Background"
      className="w-full h-full object-cover brightness-75"
    />
  </div>

  {/* 💬 Content */}
  <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
    <motion.h3
      className="text-3xl font-bold text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      A Few Highlights
    </motion.h3>
    <motion.p
      className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Here are some achievements and milestones that showcase my experience and dedication.
    </motion.p>
  </div>

  {/* 💎 Glass Cards */}
  <div className="relative max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
    {[
      { icon: "🌍", title: "15+ Websites", desc: "Successfully launched" },
      { icon: "😊", title: "20+ Clients", desc: "Happy and satisfied clients" },
      { icon: "⚙", title: "2+ Years", desc: "Experience in web development" },
      { icon: "🧩", title: "50+ Features", desc: "Custom features built" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="backdrop-blur-md bg-white/20 border border-white/30 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/30 transition-all cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      >
        <div className="text-4xl mb-3">{item.icon}</div>
        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
        <p className="text-gray-200 text-sm sm:text-base">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

     
  {/* ✉ Section 7: CTA */}
<div className="bg-gray-100 py-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
    {/* Image */}
    <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-start">
      <img
        src={handshake}
        alt="Collaboration"
        className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain rounded-xl shadow-xl transform transition-transform hover:scale-105"
      />
    </div>

    {/* Text + Buttons */}
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-bold text-[#007BFF] mb-4">
        Let’s Build Something Great Together
      </h3>
      <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
        If you’re looking for a reliable, creative, and passionate developer
        to bring your ideas to life — you’re in the right place.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
        <a
          href="/start"
          className="cta-btn"
        >
          Start Your Project
        </a>
        <a
          href="/contact"
          className="cta-btn"
        >
          Contact Me Now
        </a>
      </div>
    </div>
  </div>

  {/* Button CSS */}
  <style>{`
    .cta-btn {
      background-color: #00C48C;
      color: white;
      font-weight: 600;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      text-align: center;
      transition: background 0.3s, transform 0.2s;
      display: inline-block;
      width: 100%;
      max-width: 220px;
    }
    .cta-btn:hover {
      background-color: #009f73;
      transform: scale(1.05);
    }
    @media (min-width: 640px) {
      .cta-btn {
        width: auto;
      }
    }
  `}</style>
</div>

    </section>
  );
};

// 🌈 Skill Component
const Skill = ({ icon, text, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg py-5 hover:shadow-lg transition transform hover:-translate-y-1"
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-4xl mb-2" style={{ color }}>
      {icon}
    </span>
    <p className="font-medium text-gray-700 text-sm sm:text-base">{text}</p>
  </motion.div>
);

// 🌟 Value Component
const Value = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center flex flex-col items-center">
    <div className="text-3xl text-[#00C48C] mb-3">{icon}</div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default AboutPage;
