import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@mui/material/styles';

const Experience = () => {
    const theme = useTheme();

    return (
        <Paper elevation={3} sx={{
            padding: theme.spacing(3),
            margin: theme.spacing(3),
            mx: 'auto',
            width: '100%',
            maxWidth: { md: '80%', lg: '70%' },
        }}>
            <Typography variant="h4" gutterBottom>
                Experience
            </Typography>
            <Typography variant="h5">
                Jabil Inc.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                San Jose, CA
            </Typography>
            <Typography variant="subtitle1">
                Test Engineer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Sep 2022 – Apr 2023
            </Typography>

            <List>
                <ListItem>
                    <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
                    <ListItemText primary="Spearheaded manufacturing projects for several prominent tech companies, overseeing multiple projects from prototyping to market launch." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><TimelineIcon /></ListItemIcon>
                    <ListItemText primary="Facilitated seamless communication of issues and solutions between manufacturing team and overseas engineering teams." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Pioneered implementation of cutting-edge test line monitoring software, streamlining operations by integrating logging, failure analysis, and reporting into a unified tool." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                    <ListItemText primary="Directed a test site and supervised a team of three operators, overseeing all testing, debugging, and resolution of customer-related failures." />
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Further details are restricted due to NDA obligations." />
                </ListItem>
            </List>
        </Paper>
    );
}

export default Experience;
