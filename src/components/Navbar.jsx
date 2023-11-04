import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Navbar = ({ onToggle }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Typography variant="h6" color="inherit" noWrap component="div" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive
                                    ? { textDecoration: 'none', color: 'inherit', fontWeight: 'bold', padding: '0 1rem' }
                                    : { textDecoration: 'none', color: 'inherit', padding: '0 1rem' }}>
                            About
                        </NavLink>
                    </Typography>
                    <Button
                        color="inherit"
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        CV
                    </Button>
                </div>
                <IconButton onClick={onToggle} color="inherit">
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

Navbar.propTypes = {
    onToggle: PropTypes.func.isRequired,
};

export default Navbar;
