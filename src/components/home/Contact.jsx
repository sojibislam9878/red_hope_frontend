import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rhprimary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rhsecondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        {/* Left Side - Emergency Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-center gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rhprimary mb-4">
            Emergency? Contact Us Immediately
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our team is ready 24/7 to assist you with blood requests, donations,
            or any queries. Reach out through any of the channels below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform">
              <Phone className="text-rhprimary" size={28} />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  +880 1234 567890
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Emergency Helpline
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform">
              <Mail className="text-rhsecondary" size={28} />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  support@blooddonationbd.com
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email Support
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform">
              <MapPin className="text-rhprimary" size={28} />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Dhaka, Bangladesh
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Address
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-rhprimary mb-6 text-center">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Floating Inputs */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-2 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-rhprimary transition-colors"
                placeholder="Your Name"
              />
              <label className="absolute left-0 -top-5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-gray-500 peer-focus:text-sm">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-2 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-rhprimary transition-colors"
                placeholder="Your Email"
              />
              <label className="absolute left-0 -top-5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-gray-500 peer-focus:text-sm">
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent p-2 text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-rhprimary transition-colors resize-none"
                placeholder="Your Message"
              ></textarea>
              <label className="absolute left-0 -top-5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-gray-500 peer-focus:text-sm">
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6 }}
              type="submit"
              className="w-full cursor-pointer py-3 lg:py-4 bg-gradient-to-r from-rhprimary to-rhsecondary text-white rounded-xl font-semibold shadow-lg hover:from-primary-dark hover:to-secondary-dark transition-colors duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
