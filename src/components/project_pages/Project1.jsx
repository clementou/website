import React from 'react';
import Project from '../sections/Project';
import project1Image from '../../assets/images/project1.png';

const Project1 = () => {
  return (
    <Project
      layoutDirection="right"
      category="Personal Project"
      title="Emotion Detector"
      description="A web app I built with a team that distinguishes between 6 human emotions with 60% accuracy."
      tools={['Python', 'Django', 'OpenCV', 'YOLO', 'AWS']}
      githubLink="https://github.com/zikegcwk/aicamp_emotion"
      imageSrc={project1Image}
    />
  );
};

export default Project1;
