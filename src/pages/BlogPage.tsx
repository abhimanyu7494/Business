// BlogPage.tsx
import { motion } from "framer-motion";
import { blogData } from "../data/blogData"; // categories aur featuredBlogs hata diye
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const BlogPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-[Poppins] text-gray-800 bg-[#F9FAFB]">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative flex flex-col md:flex-row items-center justify-between py-24 px-6 bg-gradient-to-r from-white to-blue-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#007BFF] leading-tight">
            Ideas that Inspire. Code that Connects.
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Welcome to the A3 Technos Blog — where creativity meets technology.
            We share insights on web design, development, and digital growth that help individuals and businesses shine online.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="/blog"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
            >
              Read Latest Posts
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <img
            src="/images/blog-hero.svg"
            alt="Blog Workspace Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </section>

      {/* ===================== ALL BLOG POSTS ===================== */}
      <section className="py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-up">
            Latest from the Blog
          </h2>
          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">
            Fresh ideas, tutorials, and insights — updated every month.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((blog, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition duration-500 hover:brightness-110"
              />
              <div className="p-5">
                <h4 className="font-semibold text-gray-800 text-lg mb-2 hover:underline">{blog.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{blog.desc}</p>
                <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                  <span>🕒 5 min read</span>
                  <span>{blog.date}</span>
                </div>
                <Link
                  to={blog.link}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
