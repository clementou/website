import '../styles/Projects.css';
import Project from './Project';
import projectsData from '../../assets/data/projectsData.json';
import project1Image from '../../assets/images/project1.png';
import project2Image from '../../assets/images/project2.png';

const projectImages = {
    'project1.png': project1Image,
    'project2.png': project2Image,
};

function Projects() {
    return (
        <div id="Projects" className="projects">
            <div className="projects-box">
                <div className="projects-title-box">
                    <h2 className="projects-num">05</h2>
                    <h2 className="projects-title-text">Technical Projects</h2>
                    <div className="projects-line-box">
                        <div className="projects-line" />
                    </div>
                </div>
                {projectsData.map((project, index) => (
                    <Project
                        key={project.id}
                        layoutDirection={index % 2 === 0 ? 'right' : 'left'}
                        category={project.category}
                        title={project.title}
                        description={project.description}
                        tools={project.tools}
                        githubLink={project.githubLink}
                        imageSrc={projectImages[project.imageSrc]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
