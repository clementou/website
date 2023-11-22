import '../styles/ExperiencePage.css';
import arrow from '../../assets/images/arrow.png';
import PropTypes from 'prop-types';

const ExperiencePage = ({ desktop, jobTitle, company, dateRange, descriptions }) => {
  return (
    <div className="experience-page">
      <div className={desktop ? "job-header-box" : "job-header-box-mobile"}>
        <div className={desktop ? "job-title-box" : "job-title-box-mobile"}>
          <p className={desktop ? "job-title" : "job-title-mobile"}>{jobTitle}</p>
          <p className={desktop ? "company-title" : "company-title-mobile"}>@ {company}</p>
        </div>
        <p className={desktop ? "job-date" : "job-date-mobile"}>{dateRange}</p>
      </div>
      <div className="job-desc-box">
        {descriptions.map((desc, index) => (
          <div key={index} className={desktop ? "job-bullet" : "job-bullet-mobile"}>
            <img src={arrow} alt="Bullet" className="bullet" />
            <p className={desktop ? "job-desc-text" : "job-desc-text-mobile"}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ExperiencePage.propTypes = {
  desktop: PropTypes.bool.isRequired,
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperiencePage;
