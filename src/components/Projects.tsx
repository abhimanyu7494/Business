import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  const displayedProjects = projectsData.slice(0, 3); // first 3 projects for preview

  const getVariants = (index: number) => ({
    initial: {
      opacity: 0,
      x: window.innerWidth >= 768 ? (index % 2 === 0 ? -100 : 100) : 0,
      y: window.innerWidth < 768 ? 50 : 0,
      scale: 0.9,
    },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  });

  const floatingParticle = (size: number, delay: number, top: string, left: string, color: string) => (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{ width: size, height: size, top: top, left: left }}
      animate={{ y: ["0%", "20%", "0%"], x: ["0%", "15%", "0%"] }}
      transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    />
  );

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full opacity-20 blur-3xl"
        />
        {floatingParticle(20, 0, "10%", "15%", "bg-purple-300/40")}
        {floatingParticle(30, 2, "30%", "70%", "bg-pink-300/30")}
        {floatingParticle(25, 1, "60%", "40%", "bg-green-300/30")}
        {floatingParticle(15, 3, "80%", "20%", "bg-blue-300/40")}
        {floatingParticle(18, 2.5, "50%", "80%", "bg-red-300/30")}
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900"
        >
          Some of My Recent Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Every project is built with care, creativity, and precision.
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((p, i) => (
            <motion.div
              key={i}
              variants={getVariants(i)}
              initial="initial"
              whileInView="animate"
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm sm:text-base">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.title}</h3>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 mt-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105 shadow"
                    >
                      View Live
                    </a>
                  )}

                  <Link
                    to={`/project/${p.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105 shadow"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <Link
            to="/projects"
            className="inline-block bg-blue-500 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
