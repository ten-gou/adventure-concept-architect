import React from 'react';

import {
    Box,
    Paper,
    Grid,
    Typography,
} from '@mui/material';

const Home = () => {

    return (
        <Box>
            <Grid container
            height={'75vh'}
            spacing={4}
            justifyContent={'center'}
            alignContent={'center'}>
                <Grid item xs={10} sm={12} align={'center'}><Typography variant={'h5'}>Welcome to the Prompt Generator!</Typography></Grid>
                <Grid item xs={6} sm={12} align={'center'}><Typography variant={'p'}>Feeling bored? Want to get an 'idea' or template to start off from? Well look no further, the prompt generator for all your needs is here! Simply choose what kind of work you are looking to make, and the prompt generator will select tags and settings for you to work with!</Typography></Grid>
            </Grid>
        </Box>
    );

}

export default Home;