import '../styles/ExperiencePage.css';
import arrow from '../../assets/images/arrow.png';
import React from 'react';
import PropTypes from 'prop-types';

class Leadership2 extends React.Component {
  render() {
    return (
      <div className="experience-page">
        <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
          <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
            <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Competition Director</p>
            <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Data Science Club</p>
          </div>
          <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>December 2023 - Present</p>
        </div>
        <div className="job-desc-box">
          <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
            <img src={arrow} className="bullet"/>
            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>The Carnegie Mellon Data Science Club hosts workshops and events to help students learn more about data science as well as compete in competitions.</p>
          </div>
          <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
            <img src={arrow} className="bullet"/>
            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>As the Competitions Director, I organized resources and found competitions for our members to compete in and learn from.</p>
          </div>
          <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
            <img src={arrow} className="bullet"/>
            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I also organized a competition for CMU students to compete in with prizes!</p>
          </div>
        </div>
      </div>
    );
  }
}

Leadership2.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default Leadership2;