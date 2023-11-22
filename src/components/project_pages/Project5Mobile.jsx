import './Project5Mobile.css';
import GitHubIcon from '../../icons/github';

function Project5Mobile() {
  return (
    <div className="project-page-mobile">
      <div className="p5-overlay-mobile"/>
      <div className="p5-project-desc-box-mobile">
        <div className="project-title-box-mobile">
          <p className="project-category-mobile">University of Maryland</p>
          <p className="project-title-mobile">Heart Disease Prediction</p>
        </div>
        <div className="project-desc-box-mobile">
          <div className="project-desc-mobile">
            <p className="project-desc-text-mobile">A python tutorial I built with another UMD student that does exploratory data analysis to determine risk factors of heart disease and classification to predict heart disease based on health.</p>
          </div>
        </div>
        <div className="project-tools-box-mobile">
          <div className="project-tools-mobile">
            <p className="project-tool-mobile">Python</p>
            <p className="project-tool-mobile">Pandas</p>
            <p className="project-tool-mobile">Seaborn</p>
            <p className="project-tool-mobile">Statsmodels</p>
            <p className="project-tool-mobile">Sklearn</p>
          </div>
        </div>
        <div className="project-link-box-mobile">
          <a href="https://jsondevers.github.io/heart-attacks/">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Project5Mobile;