// src/components/Stats.tsx
import React, { useEffect, useState } from "react";

const statsData = [
  { icon: "🌍", label: "Websites Delivered", number: 15 },
  { icon: "😊", label: "Happy Clients", number: 10 },
  { icon: "⏱", label: "Years of Experience", number: 2 },
  { icon: "💡", label: "Creative Ideas Built", number: 50 },
];

const Stats: React.FC = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.number / 50); // speed of counting
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.number) {
            newCounts[idx] += increment;
            if (newCounts[idx] > stat.number) newCounts[idx] = stat.number;
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="py-16 bg-gray-50 relative overflow-hidden text-center"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundSize: "contain",
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        A Few Numbers That Speak for Us
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transform transition"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">{counts[idx]}+</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
