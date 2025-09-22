import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can donate blood?",
    answer:
      "Anyone between 18-65 years old, healthy, and meeting basic requirements can donate blood.",
  },
  {
    question: "How often can I donate?",
    answer:
      "You can donate whole blood every 3 months and plasma every 28 days. Always consult your local guidelines.",
  },
  {
    question: "Is donating blood safe?",
    answer:
      "Yes! All procedures are safe, sterile, and performed by trained professionals.",
  },
  {
    question: "What should I do before donating?",
    answer:
      "Eat a healthy meal, stay hydrated, and avoid alcohol. Bring a valid ID for registration.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-rhprimary/10 to-rhsecondary/10 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-6">
          Frequently Asked Questions
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We answer the most common questions about blood donation to help you
          feel safe and informed.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-l-4 border-rhprimary cursor-pointer"
              onClick={() => toggleIndex(idx)}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-rhprimary"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-left">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
