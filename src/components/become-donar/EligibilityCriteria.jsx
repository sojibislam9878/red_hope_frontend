import { motion } from "framer-motion";
import { Heart, Droplet, Activity, Smile } from "lucide-react";
import eligibilityImage from "../../assets/red_hope_hero.png";

const EligibilityCriteria = () => {
  const criteria = [
    {
      icon: <Heart className="w-8 h-8 text-rhprimary" />,
      title: "Age Requirement",
      description:
        "Donors must be between 18 and 65 years old to ensure safety and health.",
    },
    {
      icon: <Droplet className="w-8 h-8 text-rhprimary" />,
      title: "Minimum Weight",
      description:
        "You should weigh at least 50 kg to donate blood without health risks.",
    },
    {
      icon: <Activity className="w-8 h-8 text-rhprimary" />,
      title: "Good Health",
      description:
        "Donors must be in good health, with no infections or major illnesses.",
    },
    {
      icon: <Smile className="w-8 h-8 text-rhprimary" />,
      title: "Lifestyle",
      description:
        "Avoid alcohol and medications that may affect blood safety before donating.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-rhprimary/10 via-white to-rhsecondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img src={eligibilityImage} alt="Eligibility" className="w-full" />
        </div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Are You Eligible to <span className="text-rhprimary">Donate?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Before becoming a blood donor, it’s important to know the basic
            criteria that ensure both your safety and the safety of the patient
            receiving your blood. Here are the key requirements:
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {criteria.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 hover:shadow-xl transition"
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
