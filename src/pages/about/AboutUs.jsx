import { useTranslation } from "react-i18next";
import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import JourneyTimeline from "./JourneyTimeline";
import WhyChooseUs from "./WhyChooseUs";
import ImpactNumbers from "./ImpactNumbers";
import MeetTheTeam from "./MeetTheTeam";
import AboutTestimonials from "./AboutTestimonials";
import AboutCTA from "./AboutCTA";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <AboutHero/>
      <MissionVision/>
      <JourneyTimeline/>
      <ImpactNumbers/>
      <WhyChooseUs/>
      <MeetTheTeam/>
      <AboutTestimonials/>
      <AboutCTA/>
    </div>
  );
}

export default AboutUs
