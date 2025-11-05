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
            to make high-quality web development accessible to everyone. Whether
            it’s a personal portfolio, business website, or e-commerce platform,
            I believe every website should be fast, modern, and easy to manage.
          </p>
          <a
            href="/projects"
            className="inline-block bg-[#00C48C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009f73] transition"
          >
            🟢 Explore My Projects
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-72 h-72 rounded-full overflow-hidden shadow-lg"
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
      <div className="relative py-20 text-center text-white bg-gradient-to-r from-[#007BFF] to-[#00C48C]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">My Mission</h3>
          <p className="mb-8 text-lg">
            To empower individuals and businesses by creating digital
            experiences that are simple, elegant, and effective. I aim to help
            people grow their presence online — without the complexity or high
            costs.
          </p>
          <h3 className="text-3xl font-bold mb-4">My Vision</h3>
          <p className="text-lg">
            To become a trusted name in web development known for quality,
            creativity, and honesty. I want A3 Technos to inspire more creators,
            freelancers, and businesses to take their ideas online confidently.
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
            <Skill icon={<FaHtml5 />} text="HTML" />
            <Skill icon={<FaCss3Alt />} text="CSS" />
            <Skill icon={<FaJs />} text="JavaScript" />
            <Skill icon={<FaReact />} text="React.js" />
            <Skill icon={<FaNodeJs />} text="Node.js" /> {/* ✅ Added */}
            <Skill icon={<SiExpress />} text="Express.js" />
            <Skill icon={<SiMongodb />} text="MongoDB" />
            <Skill icon={<SiTailwindcss />} text="Tailwind CSS" />
            <Skill icon={<SiBootstrap />} text="Bootstrap" />
            <Skill icon={<FaGithub />} text="Git / GitHub" />
            <Skill icon={<SiVercel />} text="Vercel" />
            <Skill icon={<SiNetlify />} text="Netlify" />
            <Skill icon={<SiWordpress />} text="WordPress" />
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
            className="max-w-xs"
          />
        </motion.div>
      </div>

      {/* 💬 Section 4: Work Approach */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#007BFF] mb-10">
            How I Work
          </h3>

          <div className="space-y-10">
            {[
              [
                "Understand Your Idea",
                "I start by understanding your goals, audience, and design preferences.",
              ],
              [
                "Plan & Design",
                "I create a wireframe and layout for how your website will look.",
              ],
              [
                "Develop & Test",
                "I write clean code and make sure your site performs perfectly.",
              ],
              [
                "Launch & Support",
                "Once live, I help with updates, changes, and technical support.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-semibold mb-2">
                    {i + 1}️⃣ {title}
                  </h4>
                  <p className="text-gray-700">{desc}</p>
                </div>
                <img
                  src={`/images/step${i + 1}.png`}
                  alt={title}
                  className="w-48 h-48 object-contain"
                />
              </motion.div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-10 inline-block bg-[#007BFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0062cc] transition"
          >
            🔵 Get a Free Consultation
          </a>
        </div>
      </div>

      {/* 🌟 Section 5: Values */}
      <div className="bg-gradient-to-r from-[#007BFF]/10 to-[#00C48C]/10 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#007BFF] mb-10">
          What I Believe In
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Value icon={<FaLock />} title="Privacy" desc="Your data stays yours, always." />
          <Value icon={<FaClock />} title="Timeliness" desc="I value your time and deliver on schedule." />
          <Value icon={<FaHeart />} title="Client First" desc="I treat every project as if it’s my own brand." />
          <Value icon={<FaTrophy />} title="Quality" desc="Every line of code matters." />
          <Value icon={<FaHandshake />} title="Transparency" desc="I communicate clearly — no hidden charges or surprises." />
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
          src="/images/achievement.png"
          alt="Achievements"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* ✉ Section 7: CTA */}
      <div className="text-center py-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-[#007BFF] mb-4">
          Let’s Build Something Great Together
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          If you’re looking for a reliable, creative, and passionate developer
          to bring your ideas to life — you’re in the right place. Let’s discuss
          your project and start building your digital presence today!
        </p>
        <div className="space-x-4">
          <a
            href="/start"
            className="bg-[#00C48C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009f73] transition"
          >
            🟢 Start Your Project
          </a>
          <a
            href="/contact"
            className="bg-[#007BFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0062cc] transition"
          >
            🔵 Contact Me Now
          </a>
        </div>
        <img
          src="/images/handshake.png"
          alt="Collaboration"
          className="mx-auto mt-10 w-64 h-64 object-contain"
        />
      </div>
    </section>
  );
};

// Helper Components
const Skill = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-gray-700 font-medium">
    <span className="text-2xl text-[#00C48C]">{icon}</span> {text}
  </div>
);

const Value = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-3xl text-[#00C48C] mb-3">{icon}</div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default About;
