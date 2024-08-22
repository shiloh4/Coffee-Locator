import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeContext } from '../themeContextProvider.js';
import Banner from '../Components/Home/banner.js';

export default function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Box sx={{display: 'flex', justifyContent: 'center' }}>
            <Banner/>
        </Box>
    );
};