import { motion } from "framer-motion";
import { HeartHandshake, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-rhprimary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-rhprimary"
        >
          Our Mission & Vision
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the driving force behind our platform and our dream for a
          healthier future.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border-t-4 border-rhprimary"
        >
          <HeartHandshake className="mx-auto text-rhprimary mb-4" size={48} />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To build a reliable, fast, and caring blood donation network where
            every donor and every recipient is connected with ease and trust.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border-t-4 border-rhsecondary"
        >
          <Eye className="mx-auto text-rhsecondary mb-4" size={48} />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            A future where no life is lost due to blood shortage, supported by a
            global community of compassionate donors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
