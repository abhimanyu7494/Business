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

// 🖼 How I Work Images
import step1 from "../assets/images/how i work 1.jpeg";
import step2 from "../assets/images/how i work 2.jpeg";
import step3 from "../assets/images/how i work 3.jpeg";
import step4 from "../assets/images/how i work 4.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800">
      {/* 🧭 Section 1: Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
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
            Whether it’s a personal portfolio, business website, or e-commerce
            platform, I believe every website should be fast, modern, and easy
            to manage.
          </p>
          <a
            href="/projects"
            className="inline-block bg-[#00C48C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009f73] transition"
          >
            Explore My Projects
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/assets/images/profile.jpg"
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
            To empower individuals and businesses by creating digital
            experiences that are simple, elegant, and effective. I aim to help
            people grow their presence online — without the complexity or high
            costs.
          </p>
          <h3 className="text-3xl font-bold mb-4">My Vision</h3>
          <p className="text-lg leading-relaxed">
            To become a trusted name in web development known for quality,
            creativity, and honesty. I want A3 Technos to inspire more creators,
            freelancers, and businesses to take their ideas online confidently.
          </p>
        </div>
      </div>

      {/* 🧰 Section 3: Skills (Updated with Real Colors + Animation) */}
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

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/assets/images/tech-stack.png"
            alt="Tech Stack"
            className="max-w-xs w-full"
          />
        </motion.div>
      </div>

      {/* 💬 Section 4: Work Approach (Updated with images) */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#007BFF] mb-10">
            How I Work
          </h3>

          <div className="space-y-16">
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
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-semibold mb-2 text-[#007BFF]">
                    {i + 1}️⃣ {title}
                  </h4>
                  <p className="text-gray-700 text-base sm:text-lg">
                    {desc}
                  </p>
                </div>

                {/* Image */}
                <motion.img
                  src={img}
                  alt={title}
                  className="w-full sm:w-64 h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
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
      <div className="bg-gradient-to-r from-[#007BFF]/10 to-[#00C48C]/10 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#007BFF] mb-10">
          What I Believe In
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Value
            icon={<FaLock />}
            title="Privacy"
            desc="Your data stays yours, always."
          />
          <Value
            icon={<FaClock />}
            title="Timeliness"
            desc="I value your time and deliver on schedule."
          />
          <Value
            icon={<FaHeart />}
            title="Client First"
            desc="I treat every project as if it’s my own brand."
          />
          <Value
            icon={<FaTrophy />}
            title="Quality"
            desc="Every line of code matters."
          />
          <Value
            icon={<FaHandshake />}
            title="Transparency"
            desc="I communicate clearly — no hidden charges or surprises."
          />
        </div>
      </div>

      {/* 💼 Section 6: Achievements */}
      <div className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#007BFF] mb-8">
            A Few Highlights
          </h3>
          <ul className="space-y-3 text-lg">
            <li>🌍 <strong>15+</strong> Websites successfully launched</li>
            <li>😊 <strong>20+</strong> Happy clients</li>
            <li>⚙ <strong>2+</strong> Years of experience</li>
            <li>🧩 <strong>50+</strong> Custom features built</li>
          </ul>
        </div>
        <img
          src="/src/assets/images/achievement.png"
          alt="Achievements"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* ✉ Section 7: CTA */}
      <div className="text-center py-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-[#007BFF] mb-4">
          Let’s Build Something Great Together
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          If you’re looking for a reliable, creative, and passionate developer
          to bring your ideas to life — you’re in the right place. Let’s discuss
          your project and start building your digital presence today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/start"
            className="bg-[#00C48C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009f73] transition w-full sm:w-auto text-center"
          >
            🟢 Start Your Project
          </a>
          <a
            href="/contact"
            className="bg-[#007BFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0062cc] transition w-full sm:w-auto text-center"
          >
            🔵 Contact Me Now
          </a>
        </div>
        <img
          src="/src/assets/images/handshake.png"
          alt="Collaboration"
          className="mx-auto mt-10 w-56 sm:w-64 h-56 sm:h-64 object-contain"
        />
      </div>
    </section>
  );
};

// 🌈 Skill Component with Animation & Color
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

// 🌟 Values Component
const Value = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
    <div className="text-3xl text-[#00C48C] mb-3 flex justify-center">
      {icon}
    </div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default About;
