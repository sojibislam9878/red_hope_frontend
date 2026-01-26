import { motion } from "framer-motion";
import { Droplet, MapPin, Search, HeartPulse } from "lucide-react";

const FindBloodHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rhprimary/15 via-white to-rhsecondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">

      {/* Background Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rhprimary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-rhsecondary/20 rounded-full blur-3xl" />

      {/* Floating Blood Drop */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-20 opacity-20 hidden md:block"
      >
        <Droplet className="w-32 h-32 text-rhprimary" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-6">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Find Blood.
            <br />
            <span className="text-rhprimary">Save Lives Instantly.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Every 2 seconds someone needs blood. Search verified donors near you
            and get help when it matters most.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { label: "Registered Donors", value: "12,500+" },
              { label: "Lives Saved", value: "8,300+" },
              { label: "Cities Covered", value: "64+" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-rhprimary">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Search Blood Donors Near You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Blood Group */}
            <div className="relative">
              <Droplet className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-rhprimary" />
              <select className="select select-bordered w-full pl-12 z-0 dark:bg-gray-800/90 dark:text-white">
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
                placeholder="Your city or area"
                className="input input-bordered w-full pl-12 bg-transparent dark:text-white focus:outline-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-rhprimary hover:bg-rhprimary/90 text-white border-none flex items-center gap-2"
            >
              <Search size={20} />
              Find Blood
            </motion.button>
          </div>

          {/* Emergency Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HeartPulse className="text-rhprimary" />
            For emergencies, contact nearby donors immediately
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-center text-gray-500 dark:text-gray-400"
        >
          ↓ Scroll to see available donors
        </motion.div>
      </div>
    </section>
  );
};

export default FindBloodHero;
