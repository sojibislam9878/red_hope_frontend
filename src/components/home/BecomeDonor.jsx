import { motion } from "framer-motion";
import { UserPlus, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BecomeDonor = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/become_donar");
  };
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-rhprimary to-rhsecondary text-white">
      <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Become a Lifesaver, <br /> Register as a Donor Today
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
            Donating blood is one of the simplest and most powerful ways to help
            others. By registering as a donor, you can be the reason someone
            gets a second chance at life.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="inline-flex cursor-pointer items-center gap-2 px-8 py-3 rounded-lg bg-white text-rhprimary font-semibold shadow-md hover:bg-gray-100 transition-colors"
          >
            <UserPlus size={22} />
            Register as Donor
          </motion.button>
        </motion.div>

        {/* Right Side - Icon/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-60 h-60 flex items-center justify-center rounded-full bg-white/10 border-4 border-white/20 shadow-xl">
            <Droplets size={100} className="text-white" />
            {/* Decorative Glow */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"
      />
    </section>
  );
};

export default BecomeDonor;
