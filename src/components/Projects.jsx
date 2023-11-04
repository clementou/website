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
            // Ensure that maxWidth is controlled by theme
        }} className="component-container">
        <Typography variant="h4" component="h2" gutterBottom>
        Projects
        </Typography>
        
        <Box mb={theme.spacing(2)}>
        <Typography variant="h5" component="h3">Emotion Detector</Typography>
        <Typography paragraph>
        Collaborated with a team to develop a deep learning-based emotion detector web application...
        </Typography>
        <List>
        {emotionDetectorPoints.map((point) => (
            <ListItem key={point}>
            <ListItemIcon><ComputerIcon /></ListItemIcon>
            <ListItemText primary={point} />
            </ListItem>
            ))}
            </List>
            </Box>
            
            {/* ... Additional project sections ... */}
            
            <Box mb={theme.spacing(2)}>
            <Typography variant="h5" component="h3">IoT Door Lock</Typography>
            <Typography paragraph>
            Designed and implemented an IoT Door Lock system...
            </Typography>
            <List>
            {iotDoorLockPoints.map((point) => (
                <ListItem key={point}>
                <ListItemIcon><DeveloperModeIcon /></ListItemIcon>
                <ListItemText primary={point} />
                </ListItem>
                ))}
                </List>
                </Box>
                
                <Box mb={theme.spacing(2)}>
                <Typography variant="h5" component="h3">Home Linux Server</Typography>
                <Typography paragraph>
                Configured and optimized an Ubuntu server for personal use...
                </Typography>
                <List>
                {homeLinuxServerPoints.map((point) => (
                    <ListItem key={point}>
                    <ListItemIcon><StorageIcon /></ListItemIcon>
                    <ListItemText primary={point} />
                    </ListItem>
                    ))}
                    </List>
                    </Box>
                    </Paper>
                    );
                }
                
                export default Projects;
                