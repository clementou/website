import '../styles/Projects.css';
import Project1 from '../project_pages/Project1';
import Project2 from '../project_pages/Project2';
import Project3 from '../project_pages/Project3';
import Project4 from '../project_pages/Project4';
import Project5 from '../project_pages/Project5';

function Projects() {
  return (
    <div id="Projects" className="projects">
      <div className="projects-box">
        <div className="projects-title-box">
          <p className="projects-num">05</p>
          <p className="projects-title-text">Technical Projects</p>
          <div className="projects-line-box">
            <div className="projects-line"/>
          </div>
        </div>
        <Project1/>
        <Project2/>
        <Project3/> 
        <Project4/>
        <Project5/>
      </div>
    </div>
  );
}

export default Projects;