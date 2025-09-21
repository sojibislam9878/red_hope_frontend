import { motion } from "framer-motion";
import { HeartPulse, Users, Droplets } from "lucide-react"; // icons
// install: npm i lucide-react

const reasons = [
  {
    icon: <HeartPulse size={40} />,
    title: "Save Lives Instantly",
    desc: "Every blood donation can save up to three lives. Your small act of kindness could mean the world to someone in need.",
  },
  {
    icon: <Users size={40} />,
    title: "Build a Caring Community",
    desc: "Donating blood helps create a supportive network where people help each other during emergencies and crises.",
  },
  {
    icon: <Droplets size={40} />,
    title: "Stay Healthy, Stay Strong",
    desc: "Regular blood donation reduces harmful iron stores, improves heart health, and stimulates fresh blood cell production.",
  },
];

const WhyDonateBlood = () => {
  return (
    <section className="relative py-16 px-4 md:px-12 lg:px-20 bg-white dark:bg-secondary-dark">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-6"
        >
          Why Donate Blood?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Blood is the gift of life. By donating, you’re not just giving blood —
          you’re giving hope, strength, and a second chance at life.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center border-t-4 border-rhprimary hover:scale-105 transition-transform"
            >
              <div className="text-rhprimary mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Shape */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-rhprimary/20 rounded-full blur-2xl"
      />
    </section>
  );
};

export default WhyDonateBlood;
