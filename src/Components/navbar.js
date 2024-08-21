import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeContext } from '../themeContextProvider';

function ThemeToggleButton() {
    const { mode, toggleTheme } = useThemeContext();
    const theme = useTheme();
  
    return (
        <IconButton onClick={toggleTheme} sx={{color: theme.palette.accent.main}}>
            {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default function NavbarComponent() {
    const theme = useTheme();

    const navbarBgColor = theme.palette.primary.main;

    return (
        <Box>
            <AppBar position="fixed" sx={{
                justifyContent: "center",
                zIndex: (theme) => theme.zIndex.drawer + 1, 
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                backgroundColor: navbarBgColor,
                boxShadow: 'none',
                backdropFilter: 'blur(10px)', // Blur effect
                WebkitBackdropFilter: 'blur(10px)', // safari compatibility
            }}>
                <Toolbar sx={{width: '90%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" sx={{textDecoration: 'none'}}><AssignmentIndTwoToneIcon sx={{ color: theme.palette.accent.main }}/></Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link>
                            <Button sx={{ mx: 1, textTransform: 'none', color: theme.palette.accent.main }} disableElevation>tasks</Button>
                        </Link>
                        <Link>
                            <Button sx={{ mx: 1, textTransform: 'none', color: theme.palette.accent.main }} disableElevation>schedule</Button>
                        </Link>
                        <ThemeToggleButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}