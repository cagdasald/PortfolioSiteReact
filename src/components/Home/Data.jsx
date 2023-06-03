import React from "react";
import hand from "../../assets/images/hand.svg";
import send from "../../assets/images/send.svg"

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        Çağdaş Aldoğan
        <img className="home-hand" src={hand} alt="hand" />
      </h1>

      <h3 className="home-subtitle">Frontend Developer</h3>
      <p className="home-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        molestias reprehenderit nostrum rerum vel.
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello <img src={send} alt="send" />
      </a>
    </div>
  );
};

export default Data;
