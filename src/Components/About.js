import React from "react";
import Doctor from "../Assets/doctor-group.png"; // You can rename the image too
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Healthcare Team" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Who We Are</span>
        </h3>
        <p className="about-description">
          At CareConnect, we’re redefining how people experience healthcare. With a
          strong focus on convenience and personalization, our medical experts deliver
          top-tier guidance and care, right at your fingertips. Your health journey starts here.
        </p>

        <h4 className="about-text-title">How It Works</h4>

        <SolutionStep
          title="Find a Doctor"
          description="Browse a network of certified professionals and select the one that aligns with your needs. Quality care begins with the right choice."
        />

        <SolutionStep
          title="Schedule an Appointment"
          description="Pick a time that works for you and receive dedicated attention from specialists without long waits or crowded clinics."
        />

        <SolutionStep
          title="Receive Care Online"
          description="Get real-time consultations and tailored treatment plans — all from the comfort of your home."
        />
      </div>
    </div>
  );
}

export default About;
