import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "Recipient",
    message:
      "“Thanks to this platform, I found a donor within hours. Truly lifesaving!”",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Shathi Begum",
    role: "Donor",
    message:
      "“I love giving back to the community. This platform made registering as a donor super easy.”",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jahid Hossain",
    role: "Recipient",
    message:
      "“The donors are verified and very responsive. My family and I are extremely grateful.”",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Drag handlers
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      // drag left → next
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 50) {
      // drag right → prev
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-6">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Hear from donors and recipients whose lives were positively impacted
          by blood donations.
        </p>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-12 flex flex-col items-center text-center mx-4 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-white italic mb-4">
                {testimonials[current].message}
              </p>
              <h3 className="text-lg font-semibold text-rhprimary">
                {testimonials[current].name}
              </h3>
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                {testimonials[current].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === idx
                    ? "bg-rhprimary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
