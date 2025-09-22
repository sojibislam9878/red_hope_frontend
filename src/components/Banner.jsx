import { motion } from "framer-motion";
import { Heart, Smile, HandHeart, Droplet } from "lucide-react"; // 👈 icons
import hero_image from "../assets/red_hope_hero.png";

const Banner = () => {
  const words = ["Hope", "Life", "Future", "Love"];
  const positions = [
    { top: "10%", left: "90%" },
    { top: "25%", left: "35%" },
    { top: "80%", left: "50%" },
    { top: "75%", left: "80%" },
  ];
  const durations = [3, 6, 4, 2];

  const icons = [
    { icon: <Heart size={32} />, top: "15%", left: "30%", duration: 6 },
    { icon: <HandHeart size={36} />, top: "50%", left: "45%", duration: 8 },
    { icon: <Smile size={28} />, top: "20%", left: "60%", duration: 5 },
    { icon: <Droplet size={30} />, top: "60%", left: "85%", duration: 7 },
  ];

  return (
    <section className="relative bg-gradient-to-r from-rhprimary/10 via-white to-rhsecondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 pb-5 md:px-12 lg:px-20 overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="absolute font-bold text-rhprimary text-xl md:text-3xl lg:text-4xl"
          style={{ top: positions[i].top, left: positions[i].left }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{
            duration: durations[i],
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 2,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}

      {/* Floating Icons */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-rhprimary"
          style={{ top: item.top, left: item.left }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -15, -15, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12  relative z-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={hero_image}
            alt="Blood Donation"
            className="w-full drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Donate Blood, Save Life
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Every drop of blood you donate is a gift of life. Join our mission
            to ensure no one suffers due to blood shortages. Together, we can
            build a stronger, healthier, and more compassionate community.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/donate"
              className="bg-rhprimary text-white px-8 py-4 rounded-full shadow-lg font-semibold"
            >
              Become a Donor
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/request"
              className="border-2 border-rhprimary text-rhprimary px-8 py-4 rounded-full font-semibold"
            >
              Request Blood
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
