import { motion } from "framer-motion";
import { SlidersHorizontal, Droplet, MapPin, Clock } from "lucide-react";

const FindBloodFilters = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-r from-rhprimary/5 via-white to-rhsecondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-rhprimary/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rhprimary/10 text-rhprimary text-sm font-medium">
            <SlidersHorizontal size={16} />
            Refine Search
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Filter Available Donors
          </h2>

          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Narrow down donors based on your needs and find the right match
            faster.
          </p>
        </motion.div>

        {/* Filter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Blood Group */}
            <div className="relative">
              <Droplet className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-rhprimary" />
              <select className="select select-bordered w-full pl-12 dark:bg-gray-800 dark:text-white">
                <option disabled selected>
                  Blood Group
                </option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-rhprimary" />
              <input
                type="text"
                placeholder="City / Area"
                className="input input-bordered w-full pl-12 bg-transparent dark:text-white"
              />
            </div>

            {/* Availability */}
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-rhprimary" />
              <select className="select select-bordered w-full pl-12 dark:bg-gray-800 dark:text-white">
                <option disabled selected>
                  Availability
                </option>
                <option>Available Now</option>
                <option>Available Soon</option>
                <option>Any</option>
              </select>
            </div>

            {/* Reset Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-rhsecondary text-white hover:bg-rhsecondary/90 border-none"
            >
              Reset Filters
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindBloodFilters;
