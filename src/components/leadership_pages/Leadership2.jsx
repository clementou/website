import '../styles/ExperiencePage.css';
import arrow from '../../assets/images/arrow.png';
import React from 'react';

class Leadership2 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>PM Workshop Lead</p>
                  <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Break Through Tech</p>
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>November 2022</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I hosted a workshop in collaboration with Break Through Tech to inspire underrepresented genders to pursue leadership roles in STEM.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>The workshop consisted of the basics of being a Product Manager and interactive activities to simulate certain aspects and engage the audience.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I got the chance to exercise my public-speaking skills and it felt really great to inspire others to pursue leadership roles, because I know how much it has helped me, both personally and professionally.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Leadership2;