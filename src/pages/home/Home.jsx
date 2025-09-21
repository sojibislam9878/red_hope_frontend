import Banner from "../../components/Banner";
import BecomeDonor from "./BecomeDonor";
import FindBlood from "./FindBlood";
import WhyDonateBlood from "./WhyDonateBlood";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyDonateBlood/>
      <FindBlood/>
      <BecomeDonor/>
    </div>
  );
};

export default Home;
