import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import { useTheme } from '@mui/material/styles';

function TechnicalSkills() {
  const theme = useTheme();

  return (
    <Paper 
      elevation={3} 
      sx={{
        padding: theme.spacing(2.5),
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
        mx: 'auto', // Centers the Paper
        width: '100%', // Use 100% of the parent width
        maxWidth: { md: '80%', lg: '70%' },
      }} 
      className="component-container"
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Technical Skills
      </Typography>
      
      <List>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Languages" 
            secondary="R, Python, C/C++, Java, Javascript, SQL, HTML/CSS" 
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Developer Tools" 
            secondary="Linux, Nginx, Git, Docker, GCP, AWS" 
          />
        </ListItem>
      </List>
    </Paper>
  );
}

export default TechnicalSkills;
