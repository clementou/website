import PropTypes from 'prop-types';
import GitHubIcon from '../../icons/github';
import '../styles/Project.css';

const Project = ({ layoutDirection, category, title, description, tools, githubLink, imageSrc }) => {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const imageContainerStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(206, 50, 89, .2) 0, rgba(206, 50, 89, .1) 40%, rgba(10, 25, 47, .2) 100%), url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const responsive = {
    desktop: width > 1023
  };

  return (
    <div className={`project-page ${layoutDirection} ${responsive.desktop ? "" : "mobile-layout"}`}>
      <div className="project-img-container" style={imageContainerStyles} />
      <div className="project-desc-box">
        <div className="project-title-box">
          <p className="project-category">{category}</p>
          <p className="project-title">{title}</p>
        </div>
        <div className="project-desc">
          <p className="project-desc-text">{description}</p>
        </div>
        <div className="project-tools-box">
          {tools.map((tool, index) => (
            <p key={index} className="project-tool">{tool}</p>
          ))}
        </div>
        <div className="project-link-box">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  layoutDirection: PropTypes.oneOf(['left', 'right']).isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Project;
