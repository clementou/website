import '../styles/Experience.css';
import experienceData from '../../assets/data/experienceData.json'
import ExperiencePage from './ExperiencePage';
import React from 'react';
import PropTypes from 'prop-types';

class Experience extends React.Component {
  state = {
    activeExperience: experienceData[0].name,
    experiences: experienceData,
    lineTop: '0vh',
  };

  handleClick = (experienceName, index) => {
    const lineTopValue = `${(index * 7)}vh`;
    this.setState({ activeExperience: experienceName, lineTop: lineTopValue });
  };

  renderExperienceComponent = () => {
    const activeExp = this.state.experiences.find(e => e.name === this.state.activeExperience);
    return activeExp ? (
      <ExperiencePage
        desktop={this.props.desktop}
        jobTitle={activeExp.title}
        company={activeExp.company}
        dateRange={activeExp.dateRange}
        descriptions={activeExp.descriptions}
      />
    ) : null;
  };

  render() {
    const { activeExperience, experiences, lineTop } = this.state;
    return (
      <div id="Experience" className="experience">
        <div className="experience-box">
          <div className="experience-title-box">
            <h2 className="experience-num">03</h2>
            <h2 className="experience-title-text">Work Experience</h2>
            <div className="experience-line-box">
              <div className="experience-line" />
            </div>
          </div>
          <div className='experience-content'>
            <div className="experience-menu">
              <span className="experience-menu-line" style={{ top: lineTop }} />
              <div className="experience-menu-buttons">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.name}
                    className={activeExperience === exp.name ? "experience-menu-button-clicked" : "experience-menu-button"}
                    onClick={() => this.handleClick(exp.name, index)}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>
            <div className="experience-desc">
              {this.renderExperienceComponent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  desktop: PropTypes.bool,
};

export default Experience;
