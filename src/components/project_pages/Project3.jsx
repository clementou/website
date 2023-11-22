import './Project-Page-Right.css';
import './Project3.css';

function Project3() {
  return (
    <div className="project-page">
      <div className="p3-project-img-container" />
      <div className="p3-project-desc-box">
        <div className="project-title-box">
          <p className="project-category">University of Maryland</p>
          <p className="project-title">Honeypot Experiment</p>
        </div>
        <div className="project-desc">
          <p className="project-desc-text">I created high-interaction honeypots with scripts to automate container lifecycle and keyloggers/MITM to determine how delaying ssh login time impacts attacker behavior.</p>
        </div>
        <div className="project-tools-box">
          <div className="project-tools">
            <p className="project-tool">Python</p>
            <p className="project-tool">Bash</p>
            <p className="project-tool">Snoopy Keylogger</p>
            <p className="project-tool">MITM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;