import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div
            className={
              toggleState === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Freelance Developer</h3>
                <span className="qualification-subtitle">
                  Upwork/Freelancer
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 06/2023-Present
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Frontend Developer</h3>
                <span className="qualification-subtitle">Solid-ICT</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 11/2021-06/2023
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Intern</h3>
                <span className="qualification-subtitle">BukyTalk</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 05/2021-08/2021
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="qualification-sections">
          <div
            className={
              toggleState === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Harvard Certificate</h3>
                <span className="qualification-subtitle">
                  CS50's Introduction to Computer Science
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 04/2023-Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Harvard Certificate</h3>
                <span className="qualification-subtitle">
                  CS50's Web Programming with Python and JavaScript
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 05/2023-Present
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Alaaddin Keykubat University
                </h3>
                <span className="qualification-subtitle">
                  Industrial Engineering
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 09/2021-Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">
                  Istanbul Gelisim University
                </h3>
                <span className="qualification-subtitle">
                  Computer Programming
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 09/2019-06/2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
