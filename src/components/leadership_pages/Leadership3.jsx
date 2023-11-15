import '../styles/ExperiencePage.css';
import arrow from '../../assets/images/arrow.png';
import React from 'react';

class Leadership3 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Volunteer Music Teacher</p>
                  {this.props.desktop ? (<p className="company-title">@ Palo Alto Music Connection</p>) : (<p className="company-title-mobile">@ PAMC</p>)}
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>August 2017 - June 2019</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet" />
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Each week, I travelled to a local elementary school in a disadvantaged community to provide free and easy access to music lessons.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet" />
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I got to work closely with children to build rapport, teach flute performance fundamentals, and spark a passion for music.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet" />
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>It was so exciting to see young children fall in love with music the same way I did. It felt even better to see the smile on their parents' faces at the annual recital!</p>
               </div>
            </div>
         </div>
      );
   }
}

export default Leadership3;