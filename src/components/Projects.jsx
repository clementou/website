import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import { useTheme } from '@mui/material/styles';

// Define your project points outside of the component to avoid recreating them on each render
const emotionDetectorPoints = [
  'Employed the YOLO neural net, custom-trained for the specific dataset, to achieve desired model performance.',
  'Collected over 50,000 images using OpenCV and Bing API, laying the groundwork for an expansive dataset.',
  'Automated the labeling process using OpenCV, enhancing efficiency and consistency in data annotation.',
  'Designed infrastructure for labeling and categorizing training/testing data.',
  'Utilized AWS EC2 for efficient cloud-based model training.',
  'Deployed application on the web using the Django framework, optimized for scalability and user accessibility.',
];

const iotDoorLockPoints = [
  'Fabricated lock and designed housing for device.',
  'Executed precise soldering of lock servo and Raspberry Pi, connected to a 9V battery through a breadboard.',
  'Engineered an Android App with an intuitive UI, biometric authentication, and scripts for Raspberry Pi internet connectivity.',
];

const homeLinuxServerPoints = [
  'Hosted applications such as Nginx, Bitwarden, and Plex, utilizing the server for a variety of tasks.',
  'Explored web servers, networking, and containers while crafting automation scripts for optimization.',
];

function Projects() {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{
      padding: theme.spacing(2.5),
      marginTop: theme.spacing(2.5),
      marginBottom: theme.spacing(2.5),
      mx: 'auto',
      width: '100%',
      maxWidth: { md: '80%', lg: '70%' },
    }} className="component-container">
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>

      <Box mb={theme.spacing(2)}>
        <Typography variant="h5" component="h3">Emotion Detector</Typography>
        <Typography paragraph>
          Collaborated with a team to develop a deep learning-based emotion detector web application that differentiates between 6 human emotions with an accuracy of 70%.
        </Typography>
        <List>
          {emotionDetectorPoints.map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon aria-hidden="true">
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      
      <Box mb={theme.spacing(2)}>
        <Typography variant="h5" component="h3">IoT Door Lock</Typography>
        <Typography paragraph>
          Designed and implemented an IoT Door Lock system paired with a dedicated Android app, showcasing end-to-end development expertise.
        </Typography>
        <List>
          {iotDoorLockPoints.map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon aria-hidden="true">
                <DeveloperModeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      
      <Box mb={theme.spacing(2)}>
        <Typography variant="h5" component="h3">Home Linux Server</Typography>
        <Typography paragraph>
          Configured and optimized an Ubuntu server for personal and family use.
        </Typography>
        <List>
          {homeLinuxServerPoints.map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon aria-hidden="true">
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default Projects;
