import React from "react";
import hand from "../../assets/images/hand.svg";
import send from "../../assets/images/send.svg";

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        Çağdaş Aldoğan
        <img className="home-hand" src={hand} alt="hand" />
      </h1>

      <h3 className="home-subtitle">Frontend Developer</h3>
      <p className="home-description">
        I'm a passionate Front End Developer with 2 years of experience.
        Creating visually appealing and user-friendly websites is my expertise.
        Let's work together to bring your digital vision to life.
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello <img src={send} alt="send" />
      </a>
    </div>
  );
};

export default Data;
