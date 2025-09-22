import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Heart } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={36} />,
    title: "Verified Donors",
    desc: "Every donor is verified to ensure safe and trusted blood donations.",
  },
  {
    icon: <Clock size={36} />,
    title: "Quick Response",
    desc: "Get blood requests fulfilled faster with our real-time system.",
  },
  {
    icon: <Users size={36} />,
    title: "Community Driven",
    desc: "A growing network of selfless donors working together to save lives.",
  },
  {
    icon: <Heart size={36} />,
    title: "Life Saving Impact",
    desc: "Every drop counts. Together, we’re creating a meaningful impact.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-rhprimary"
        >
          Why Choose Us?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here’s why thousands of people trust our platform for their blood
          donation needs.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center border-b-4 border-rhprimary/40 hover:border-rhprimary transition-colors"
          >
            <div className="text-rhprimary mb-4 flex justify-center">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
