import './Project1Mobile.css';
import GitHubIcon from '../../icons/github';

function Project1Mobile() {
    return (
        <div className="project-page-mobile">
            <div className="p1-overlay-mobile"/>
            <div className="p1-project-desc-box-mobile">
                <div className="project-title-box-mobile">
                    <p className="project-category-mobile">Personal Project</p>
                    <p className="project-title-mobile">Word Generator for Wordle</p>
                </div>
                <div className="project-desc-box-mobile">
                    <div className="project-desc-mobile">
                        <p className="project-desc-text-mobile">A web app I built with a back-end servlet that accepts Wordle criteria (i.e. which letters are green or yellow) from the user and generates a list of possible words.</p>
                    </div>
                </div>
                <div className="project-tools-box-mobile">
                    <div className="project-tools-mobile">
                        <p className="project-tool-mobile">Java</p>
                        <p className="project-tool-mobile">Jakarta EE</p>
                        <p className="project-tool-mobile">Glassfish 5</p>
                        <p className="project-tool-mobile">HTML</p>
                        <p className="project-tool-mobile">CSS</p>
                    </div>
                </div>
                <div className="project-link-box-mobile">
                    <a href="https://github.com/ericamarghescu/wordlesolver">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Project1Mobile;