import PropTypes from 'prop-types';
import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import PlexIcon from '../../icons/plex';

const SocialIcon = ({ href, IconComponent }) => (
  <a href={href} className="social-icon">
    <IconComponent className="svg-icon" />
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired
};

const Social = () => {
  return (
    <div className="socials">
      <div className="social-icons">
        <SocialIcon href="https://github.com/clementou" IconComponent={GitHubIcon} />
        <SocialIcon href="https://www.instagram.com/ouclement" IconComponent={InstagramIcon} />
        <SocialIcon href="https://www.twitter.com/ClementOu" IconComponent={TwitterIcon} />
        <SocialIcon href="https://www.linkedin.com/in/clementou" IconComponent={LinkedinIcon} />
        <SocialIcon href="mailto:clement.h.ou@gmail.com" IconComponent={EmailIcon} />
        <SocialIcon href="https://plex.clementou.com" IconComponent={PlexIcon} />
      </div>
    </div>
  );
};

export default Social;
