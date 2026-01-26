import { motion } from "framer-motion";
import { ShieldCheck, Lock, UserCheck, EyeOff } from "lucide-react";

const safetyPoints = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-rhprimary" />,
    title: "Verified Donors",
    desc: "All donors are verified to ensure authenticity and safety.",
  },
  {
    icon: <Lock className="w-8 h-8 text-rhprimary" />,
    title: "Secure Data",
    desc: "Your personal data is encrypted and securely stored.",
  },
  {
    icon: <EyeOff className="w-8 h-8 text-rhprimary" />,
    title: "Privacy Protected",
    desc: "Contact details are shared only when necessary.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-rhprimary" />,
    title: "Consent Based",
    desc: "Donors are contacted only with their permission.",
  },
];

const SafetyPrivacy = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-rhprimary/5 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Your Safety & Privacy Matter
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We follow strict safety and privacy standards so you can focus on
            saving lives without worry.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {safetyPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyPrivacy;
