import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import PlexIcon from '../../icons/plex';

function Social() {
  return (
    <div className="socials">
      <div className="social-icons">
        <a href="https://github.com/clementou">
          <GitHubIcon className="svg-icon" />
        </a>
        <a href="https://www.instagram.com/ouclement">
          <InstagramIcon className="svg-icon" />
        </a>
        <a href="https://www.twitter.com/ClementOu">
          <TwitterIcon className="svg-icon" />
        </a>
        <a href="https://www.linkedin.com/in/clementou">
          <LinkedinIcon className="svg-icon" />
        </a>
        <a href="mailto: clement.h.ou@gmail.com">
          <EmailIcon className="svg-icon" />
        </a>
        <a href="https://plex.clementou.com">
          <PlexIcon className="svg-icon" />
        </a>
      </div>
      <div className="social-line">
        <div className="line" />
      </div>
    </div>
  );
}

export default Social;