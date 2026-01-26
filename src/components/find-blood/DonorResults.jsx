import { motion } from "framer-motion";
import { MapPin, Phone, Droplet, Clock } from "lucide-react";

const donors = [
  {
    name: "Rahim Ahmed",
    blood: "O+",
    location: "Dhaka",
    available: true,
    lastDonation: "3 months ago",
  },
  {
    name: "Nusrat Jahan",
    blood: "A-",
    location: "Rajshahi",
    available: true,
    lastDonation: "4 months ago",
  },
  {
    name: "Imran Hossain",
    blood: "B+",
    location: "Bogura",
    available: false,
    lastDonation: "1 month ago",
  },
];

const DonorResults = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-rhprimary/5 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
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
            Available Blood Donors
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            These donors match your search criteria. Contact them quickly and
            save a life today.
          </p>
        </motion.div>

        {/* Donor Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {donors.map((donor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Blood Group Badge */}
              <div className="absolute -top-6 left-6 bg-rhprimary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {donor.blood}
              </div>

              {/* Donor Info */}
              <div className="mt-10 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {donor.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <MapPin size={16} />
                  {donor.location}
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Clock size={16} />
                  Last donated: {donor.lastDonation}
                </div>

                {/* Availability */}
                <div className="mt-4">
                  {donor.available ? (
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Available Now
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Not Available
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <button className="btn btn-sm bg-rhprimary text-white border-none hover:bg-rhprimary/90 flex-1">
                    <Phone size={16} />
                    Contact
                  </button>

                  <button className="btn btn-sm btn-outline border-rhprimary text-rhprimary hover:bg-rhprimary hover:text-white flex-1">
                    Request
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Placeholder (future use) */}
        {/* 
        <div className="text-center mt-20 text-gray-600 dark:text-gray-400">
          No donors found for your search criteria.
        </div>
        */}
      </div>
    </section>
  );
};

export default DonorResults;
