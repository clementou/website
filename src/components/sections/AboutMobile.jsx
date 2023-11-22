import '../styles/AboutMobile.css';
import headshot from '../../assets/images/headshot.png';
import arrow from '../../assets/images/arrow.png';

const skills = ['R', 'Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'React', 'Shell', 'Docker', 'Kubernetes'];

function AboutMobile() {
  return (
    <div id="AboutMobile" className="about-mobile">
      <div className="space" />
      <div className="about-box-mobile">
        <div className="about-title-mobile">
          <h2 className="about-num-mobile">01</h2>
          <h2 className="about-title-text-mobile">About Me</h2>
          <div className="about-line-box-mobile">
            <div className="about-line-mobile" />
          </div>
        </div>
        <div className="headshot-box-mobile">
          <img src={headshot} alt="Headshot" className="headshot-mobile" />
        </div>
        <p className='about-text-mobile'>
          {'/\'klɛmənt \'oʊ/'} • 欧华 (Ōu Huá) • he/him
        </p>
        <p className="about-text-mobile">
          Hi! My name is Clement Ou and I am a student at Carnegie Mellon University passionate about data science, machine learning, and problem solving. I have experience with full-stack development, data science, as well as ML engineering. I hope to use my skills to build a better future.
        </p>
        <p className="about-text-mobile">
          Outside of academics, I have a variety of interests and hobbies I like to pursue, including film, history, running, and travel.
        </p>
        <p className="skills-title-mobile">Languages and Technologies</p>
        <div className="langs-box-mobile">
          {skills.map(skill => (
            <div key={skill} className="lang-box-mobile">
              <img src={arrow} alt={`${skill} icon`} className="lang-logo-mobile" />
              <p className="lang-text-mobile">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
