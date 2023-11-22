import '../styles/ExperienceMobile.css';
import experienceData from '../../assets/data/experienceData.json';
import ExperiencePage from './ExperiencePage';
import React from 'react';
import PropTypes from 'prop-types';

class ExperienceMobile extends React.Component {
  state = {
    activeExperience: experienceData[0].name,
    lineLeft: '0vw',
  };

  handleClick = (experienceName, index) => {
    const lineLeftValue = `${index * 22}vw`;
    this.setState({ activeExperience: experienceName, lineLeft: lineLeftValue });
  };

  renderExperienceComponent = () => {
    const activeExp = experienceData.find(e => e.name === this.state.activeExperience);
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
    const { activeExperience, lineLeft } = this.state;
    return (
      <div id="ExperienceMobile" className="experience-mobile">
        <div className="experience-box-mobile">
          <div className="experience-title-box-mobile">
            <h2 className="experience-num-mobile">03</h2>
            <h2 className="experience-title-text-mobile">Work Experience</h2>
            <div className="experience-line-box-mobile">
              <div className="experience-line-mobile" />
            </div>
          </div>
          <div className="experience-menu-mobile">
            <div className="experience-menu-buttons-mobile">
              {experienceData.map((exp, index) => (
                <button
                  key={exp.name}
                  id={`experience-button${index}-mobile`}
                  className={activeExperience === exp.name ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"}
                  onClick={() => this.handleClick(exp.name, index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            <span className="experience-menu-line-mobile" style={{ left: lineLeft }} />
          </div>
          <div className="experience-desc-mobile">
            {this.renderExperienceComponent()}
          </div>
        </div>
      </div>
    );
  }
}

ExperienceMobile.propTypes = {
  desktop: PropTypes.bool,
};

export default ExperienceMobile;
