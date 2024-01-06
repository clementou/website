import '../styles/ExperiencePage.css';
import './Leadership1.css';
import arrow from '../../assets/images/arrow.png';
import React from 'react';
import PropTypes from 'prop-types';

class Leadership1 extends React.Component {
  render() {
    return (
      <div className="leadership-page">
        <div className="experience-page">
          <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
            <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
              {this.props.desktop ? (<p className="job-title">Data Project Chair</p>) : (<p className="job-title-mobile">Data Project Chair</p>)}
              <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ SUDS</p>
            </div>
            <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>December 2023 - Present</p>
          </div>
          <div className="job-desc-box">
            <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
              <img src={arrow} className="bullet" />
              <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Students Using Data For Social Good (SUDS) partners with non-profits and governmental organizations on data-driven projects to help better our community.</p>
            </div>
            <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
              <img src={arrow} className="bullet" />
              <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I was appointed as a Data Project Chair, in charge of developing new projects with current partners and seeking out new partners.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Leadership1.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default Leadership1;