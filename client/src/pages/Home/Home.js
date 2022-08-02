import React, { useState, useEffect } from 'react';

import {
    CssBaseline,
    Box,
    Grid,
    Stack
} from '@mui/material';
import { styled  } from '@mui/material/styles';

const BoxBackground = styled(Box)(({ theme }) => ({
    paddingTop: '2rem',
    paddingBottom: '3rem',
    background: 'rgb(240, 240, 255)'
}));

const Home = () => {
    return (
        <BoxBackground>
        <CssBaseline />
        <text>hello again!</text>
        </BoxBackground>
    );
}

export default Home;