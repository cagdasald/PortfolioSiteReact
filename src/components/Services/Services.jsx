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

              <h3 className="services-modal-title">Frontend</h3>
              <p className="services-modal-description">
                Here's how I can contribute in the Frontend Development
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Proficient in building interactive and responsive web
                    applications using React.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Experienced in managing application state using Redux for
                    efficient data flow.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Skilled in using TypeScript for type-safe development and
                    enhanced code quality.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Over the past 2 years, I have developed numerous projects
                    using React, showcasing my ability to create engaging user
                    interfaces.
                  </p>
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

              <h3 className="services-modal-title">Backend</h3>
              <p className="services-modal-description">
                Here's how I can contribute in the Backend Development
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Proficient in developing backend functionality for websites
                    using PHP
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Experienced in working with MSSQL databases to store and
                    retrieve data efficiently.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Skilled in designing and implementing RESTful APIs for
                    seamless integration with frontend applications.
                  </p>
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

              <h3 className="services-modal-title">Mobile</h3>
              <p className="services-modal-description">
                Here's how I can contribute in the Mobile Development
              </p>

              <ul className="servies-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Currently in the process of learning and developing mobile
                    applications using the React Native framework.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Have had some experience in creating apps that run smoothly
                    on both iOS and Android devices.
                  </p>
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
