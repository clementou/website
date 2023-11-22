import './Project-Page-Right.css';
import './Project5.css';
import GitHubIcon from '../../icons/github';

function Project5() {
  return (
    <div className="project-page">
      <div className="p5-project-img-container"/>
      <div className="p5-project-desc-box">
        <div className="project-title-box">
          <p className="project-category">University of Maryland</p>
          <p className="project-title">Heart Disease Prediction</p>
        </div>
        <div className="project-desc">
          <p className="project-desc-text">A python tutorial I built with another UMD student that does exploratory data analysis to determine risk factors of heart disease and classification to predict heart disease based on health.</p>
        </div>
        <div className="project-tools-box">
          <div className="project-tools">
            <p className="project-tool">Python</p>
            <p className="project-tool">Pandas</p>
            <p className="project-tool">Seaborn</p>
            <p className="project-tool">Statsmodels</p>
            <p className="project-tool">Sklearn</p>
          </div>
        </div>
        <div className="project-link-box">
          <a href="https://jsondevers.github.io/heart-attacks/">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Project5;