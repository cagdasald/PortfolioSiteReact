import React from 'react';
import './SectionCareer.scss';
interface IProps {
  sectionRef: any;
}

function SectionCareer(props: IProps) {
  return (
    <div id="section-career" ref={props.sectionRef}>
      <h1 className="heading">Career</h1>
      <div className="card">
        <span>01.11.2021 / Present</span>
        <h4>Solid-Ict</h4>
        <span>
          I have been working as a Frontend Developer at SolidICt since November
          1st, 2021.
        </span>
      </div>
      <div className="card">
      <span>06.05.2021 / 06.08.2021</span>
      <h4>BukyTalk</h4>
        <span>
        I worked on both backend and frontend tasks at Bukytalk for 3 months.
        </span>
      </div>
    </div>
  );
}

export default SectionCareer;
