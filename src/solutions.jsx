import "./App.css";
import GlobalEffects from "./components/global-effect";
import Navbar from "./components/navbar";
import SolutionsNavigation from "./solutions/solutions-navigation";
import SolutionsTitle from "./solutions/solutions-title";
import SolutionsContent from "./solutions/solutions-content";
import HowItWorks from "./solutions/how-it-works";
import PressSection from "./solutions/press-section";
import ContactUs from "./components/contact-form";

function Solutions() {
  return (
    <>
      <GlobalEffects />
      <Navbar />
      <SolutionsNavigation />
      <SolutionsTitle />
      <SolutionsContent />
      <HowItWorks />
      <PressSection />
      <ContactUs />
    </>
  );
}

export default Solutions;
