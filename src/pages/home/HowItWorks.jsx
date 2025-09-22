import { motion } from "framer-motion";
import { UserPlus, Search, Droplet, Heart } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Register",
    desc: "Sign up as a donor or requester with just a few simple details.",
  },
  {
    icon: <Search size={40} />,
    title: "Search / Request",
    desc: "Find available donors or request blood instantly by blood group & location.",
  },
  {
    icon: <Droplet size={40} />,
    title: "Donate / Receive",
    desc: "Get connected with verified donors or recipients for a safe donation process.",
  },
  {
    icon: <Heart size={40} />,
    title: "Save Lives",
    desc: "Every donation makes a difference. You are the reason someone lives longer.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-6"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our process is simple and effective. In just a few easy steps, you can
          donate or receive blood and become a true lifesaver.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform border-t-4 border-rhprimary"
            >
              <div className="text-rhprimary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-12 right-12 w-40 h-40 bg-rhprimary rounded-full blur-3xl"
      />
    </section>
  );
};

export default HowItWorks;
