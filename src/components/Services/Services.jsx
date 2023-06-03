import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What i offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-window services-icon"></i>
            <h3 className="services-title">
              Frontend <br /> Development
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">lorem</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                expedita?
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-brackets-curly services-icon"></i>
            <h3 className="services-title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">lorem</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                expedita?
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-mobile-android services-icon"></i>
            <h3 className="services-title">
              Mobile <br /> Development
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">lore23123m</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                expedita?
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
