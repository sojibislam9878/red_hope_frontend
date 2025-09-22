import Banner from "../../components/Banner";
import BecomeDonor from "./BecomeDonor";
import Contact from "./Contact";
import EventsTimeline from "./EventsTimeline";
import FAQ from "./Faq";
import FindBlood from "./FindBlood";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import WhyDonateBlood from "./WhyDonateBlood";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyDonateBlood />
      <FindBlood />
      <BecomeDonor />
      <HowItWorks />
      <Testimonials />
      <EventsTimeline />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
