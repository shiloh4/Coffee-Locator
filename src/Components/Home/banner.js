import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeContext } from '../../themeContextProvider';

export default function HomeBanner() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Box sx={{display: 'flex', 
            backgroundColor: theme.palette.primary.main,
            justifyContent: 'center', 
            width: '100%',
        }}>
        <Typography variant='h4' sx={{ 
            display: 'flex',
            width: isMobile ? '100%' : '60%',
            fontFamily: theme.typography.fontFamily,
            mt: '8%',
        }}>Your Favourite Task Management App</Typography>
        </Box>
    );
};