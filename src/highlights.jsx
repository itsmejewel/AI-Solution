import "./App.css";
import GlobalEffects from "./components/global-effect";
import Navbar from "./components/navbar";
import HighlightsNavigation from "./highlights/highlights-navigation";
import HighlightColumns from "./highlights/highlight-column";
import ProjectStages from "./highlights/project-stages";

function Highlights() {
  return (
    <>
      <GlobalEffects />
      <Navbar />
      <HighlightsNavigation />
      <HighlightColumns />
      <ProjectStages />
    </>
  );
}

export default Highlights;
