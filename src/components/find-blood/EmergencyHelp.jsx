import { motion } from "framer-motion";
import { PhoneCall, AlertTriangle, Megaphone } from "lucide-react";

const EmergencyHelp = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-rhprimary to-rhsecondary text-white overflow-hidden">

      {/* Background pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6"
        >
          <AlertTriangle size={40} />
        </motion.div>

        {/* Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Emergency Blood Needed?
        </motion.h2>

        <p className="mt-5 text-lg text-white/90 max-w-3xl mx-auto">
          If you can’t find a donor immediately, don’t lose hope. Use our
          emergency support options below to reach donors faster.
        </p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <a
            href="tel:999"
            className="btn btn-lg bg-white text-rhprimary hover:bg-white/90 flex items-center gap-2"
          >
            <PhoneCall />
            Call Emergency
          </a>

          <button className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-rhprimary flex items-center gap-2">
            <Megaphone />
            Post Blood Request
          </button>
        </motion.div>

        {/* Note */}
        <p className="mt-8 text-sm text-white/80">
          Emergency requests are prioritized and shared with nearby donors
          instantly.
        </p>
      </div>
    </section>
  );
};

export default EmergencyHelp;
