import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Founded",
    desc: "Our platform was launched with the goal of bridging the gap between blood donors and recipients.",
  },
  {
    year: "2026",
    title: "1000+ Donors",
    desc: "We celebrated our first milestone with thousands of active and verified donors joining the cause.",
  },
  {
    year: "2027",
    title: "Nationwide Reach",
    desc: "Expanded across the country, connecting hospitals, donors, and recipients seamlessly.",
  },
  {
    year: "Future",
    title: "Global Expansion",
    desc: "Our journey continues as we work towards creating a worldwide blood donation network.",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-rhprimary/5 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-rhprimary"
        >
          Our Journey
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A timeline of how we started and where we are headed.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-rhprimary to-rhsecondary transform -translate-x-1/2"></div>

        {/* Items */}
        <div className="space-y-16">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:w-1/2">
                <h3 className="text-xl font-bold text-rhprimary">
                  {item.year}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              </div>
              {/* Dot */}
              <div className="w-6 h-6 bg-rhprimary rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
