import './Project-Page-Left.css';
import './Project2.css';
import project2 from '../../assets/images/project2.png';
import GitHubIcon from '../../icons/github';

function Project2() {
  return (
    <div className="L-project-page">
      <div className="L-p2-project-img-container"/>
      <div className="p2-L-project-desc-box">
        <div className="L-project-title-box">
          <p className="L-project-category">Technica Hackathon Winner</p>
          <p className="L-project-title">Meal Planner</p>
        </div>
        <div className="L-project-desc">
          <p className="L-project-desc-text">A web app I built with the Spoonacular API during the Technica Hackathon that generates recipes and weekly meal plans based on the user’s dietary preferences.</p>
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
          <a href="https://github.com/sadena27/meal-planner">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Project2;