import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TAGS } from '../../utils/queries';

import {
    Box,
    Grid,
} from '@mui/material';

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_TAGS);

    if (error) {
        console.log(error);
    }

    if (loading === false) {
        return (
            <Box>
                <Grid
                marginX={2}
                textAlign='center'>
                    Welcome to the Prompt Generator!
                </Grid>
    
                <Grid>
                    {data.tags[35].tagTitle}
                </Grid>
            </Box>
        );
    }
    else {
        return (
            <Box>
                <Grid
                marginX={2}
                textAlign='center'>
                    Welcome to the Prompt Generator!
                </Grid>
    
                <Grid>
    
                </Grid>
            </Box>
        );
    }    
}

export default Home;