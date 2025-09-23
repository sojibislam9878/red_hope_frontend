
import { Helmet } from "@dr.pogodin/react-helmet";
import Banner from "../components/home/Banner";
import BecomeDonor from "../components/home/BecomeDonor";
import Contact from "../components/home/Contact";
import EventsTimeline from "../components/home/EventsTimeline";
import FAQ from "../components/home/Faq";
import FindBlood from "../components/home/FindBlood";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import WhyDonateBlood from "../components/home/WhyDonateBlood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Red Hope || Home</title>
        {/* <link rel="canonical" href="http://mysite.com/example" />
        <meta charSet="utf-8" />
        <meta name="description" content="Some Component" /> */}
      </Helmet>
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
