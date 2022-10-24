import React, { useState, useEffect } from 'react';

import {
    CssBaseline,
    Box,
    Grid,
    Stack,
    Button,
} from '@mui/material';
import { styled  } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const BoxBackground = styled(Box)(({ theme }) => ({
    paddingTop: '2rem',
    paddingBottom: '3rem',
    background: 'rgb(240, 240, 255)'
}));

const Home = () => {

    return (
        <BoxBackground>
        <CssBaseline />
            <Box>
                <Stack
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                marginX={2}
                marginTop={0}
                marginBottom={4}>
                    <Grid>
                        <h1>Prompt Generator</h1>
                    </Grid>
                    <Button
                    onClick={() => {
                        console.log('clicked')
                    }}><MenuIcon></MenuIcon></Button>
                </Stack>

                <Grid
                marginX={2}
                textAlign='center'>Welcome to the Prompt Generator</Grid>
            </Box>
        </BoxBackground>
    );
}

export default Home;