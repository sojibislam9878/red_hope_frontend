import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Lives Saved" },
  { number: "5K+", label: "Active Donors" },
  { number: "1.5K+", label: "Hospitals Connected" },
  { number: "99%", label: "Success Rate" },
];

const ImpactNumbers = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-rhprimary to-rhsecondary text-white relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Our Impact in Numbers
        </motion.h2>
        <p className="mt-4 text-lg text-gray-200">
          Together we’ve built a community that saves thousands of lives every year.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
        {stats.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold">{s.number}</h3>
            <p className="text-lg mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactNumbers;
