// ProjectsPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../HeroBackground.css"; // optional gradient or floating shapes

// ------------------- Reusable Components -------------------

interface ProjectCardProps {
  title: string;
  type: string;
  desc: string;
  features: string[];
  img: string;
  liveUrl?: string;
  detailsUrl?: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  desc,
  features,
  img,
  liveUrl,
  detailsUrl,
  reverse,
}) => (
  <motion.div
    className={`flex flex-col md:flex-row items-center gap-8 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="md:w-1/2 text-left space-y-4">
      <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-700 font-medium">{type}</p>
      <p className="text-gray-600">{desc}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 mt-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition transform hover:scale-105"
          >
            View Live
          </a>
        )}
        {detailsUrl && (
          <Link
            to={detailsUrl}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition transform hover:scale-105"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src={img} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
    </div>
  </motion.div>
);

interface TechIconProps {
  name: string;
  img: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, img }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4">
    <img src={img} alt={name} className="w-12 h-12" />
    <p className="text-gray-700 text-sm">{name}</p>
  </div>
);

// ------------------- Page Component -------------------

const floatAnimation = {
  animate: { y: [0, -10, 0, 10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="font-[Poppins] text-gray-800">
      {/* 🌟 Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-blue-400 via-green-200 to-green-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Our Work Speaks for Itself
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Take a look at some of the websites we’ve crafted with creativity, precision, and care.
              Each project is unique — just like our clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
              >
                Contact Now
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...floatAnimation}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img
              src="/images/developer-workspace.svg"
              alt="Developer working illustration"
              className="w-full max-w-md drop-shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 💻 Featured Projects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Featured Projects</h2>
          <p className="text-gray-700 text-lg">
            Here are a few projects that we’re especially proud of.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          <ProjectCard
            title="Riya’s Portfolio Website"
            type="Personal Portfolio"
            desc="We created a modern, clean, and responsive portfolio site for Riya — a freelance graphic designer."
            features={[
              "One-page scroll design",
              "Image gallery & animations",
              "Contact form integration",
            ]}
            img="/images/projects/riya-portfolio.svg"
            liveUrl="https://example.com/riya"
            detailsUrl="/projects/riya"
          />

          <ProjectCard
            title="TechNova Solutions"
            type="Business Website"
            desc="A corporate-style website built for a software company to showcase their services and attract clients globally."
            features={[
              "Service pages + blog section",
              "Fully responsive on all devices",
              "SEO optimized",
            ]}
            img="/images/projects/technova.svg"
            liveUrl="https://example.com/technova"
            detailsUrl="/projects/technova"
            reverse
          />

          <ProjectCard
            title="FitZone E-Commerce Store"
            type="Online Store"
            desc="An e-commerce platform built for a fitness brand to sell products online."
            features={[
              "Product listing + filtering",
              "Cart & payment integration",
              "Admin dashboard for order management",
            ]}
            img="/images/projects/fitzone.svg"
            liveUrl="https://example.com/fitzone"
            detailsUrl="/projects/fitzone"
          />

          <ProjectCard
            title="Urban Cafe Website"
            type="Small Business Website"
            desc="Designed a clean and inviting website for a local cafe to highlight their menu and bookings."
            features={[
              "Menu showcase",
              "Customer reviews",
              "Contact & booking form",
            ]}
            img="/images/projects/urbancafe.svg"
            liveUrl="https://example.com/urbancafe"
            detailsUrl="/projects/urbancafe"
            reverse
          />

          <ProjectCard
            title="Sneha’s Photography Portfolio"
            type="Portfolio Website"
            desc="A creative photo gallery website designed for a professional photographer."
            features={[
              "Interactive image slider",
              "Lazy loading for faster performance",
              "Dark aesthetic for focus on photos",
            ]}
            img="/images/projects/sneha-portfolio.svg"
            liveUrl="https://example.com/sneha"
            detailsUrl="/projects/sneha"
          />
        </div>
      </section>
      {/* 🎨 Gallery Grid View */}
<section className="py-24 px-6 bg-gray-50 text-center">
  <h2 className="text-4xl font-bold text-blue-600 mb-4">More Projects</h2>
  <p className="text-gray-700 mb-12">
    A glimpse of the variety of websites we’ve worked on.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { title: "Sneha Portfolio", img: "/images/projects/thumb-sneha.svg", live: true },
      { title: "Urban Cafe", img: "/images/projects/thumb-urbancafe.svg", live: false },
      { title: "FitZone", img: "/images/projects/thumb-fitzone.svg", live: true },
      { title: "Creative Agency", img: "/images/projects/thumb-agency.svg", live: false },
      { title: "Interior Studio", img: "/images/projects/thumb-interior.svg", live: true },
      { title: "Travel Blog", img: "/images/projects/thumb-travel.svg", live: true },
      { title: "EduCare", img: "/images/projects/thumb-educare.svg", live: false },
      { title: "App Landing Page", img: "/images/projects/thumb-app.svg", live: true },
      { title: "Fitness Hub", img: "/images/projects/thumb-fitness.svg", live: true },
    ].map((p, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      >
        {/* Project Image */}
        <img src={p.img} alt={p.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />

        {/* LIVE Badge */}
        {p.live && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            LIVE
          </div>
        )}

        {/* Overlay with Title + Button */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
          <a
            href="#"
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            View Live
          </a>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>


      {/* 🎨 Gallery Grid View */}
      {/*<section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">More Projects</h2>
        <p className="text-gray-700 mb-12">
          A glimpse of the variety of websites we’ve worked on.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Sneha Portfolio", img: "/images/projects/thumb-sneha.svg" },
            { title: "Urban Cafe", img: "/images/projects/thumb-urbancafe.svg" },
            { title: "FitZone", img: "/images/projects/thumb-fitzone.svg" },
            { title: "Creative Agency", img: "/images/projects/thumb-agency.svg" },
            { title: "Interior Studio", img: "/images/projects/thumb-interior.svg" },
            { title: "Travel Blog", img: "/images/projects/thumb-travel.svg" },
            { title: "EduCare", img: "/images/projects/thumb-educare.svg" },
            { title: "App Landing Page", img: "/images/projects/thumb-app.svg" },
            { title: "Fitness Hub", img: "/images/projects/thumb-fitness.svg" },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white font-semibold px-4 py-2 border border-white rounded">
                  View Live
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>*/}

      {/* ⚙ Project Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">How We Build Each Project</h2>
        <p className="text-gray-700 mb-12">
          Every project follows a structured process to ensure quality and on-time delivery.
        </p>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            { icon: "💡", title: "Understanding Your Idea" },
            { icon: "🎨", title: "Design & Prototype" },
            { icon: "💻", title: "Development" },
            { icon: "🚀", title: "Testing & Launch" },
            { icon: "🛠", title: "Post Launch Support" },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-5xl">{step.icon}</div>
              <p className="font-semibold text-gray-700">{step.title}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
        >
          Start a Project Like This
        </Link>
      </section>

      {/* 🧩 Tools & Tech */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Development Stack</h2>
        <p className="text-gray-700 mb-12">
          We use modern technologies that ensure every site is secure, fast, and scalable.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { name: "HTML5", img: "/images/tech/html.svg" },
            { name: "CSS3", img: "/images/tech/css.svg" },
            { name: "JavaScript", img: "/images/tech/js.svg" },
            { name: "React.js", img: "/images/tech/react.svg" },
            { name: "Node.js", img: "/images/tech/node.svg" },
            { name: "MongoDB", img: "/images/tech/mongo.svg" },
            { name: "Tailwind CSS", img: "/images/tech/tailwind.svg" },
            { name: "WordPress", img: "/images/tech/wp.svg" },
          ].map((tech, i) => (
            <TechIcon key={i} {...tech} />
          ))}
        </div>
      </section>

      {/* 💬 Client Feedback */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">What Clients Say About Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              quote: "Loved working with A3 Technos! They built my site in less than a week and it looks stunning.",
              name: "Pooja Joshi",
            },
            {
              quote: "My e-commerce store is running perfectly. Thank you for the amazing work!",
              name: "Manish Patel",
            },
            {
              quote: "Abhimanyu’s attention to detail is next-level. Highly recommend!",
              name: "Ravi Khanna",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-lg rounded-lg p-6 text-gray-700"
            >
              <p className="italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
        <Link
          to="/testimonials"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
        >
          Read More Reviews
        </Link>
      </section>

      {/* 📞 Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-400 via-green-200 to-green-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-gray-700 mb-8">
              Let’s turn your ideas into reality with A3 Technos — simple, fast, and beautifully designed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <motion.div {...floatAnimation} className="flex justify-center">
            <img
              src="/images/teamwork.svg"
              alt="Teamwork illustration"
              className="w-full max-w-md drop-shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
