import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

const compatibilityData = [
  {
    blood: "O−",
    donateTo: "All Blood Groups",
    receiveFrom: "O−",
  },
  {
    blood: "O+",
    donateTo: "O+, A+, B+, AB+",
    receiveFrom: "O+, O−",
  },
  {
    blood: "A−",
    donateTo: "A−, A+, AB−, AB+",
    receiveFrom: "A−, O−",
  },
  {
    blood: "A+",
    donateTo: "A+, AB+",
    receiveFrom: "A+, A−, O+, O−",
  },
  {
    blood: "B−",
    donateTo: "B−, B+, AB−, AB+",
    receiveFrom: "B−, O−",
  },
  {
    blood: "B+",
    donateTo: "B+, AB+",
    receiveFrom: "B+, B−, O+, O−",
  },
  {
    blood: "AB−",
    donateTo: "AB−, AB+",
    receiveFrom: "AB−, A−, B−, O−",
  },
  {
    blood: "AB+",
    donateTo: "AB+",
    receiveFrom: "All Blood Groups",
  },
];

const BloodCompatibility = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-rhprimary/5 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Blood Compatibility Guide
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Knowing blood compatibility helps ensure safe and effective blood
            transfusions during emergencies.
          </p>
        </motion.div>

        {/* Compatibility Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {compatibilityData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Blood Badge */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rhprimary text-white text-xl font-bold mx-auto shadow-md">
                {item.blood}
              </div>

              {/* Info */}
              <div className="mt-6 text-center space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Can Donate To
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.donateTo}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Can Receive From
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.receiveFrom}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <Droplet className="inline-block mr-1 text-rhprimary" size={16} />
          This is a general compatibility guide. Always consult medical
          professionals during transfusions.
        </p>
      </div>
    </section>
  );
};

export default BloodCompatibility;
