import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const BecomeDonorCTA = () => {
  return (
    <section className="relative py-28 bg-gradient-to-r from-rhprimary to-rhsecondary text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8"
        >
          <HeartHandshake size={40} />
        </motion.div>

        {/* Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          Become a Blood Donor Today
        </motion.h2>

        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          One donation can save up to three lives. Join our community of heroes
          and make a real difference.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            to="/become-donor"
            className="btn btn-lg bg-white text-rhprimary hover:bg-white/90 border-none px-10"
          >
            Register as Donor
          </Link>
        </motion.div>

        <p className="mt-6 text-sm text-white/80">
          Registration takes less than 2 minutes.
        </p>
      </div>
    </section>
  );
};

export default BecomeDonorCTA;
