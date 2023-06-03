import React from "react";
import "./About.css";
import AboutImg from "../../assets/images/about.jpg";
import CV from "../../assets/CV.pdf";
import Info from "./Info";
import files from "../../assets/images/files.svg"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="about" className="about-img" />
        <div className="about-data">
          <Info />

          <p className="about-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            ullam?
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
            <img src={files} alt="file"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
