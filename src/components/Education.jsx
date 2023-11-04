import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookIcon from '@mui/icons-material/Book';
import { useTheme } from '@mui/material/styles';

const Education = () => {
    const theme = useTheme();
    
    return (
        <Paper elevation={3} sx={{
            padding: theme.spacing(2.5),
            marginTop: theme.spacing(2.5),
            mx: 'auto',
        }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Education
            </Typography>
            
            <Typography variant="h5" component="h3">
                Carnegie Mellon University
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Pittsburgh, PA
            </Typography>
            <Typography variant="subtitle1">
                Bachelor of Science in Statistics and Machine Learning
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                May 2025
            </Typography>
            
            <List>
                <ListItem>
                    <ListItemIcon><BookIcon /></ListItemIcon>
                    <ListItemText 
                        primary="Relevant Coursework"
                        secondary="Principles of Imperative Computation, Algorithms and Advanced Data Structures, Introduction to Machine Learning, Natural Language Processing, Probability and Statistics II, Statistical Computing, Statistical Graphics and Visualization"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LocalLibraryIcon /></ListItemIcon>
                    <ListItemText 
                        primary="Activities"
                        secondary="Society of Asian Scientists and Engineers, Students Using Data for Social Good"
                    />
                </ListItem>
            </List>
        </Paper>
    );
}

export default Education;
