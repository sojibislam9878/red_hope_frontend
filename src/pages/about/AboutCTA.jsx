import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
    const navigate = useNavigate()
    
    const handleNavigate =()=>{
        navigate('/become_donar')
    }
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-rhprimary to-rhsecondary text-white relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Save Lives With Us?
        </motion.h2>
        <p className="text-lg mb-8 text-gray-100">
          Join our growing community of donors and help ensure that no one has
          to suffer due to a lack of blood.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
          onClick={handleNavigate}
            whileHover={{ scale: 1.01 }}

            className="bg-white text-rhprimary font-semibold px-8 py-4 rounded-full shadow-lg"
          >
            Become a Donor
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.01 }}

            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full"
          >
            Request Blood
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
