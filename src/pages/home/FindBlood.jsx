import { motion } from "framer-motion";
import { Droplet, MapPin } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const FindBlood = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-rhsecondary/5 dark:bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-6"
        >
          Find Blood / Request Blood
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Searching for blood donors has never been easier. Select your blood
          group and location to request blood instantly.
        </motion.p>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Blood Group Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-1/3">
            <Droplet className="text-rhprimary" size={24} />
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-700 dark:text-white bg-transparent focus:ring-2 focus:ring-rhprimary outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Blood Group
              </option>
              {bloodGroups.map((group, idx) => (
                <option key={idx} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          {/* Location Input */}
          <div className="flex items-center gap-3 w-full md:w-1/3">
            <MapPin className="text-rhprimary" size={24} />
            <input
              type="text"
              placeholder="Enter City / District"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-700 dark:text-white bg-transparent focus:ring-2 focus:ring-rhprimary outline-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer md:w-auto px-8 py-3 rounded-lg bg-rhprimary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors"
          >
            Request Blood
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-12 -left-12 w-40 h-40 bg-rhprimary rounded-full blur-3xl"
      />
    </section>
  );
};

export default FindBlood;
