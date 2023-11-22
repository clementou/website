import './Project-Page-Left.css';
import './Project4.css';
import project4 from '../../assets/images/project4.png';
import GitHubIcon from '../../icons/github';

function Project4() {
  return (
    <div className="L-project-page">
      <div className="L-p4-project-img-container"/>
      <div className="p4-L-project-desc-box">
        <div className="L-project-title-box">
          <p className="L-project-category">Personal Project</p>
          <p className="L-project-title">Sudoku Web App</p>
        </div>
        <div className="L-project-desc">
          <p className="L-project-desc-text">A web app I built with a back-end java API that displays a Sudoku grid and allows the user to solve it. It also has capabilities to solve the game by itself.</p>
        </div>
        <div className="L-project-tools-box">
          <div className="L-project-tools">
            <p className="L-project-tool">React</p>
            <p className="L-project-tool">API</p>
            <p className="L-project-tool">JavaScript</p>
            <p className="L-project-tool">HTML</p>
            <p className="L-project-tool">CSS</p>
          </div>
        </div>
        <div className="L-project-link-box">
          <a href="https://github.com/ericamarghescu/sudoku-app">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Project4;