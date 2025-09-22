import { motion } from "framer-motion";
// import heroImg from "/images/about-hero.png";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-rhprimary/10 via-white to-rhsecondary/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 px-6 md:px-12 lg:px-20 flex ">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rhprimary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rhsecondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-rhprimary mb-6">
            About <span className="text-rhsecondary">Our Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
            We are committed to saving lives by building a strong community of
            voluntary blood donors. Our mission is to make sure no one suffers
            due to a shortage of blood when they need it the most.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-rhprimary to-rhsecondary text-white font-semibold rounded-xl shadow-lg hover:from-primary-dark hover:to-secondary-dark transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
              alt="Blood Donation"
              className="rounded-3xl shadow-2xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg"
            >
              <p className="text-rhprimary font-bold text-xl">24/7 Support</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
