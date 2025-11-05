// ServicesPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../HeroBackground.css"; // For gradient and floating shapes

// Reusable components
interface ServiceBlockProps {
  title: string;
  desc: string;
  features: string[];
  buttonText: string;
  img: string;
  reverse?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  desc,
  features,
  buttonText,
  img,
  reverse,
}) => (
  <motion.div
    className={`flex flex-col md:flex-row items-center gap-12 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="md:w-1/2 text-center md:text-left space-y-4">
      <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-700">{desc}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
      >
        {buttonText}
      </Link>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src={img} alt={title} className="w-full max-w-md" />
    </div>
  </motion.div>
);

interface PricingCardProps {
  plan: string;
  bestFor: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  bestFor,
  price,
  features,
}) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-bold mb-2 text-blue-600">{plan}</h3>
    <p className="text-gray-500 mb-4">{bestFor}</p>
    <p className="text-2xl font-bold mb-4">{price}</p>
    <ul className="text-gray-700 mb-6 space-y-1">
      {features.map((f, i) => (
        <li key={i}>• {f}</li>
      ))}
    </ul>
    <Link
      to="/contact"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105"
    >
      Get a Free Quote
    </Link>
  </motion.div>
);

const floatAnimation = {
  animate: { y: [0, -10, 0, 10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

const ServicesPage: React.FC = () => {
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
              Professional Web Development Services That Bring Your Vision to Life
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              At <span className="font-semibold text-blue-600">A3 Technos</span>, we help
              individuals and businesses build websites that look great, perform
              fast, and create real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
              >
                View My Work
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

      {/* 🧰 Services Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Tailored Web Solutions for Every Need
          </h2>
          <p className="text-gray-700 text-lg">
            We don’t just build websites — we build experiences that represent your brand
            and connect with your audience.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          <ServiceBlock
            title="Personal Portfolio Websites"
            desc="Showcase your skills, creativity, and personality with a clean, stylish, and responsive portfolio."
            features={[
              "Custom design based on your profession",
              "Interactive gallery or project section",
              "Easy contact form integration",
              "Fast & mobile-friendly",
            ]}
            buttonText="Get Your Portfolio Website"
            img="/images/portfolio-mockup.svg"
          />

          <ServiceBlock
            title="Business Websites"
            desc="Give your company a strong online identity that builds trust and attracts clients."
            features={[
              "Home, About, Services, Contact Pages",
              "Business email integration",
              "Fast loading and SEO optimized",
              "Secure hosting & modern design",
            ]}
            buttonText="Get a Business Website Quote"
            img="/images/business-team.svg"
            reverse
          />

          <ServiceBlock
            title="E-Commerce Development"
            desc="Launch your online store with a smooth, secure, and beautifully designed shopping experience."
            features={[
              "Product pages with filters & search",
              "Cart + Checkout + Payment Integration",
              "Admin Dashboard for managing orders",
              "Responsive design for all devices",
            ]}
            buttonText="Start Selling Online"
            img="/images/ecommerce.svg"
          />

          <ServiceBlock
            title="Custom Web Solutions"
            desc="Got a unique idea? Let’s build it together! From custom dashboards to data-based tools."
            features={[
              "Unique UI/UX",
              "Fast backend with Node.js",
              "API integration & user authentication",
              "Scalable and secure setup",
            ]}
            buttonText="Build a Custom Solution"
            img="/images/custom-dev.svg"
            reverse
          />

          <ServiceBlock
            title="Website Redesign"
            desc="Already have a website but not happy with how it looks or performs? Let’s redesign it better!"
            features={[
              "Modern UI & animations",
              "SEO-friendly structure",
              "Better mobile experience",
              "Faster loading speed",
            ]}
            buttonText="Upgrade My Website"
            img="/images/website-redesign.svg"
          />

          <ServiceBlock
            title="Website Maintenance & Support"
            desc="Keep your website updated, secure, and error-free — so you can focus on your work."
            features={[
              "Monthly backups",
              "Plugin & security updates",
              "Bug fixing",
              "24/7 support",
            ]}
            buttonText="Get Maintenance Plan"
            img="/images/maintenance.svg"
            reverse
          />
        </div>
      </section>

      {/* 💡 Process */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          A Smooth, Transparent, and Creative Process
        </h2>
        <p className="text-gray-700 mb-16">
          We follow a step-by-step process that ensures you stay updated, confident, and happy from start to finish.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Discussion & Planning", emoji: "💡" },
            { title: "Design & Approval", emoji: "🎨" },
            { title: "Development & Testing", emoji: "💻" },
            { title: "Launch & Support", emoji: "🚀" },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...floatAnimation}
              className="bg-white rounded-xl p-8 shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Let’s Start Building
          </Link>
        </div>
      </section>

      {/* 🚀 Why Choose A3 Technos */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-4 text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-700 mb-6">
              When you work with A3 Technos, you get more than a developer — you get a partner who cares about your success.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>⚡ Lightning-Fast Websites</li>
              <li>🎨 Unique Designs</li>
              <li>💬 Direct Communication</li>
              <li>🔒 Secure & Reliable</li>
              <li>💰 Affordable Pricing</li>
              <li>🤝 After-Support</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/images/handshake.svg" alt="Team handshake" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* 💰 Pricing */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-100 via-green-50 to-green-100 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Affordable & Transparent Pricing</h2>
        <p className="text-gray-700 mb-16">Choose a package that fits your needs. No hidden fees.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            plan="Starter Plan"
            bestFor="Personal / Portfolio"
            price="₹4,999"
            features={["1-3 pages", "Responsive Design", "Basic SEO", "1 Month Support"]}
          />
          <PricingCard
            plan="Business Plan"
            bestFor="Small & Medium Business"
            price="₹14,999"
            features={["5-10 pages", "Responsive + SEO", "Contact Forms", "3 Months Support"]}
          />
          <PricingCard
            plan="E-Commerce Plan"
            bestFor="Online Store"
            price="₹29,999"
            features={["Up to 50 Products", "Payment Integration", "Responsive + SEO", "6 Months Support"]}
          />
        </div>
      </section>

      {/* 🗣️ Testimonials */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Rohit Sharma", feedback: "A3 Technos built my portfolio website exactly how I imagined. Highly recommended!" },
            { name: "Neha Singh", feedback: "Fast, professional, and creative! My business website gets compliments every day." },
            { name: "Amit Verma", feedback: "The e-commerce store they developed increased my sales significantly. Great team!" },
            { name: "Priya Kapoor", feedback: "Excellent support even after launch. They truly care about client success." },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-blue-50 rounded-xl p-6 shadow-lg"
            >
              <p className="text-gray-800 mb-4">"{t.feedback}"</p>
              <p className="font-semibold text-blue-600">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Bring Your Website to Life?
        </h2>
        <p className="mb-8 text-lg">Let’s create a stunning online presence that drives results.</p>
        <Link
          to="/contact"
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition transform"
        >
          Get Your Free Quote
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
