import './Project-Page-Right.css';
import './Project1.css';
import GitHubIcon from '../../icons/github';

function Project1() {
  return (
    <div className="project-page">
      <div className="p1-project-img-container"/>
      <div className="p1-project-desc-box">
        <div className="project-title-box">
          <p className="project-category">Personal Project</p>
          <p className="project-title">Emotion Detector</p>
        </div>
        <div className="project-desc">
          <p className="project-desc-text">A deep-learning based web app I built with a team that differentiates between 6 human emotions with an accuracy of 70%.</p>
        </div>
        <div className="project-tools-box">
          <div className="project-tools">
            <p className="project-tool">Python</p>
            <p className="project-tool">Django</p>
            <p className="project-tool">OpenCV</p>
            <p className="project-tool">YOLO</p>
            <p className="project-tool">AWS</p>
          </div>
        </div>
        <div className="project-link-box">
          <a href="https://github.com/zikegcwk/aicamp_emotion">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Project1;