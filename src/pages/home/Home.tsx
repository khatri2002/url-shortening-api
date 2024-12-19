import LandingSection from "../../components/landing-section/LandingSection";
import MainSection from "../../components/main-section/MainSection";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <MainSection />
    </main>
  );
};

export default Home;
