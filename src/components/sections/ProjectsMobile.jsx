import '../styles/ProjectsMobile.css';
import Project1Mobile from '../project_pages/Project1Mobile';
import Project2Mobile from '../project_pages/Project2Mobile';
import Project3Mobile from '../project_pages/Project3Mobile';
import Project4Mobile from '../project_pages/Project4Mobile';
import Project5Mobile from '../project_pages/Project5Mobile';

function ProjectsMobile() {
  return (
    <div id="ProjectsMobile" className="projects-mobile">
      <div className="space"/>
      <div className="projects-box-mobile">
         <div className="projects-title-box-mobile">
            <p className="projects-num-mobile">05</p>
            <p className="projects-title-text-mobile">Technical Projects</p>
            <div className="projects-line-box-mobile">
               <div className="projects-line-mobile"/>
            </div>
         </div>
         <Project1Mobile/>
         <Project2Mobile/>
         <Project3Mobile/>
         <Project4Mobile/>
         <Project5Mobile/>
      </div>
    </div>
  );
}

export default ProjectsMobile;