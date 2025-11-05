import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const faqs = [
  {
    question: "How much time does it take to build a website?",
    answer: "Usually 5–10 days depending on the project.",
  },
  {
    question: "Do you provide hosting & domain setup?",
    answer: "Yes, we help with complete setup.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We can refresh your old site into something modern.",
  },
  {
    question: "How do payments work?",
    answer: "50% advance, 50% after delivery.",
  },
];

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus(null);

    emailjs
      .sendForm(
        "service_mnddo5t",
        "template_6lkr3ul",
        formRef.current,
        "1jWPdZW8f3uZVnVo7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ message: "Message sent successfully!", success: true });
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus({ message: "Something went wrong. Try again!", success: false });
        }
      );
  };

  return (
    <section className="bg-white text-gray-900 min-h-screen px-6 py-20 font-poppins">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-green-600"
          >
            Let’s Build Something Amazing Together 🚀
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 text-lg"
          >
            Got a project idea, website plan, or just want to say hi? We’d love to
            hear from you. Fill out the form and we’ll get back within 24 hours.
          </motion.p>
          <motion.a
            href="#contact-form"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            🟢 Let’s Talk
          </motion.a>
        </div>

        <motion.div
          className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <video
            src="/videos/hero-connection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-green-600 mb-4 text-center"
        >
          Send Us a Message 💬
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-center mb-8"
        >
          Fill out the form below — and let’s start your project journey!
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form backdrop-blur-lg bg-white/30 rounded-xl p-10 shadow-lg space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <select
            name="projectType"
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <option>Portfolio</option>
            <option>Business</option>
            <option>E-commerce</option>
            <option>Custom</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message / Project Details"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-2 font-medium ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-green-600 mb-4 text-center"
        >
          Frequently Asked Questions ❓
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveFAQ(activeFAQ === idx ? null : idx)
                }
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 transition font-medium"
              >
                {faq.question}
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeFAQ === idx ? 1 : 0,
                  height: activeFAQ === idx ? "auto" : 0,
                }}
                transition={{ duration: 0.5 }}
                className="px-4 overflow-hidden text-gray-700"
              >
                {faq.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 py-20 bg-green-50 rounded-xl">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-green-600">
            Let’s Start Your Project Today 🚀
          </h2>
          <p className="text-gray-700 text-lg">
            Whether it’s your first website or a redesign, we’ll make it look professional and perform perfectly.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105">
              🟢 Start Project Now
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              🔵 Call Me
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <video
            src="/videos/cta-handshake.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
