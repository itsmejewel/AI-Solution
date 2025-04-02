import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./admin/authcontext";

import Navbar from "./components/navbar";
import Intro from "./landing/intro";
import MeetAda from "./landing/meet-ada";
import SolutionsSection from "./landing/solutions-section";
import HighlightsSection from "./landing/highlights-section";
import TestimonialsSection from "./landing/testimonials-section";
import ArticlesSection from "./landing/articles-section";
import GlobalEffects from "./components/global-effect";
import UpcomingEvents from "./landing/events-section";
import ContactUs from "./components/contact-form";
import Footer from "./components/footer-quote";
import Solutions from "./solutions";
import Highlights from "./Highlights";
import Gallery from "./gallery";
import Blog from "./blog";
import ADA from "./ada";
import AdminDashboard from "./admin/dashboard";
import AdminSignIn from "./admin/signin";
import BlogPost from "./blog/blog-post";
import ProtectedRoute from "./admin/protectedroute";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <MeetAda />
      <SolutionsSection />
      <HighlightsSection />
      <TestimonialsSection />/
      <ArticlesSection />
      <GlobalEffects />
      <UpcomingEvents />
      {/* Contact section with ID for scrolling */}
      <div id="contact-inquiry">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

function ScrollToContact() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      const contactSection = document.getElementById("contact-inquiry");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToContact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/ada" element={<ADA />} />
          {/* Removed separate contact page, now scrolls within home */}
          <Route path="/admin" element={<AdminSignIn />} />
          <Route
            path="/admin-dash"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
