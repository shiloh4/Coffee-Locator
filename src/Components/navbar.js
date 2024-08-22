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
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeContext } from '../themeContextProvider';

function ThemeToggleButton() {
    const { mode, toggleTheme } = useThemeContext();
    const theme = useTheme();
  
    return (
        <IconButton onClick={toggleTheme} sx={{color: theme.palette.text.primary}}>
            {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default function NavbarComponent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navbarBgColor = theme.palette.primary.main;

    return (
        <Box>
            <AppBar position="fixed" sx={{
                justifyContent: "center",
                zIndex: (theme) => theme.zIndex.drawer + 1, 
                padding: 0,
                display: 'flex',
                width: '100%',
                height: '10%',
                alignItems: 'center',
                backgroundColor: theme.palette.primary.main,
                boxShadow: 'none',
                backdropFilter: 'blur(10px)', // Blur effect
                WebkitBackdropFilter: 'blur(10px)', // safari compatibility
            }}>
                <Toolbar sx={{width: isMobile ? '100%' :'60%', display: 'flex', justifyContent: 'space-between',}} disableGutters>
                    <Box sx={{display: 'flex', flexGrow: 0, alignItems: 'center'}}>
                        <Link to="/" sx={{textDecoration: 'none', color: theme.palette.text.primary }}>
                            <CoffeeIcon fontSize='large' />
                        </Link>
                        <Link sx={{ color: theme.palette.text.primary, alignItems: 'center' }} underline="none">
                            <code>coffee-locator</code>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
                        <Link>
                            <Button sx={{ mx: 1, textTransform: 'none', color: theme.palette.text.primary }} disableElevation>tasks</Button>
                        </Link>
                        <Link>
                            <Button sx={{ mx: 1, textTransform: 'none', color: theme.palette.text.primary }} disableElevation>schedule</Button>
                        </Link>
                        <ThemeToggleButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}