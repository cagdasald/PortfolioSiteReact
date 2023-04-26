import React from 'react';
import './LandingPage.scss';
import SectionHeader from './SectionHeader/SectionHeader';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionCareer from './SectionCareer/SectionCareer';
import SectionFooter from './SectionFooter/SectionFooter';

function LandingPage() {
  const sectionRefAbout = React.createRef();
  const sectionRefCareer = React.createRef();
  const sectionRefContact = React.createRef();

  return (
    <div id="home-page" className="page">
      <div className="page-content">
        <SectionHeader/>
        <SectionAbout sectionRef={sectionRefAbout}/>
        <SectionCareer sectionRef={sectionRefCareer}/>
        <SectionFooter sectionRef={sectionRefContact}/>
      </div>
    </div>
  );
}

export default LandingPage;
