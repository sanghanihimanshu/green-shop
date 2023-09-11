import Features from "../../components/AppFeatures";
import HeroSection from "../../components/HeroSection";
import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";
import CallToAction from "../../components/CallToAction";
import Blog from "../../components/Blog";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </>
  );
};

export default Home;
