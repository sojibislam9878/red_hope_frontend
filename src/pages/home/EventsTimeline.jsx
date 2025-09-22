import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Dhaka Central Blood Donation Camp",
    date: "2025-10-10",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Chittagong City Hospital Drive",
    date: "2025-10-15",
    location: "Chittagong, Bangladesh",
  },
  {
    title: "Rajshahi University Blood Donation",
    date: "2025-10-22",
    location: "Rajshahi, Bangladesh",
  },
];

const EventsTimeline = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-rhsecondary/5 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-rhprimary mb-12 text-center"
        >
          Upcoming Blood Donation Camps
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-rhprimary/30"></div>

          <div className="space-y-12">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center relative md:even:flex-row-reverse"
              >
                {/* Date Circle */}
                <div className="flex-shrink-0 z-10 w-12 h-12 rounded-full bg-rhprimary text-white flex items-center justify-center font-bold text-lg md:mx-6 mb-4 md:mb-0">
                  {new Date(event.date).getDate()}
                </div>

                {/* Event Card */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:max-w-md w-full border-l-4 border-rhprimary">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                    <CalendarDays size={20} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin size={20} /> {event.location}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-rhprimary text-white rounded-lg font-semibold shadow-md hover:bg-primary-dark transition-colors"
                  >
                    Register
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
