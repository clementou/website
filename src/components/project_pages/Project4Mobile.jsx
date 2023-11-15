import './Project4Mobile.css';
import GitHubIcon from '../../icons/github';

function Project4Mobile() {
   return (
     <div className="L-project-page-mobile">
         <div className="L-p4-overlay-mobile"/>
         <div className="L-p4-project-desc-box-mobile">
            <div className="L-project-title-box-mobile">
               <p className="L-project-category-mobile">Personal Project</p>
               <p className="L-project-title-mobile">Sudoku Web App</p>
            </div>
            <div className="L-project-desc-box-mobile">
               <div className="L-project-desc-mobile">
                  <p className="L-project-desc-text-mobile">A web app I built with a back-end java API that displays a Sudoku grid and allows the user to solve it. It also has capabilities to solve the game by itself.</p>
               </div>
            </div>
            <div className="L-project-tools-box-mobile">
               <div className="L-project-tools-mobile">
                  <p className="L-project-tool-mobile">React</p>
                  <p className="L-project-tool-mobile">API</p>
                  <p className="L-project-tool-mobile">JavaScript</p>
                  <p className="L-project-tool-mobile">HTML</p>
                  <p className="L-project-tool-mobile">CSS</p>
               </div>
            </div>
            <div className="L-project-link-box-mobile">
               <a href="https://github.com/ericamarghescu/sudoku-app">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project4Mobile;