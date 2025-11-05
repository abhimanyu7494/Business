import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  const displayedProjects = projectsData.slice(0, 3); // first 3 projects for preview

  return (
    <section id="projects" className="py-20 px-6 bg-[#0f172a] text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔹 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-green-400"
        >
          Some of My Recent Work
        </motion.h2>

        {/* 🔸 Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 mb-12"
        >
          Every project is built with care, creativity, and precision.
        </motion.p>

        {/* 🖼️ Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              className="group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/20 transition-transform transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4 text-sm">{p.desc}</p>
                </div>
              </div>

              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {p.title}
                </h3>

                {/* 🟢 Buttons */}
                <div className="flex gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105"
                    >
                      View Live
                    </a>
                  )}

                  <Link
                    to={`/project/${p.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔵 View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <Link
            to="/projects"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
