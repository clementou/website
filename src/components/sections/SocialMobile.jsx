import '../styles/SocialMobile.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import PlexIcon from '../../icons/plex';

function SocialMobile() {
    return (
        <div id="SocialMobile" className="socials-mobile">
            <div className="social-icons-mobile">
                <a href="https://github.com/clementou" className="social-icon-mobile">
                    <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/ouclement">
                    <InstagramIcon />
                </a>
                <a href="https://www.twitter.com/ClementOu">
                    <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/in/clementou">
                    <LinkedinIcon />
                </a>
                <a href="mailto: clement.h.ou@gmail.com">
                    <EmailIcon />
                </a>
                <a href="https://plex.clementou.com">
                    <PlexIcon className="svg-icon" />
                </a>
            </div>
        </div>
    );
}

export default SocialMobile;