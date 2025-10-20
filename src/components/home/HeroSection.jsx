import React from "react";
import "./HeroSection.css"; 
import Heroimg from "../../assets/images/Heroimg.png";
import Background from "../../assets/images/Group 58.svg";


const HeroSection = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>
          Performance <br /> <span>Optimized</span>
        </h1>
        <p>
          “An organization’s success and growth are <br></br>directly driven by the
          growth and <br></br>performance of its people.”
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get In Touch</button>
          <button className="btn-outline">About the Company</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={Background} alt="background" className="bg-image"/>
        <img src={Heroimg} alt="Business Professional"  className="overlay-img"/>
      </div>
    </section>
    </>
  );
};

export default HeroSection;