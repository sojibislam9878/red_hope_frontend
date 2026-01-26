import { Helmet } from "@dr.pogodin/react-helmet";
import FindBloodHero from "../components/find-blood/FindBloodHero";
import FindBloodFilters from "../components/find-blood/FindBloodFilters";
import DonorResults from "../components/find-blood/DonorResults";
import EmergencyHelp from "../components/find-blood/EmergencyHelp";
import BloodCompatibility from "../components/find-blood/BloodCompatibility";
import SafetyPrivacy from "../components/find-blood/SafetyPrivacy";
import BecomeDonorCTA from "../components/find-blood/BecomeDonorCTA";

const FindBlood = () => {
  return (
    <div>
      <Helmet>
        <title>Red Hope || Find Blood</title>
        {/* <link rel="canonical" href="http://mysite.com/example" />
        <meta charSet="utf-8" />
        <meta name="description" content="Some Component" /> */}
      </Helmet>
      <FindBloodHero />
      <FindBloodFilters />
      <DonorResults />
      <EmergencyHelp />
      <BloodCompatibility />
      <SafetyPrivacy />
      <BecomeDonorCTA />
    </div>
  );
};

export default FindBlood;
