import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Ayesha Rahman",
    role: "Founder & Medical Advisor",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Md Shanto Sarkar",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rahim Uddin",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Fatema Begum",
    role: "Blood Donation Coordinator",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-rhprimary"
        >
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The passionate people working behind the scenes to make our mission possible.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-rhprimary"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h3>
            <p className="text-rhprimary font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
