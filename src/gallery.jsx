import "./App.css";
import GlobalEffects from "./components/global-effect";
import Navbar from "./components/navbar";
import EventGallery from "./gallery/event-gallery";

function Gallery() {
  return (
    <>
      <GlobalEffects />
      <Navbar />
      <EventGallery />
    </>
  );
}

export default Gallery;
