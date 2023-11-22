import './Project3Mobile.css';

function Project3Mobile() {
  return (
    <div className="project-page-mobile">
      <div className="p3-overlay-mobile"/>
      <div className="p3-project-desc-box-mobile">
        <div className="project-title-box-mobile">
          <p className="project-category-mobile">University of Maryland</p>
          <p className="project-title-mobile">Honeypot Experiment</p>
        </div>
        <div className="project-desc-box-mobile">
          <div className="project-desc-mobile">
            <p className="project-desc-text-mobile">I created high-interaction honeypots with scripts to automate container lifecycle and keyloggers/MITM to determine how delaying ssh login time impacts attacker behavior.</p>
          </div>
        </div>
        <div className="project-tools-box-mobile">
          <div className="project-tools-mobile">
            <p className="project-tool-mobile">Python</p>
            <p className="project-tool-mobile">Bash</p>
            <p className="project-tool-mobile">Snoopy Keylogger</p>
            <p className="project-tool-mobile">MITM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Project3Mobile;