import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MATURES, QUERY_TAGS } from '../../utils/queries';

import {
    CssBaseline,
    Box,
} from '@mui/material';
import { styled  } from '@mui/material/styles';

const BoxBackground = styled(Box)(({ theme }) => ({
    paddingTop: '2rem',
    paddingBottom: '3rem',
    background: 'rgb(240, 240, 255)'
}));

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_TAGS);
    console.log(loading);
    console.log(data);

    if (error) {
        console.log(error);
    }

    return (
        <BoxBackground>
        <CssBaseline />
        hello again!
        </BoxBackground>
    );
}

export default Home;