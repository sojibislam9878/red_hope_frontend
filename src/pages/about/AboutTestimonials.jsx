import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "This platform saved my brother’s life when we needed blood urgently. Forever grateful.",
    name: "Nazmul Hasan",
  },
  {
    quote: "Donating blood has never been this easy and organized. Love being a part of this cause.",
    name: "Sumaiya Akter",
  },
  {
    quote: "The response time is incredible. Truly a life-saving initiative.",
    name: "Kamal Uddin",
  },
];

const AboutTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-rhprimary/10 to-rhsecondary/10 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-rhprimary"
        >
          What People Say
        </motion.h2>
      </div>

      <Slider {...settings} className="max-w-3xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 text-center relative">
              <p className="text-xl italic text-gray-700 dark:text-gray-200">
                “{t.quote}”
              </p>
              <h4 className="mt-6 font-semibold text-rhprimary">{t.name}</h4>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default AboutTestimonials;
