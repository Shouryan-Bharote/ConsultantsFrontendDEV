import React from "react";

// Import all your components
import HeroSection from "../components/home/HeroSection.jsx";
// import AboutSection from "../components/home/AboutSection.jsx";
// import TrainingSection from "../components/home/TrainingSection.jsx";
import TrainersSection from "../components/home/TrainersSection.jsx";
// import Testimonials from "../components/home/Testimonials.jsx";
// import Usp from "../components/home/UspSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";
// import CoursesSection from "../components/home/CoursesSection.jsx";
import TrainingMemories from "../components/home/TrainingMemories.jsx";
// import Associations from "../components/home/Associations.jsx";
// import Footer from "../components/common/Footer.jsx";

// Import global CSS (optional, for general styling)
// import "../assets/styles/global.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* <section id="hero">
        <HeroSection />
      </section>
      <section>
        <TrainingSection />
      </section> */}

      {/* <section>
        <CoursesSection />
      </section> */}

      {/* <section>
        <TrainersSection />
      </section> */}

      {/* <section>
        <Associations />
      </section> */}

      {/* <section>
        <Usp />
      </section> */}

      <section>
        <ContactSection />
      </section>

      <section>
        <TrainingMemories />
      </section>

      {/* <section >
        <Testimonials />
      </section> */}

      {/* <section >
        <AboutSection />
      </section> */}


      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
