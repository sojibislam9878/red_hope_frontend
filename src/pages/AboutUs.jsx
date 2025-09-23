import { useTranslation } from "react-i18next";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import JourneyTimeline from "../components/about/JourneyTimeline";
import ImpactNumbers from "../components/about/ImpactNumbers";
import WhyChooseUs from "../components/about/WhyChooseUs";
import MeetTheTeam from "../components/about/MeetTheTeam";
import AboutTestimonials from "../components/about/AboutTestimonials";
import AboutCTA from "../components/about/AboutCTA";
import { Helmet } from "@dr.pogodin/react-helmet";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <Helmet>
        <title>Red Hope || About Us</title>
        {/* <link rel="canonical" href="http://mysite.com/example" />
        <meta charSet="utf-8" />
        <meta name="description" content="Some Component" /> */}
      </Helmet>
      <AboutHero />
      <MissionVision />
      <JourneyTimeline />
      <ImpactNumbers />
      <WhyChooseUs />
      <MeetTheTeam />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
}

export default AboutUs
