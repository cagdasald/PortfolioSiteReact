import React from 'react';
import './SectionAbout.scss';
interface IProps {
  sectionRef: any;
}

function SectionAbout(props: IProps) {
  return (
    <div id="section-about" ref={props.sectionRef}>
      <h2 className="heading">
        I'm <span>Çağdaş</span>, a Frontend Developer with a Passion for<br/> Clean
        and Engaging Designs
      </h2>
      <div className="banner-wrapper">
        <div className="image-wrapper"></div>
        <div className="card-wrapper">
          <div className="left">
            <div className="card">
              <b>HTML</b> 3 years
            </div>
            <div className="card">
              <b>Css/Sass</b> 3 years
            </div>
            <div className="card">
              <b>Javascript</b> 3 years
            </div>
            <div className="card">
              <b>ReactJs</b> 2 years
            </div>
          </div>
          <div className="right">
            <div className="card">
              <b>Redux</b> 2 years
            </div>
            <div className="card">
              <b>Typescript</b> 2 years
            </div>
            <div className="card">
              <b>VueJs</b> 1 year
            </div>
            <div className="card">
              <b>Git</b> 2 years
            </div>
          </div>
        </div>
      </div>
      <div className="about-me">
        <h1>
          About Me.
        </h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          autem laborum, quam perferendis qui doloremque tenetur architecto illo
          minus debitis cum, perspiciatis sint. Placeat omnis aspernatur quia
          nobis quod beatae error esse temporibus excepturi. Quae accusantium
          omnis distinctio, itaque consequuntur vitae a fugit? Magnam minus,
          laudantium dolores cumque officia exercitationem?
        </span>
      </div>
    </div>
  );
}

export default SectionAbout;
