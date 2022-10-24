import React from 'react';

import {
    Box,
    Grid,
    Typography,
} from '@mui/material';
import { QUERY_MATURES, QUERY_TAGS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const QueryMultiple = () => {
    const queryTags = useQuery(QUERY_TAGS);
    const queryMatures = useQuery(QUERY_MATURES);
    return [queryTags, queryMatures];
}

const Doujin = () => {   
    const [
        {loading: loading1, data: data1},
        {loading: loading2, data: data2},
    ] = QueryMultiple()

    console.log(data1)
    console.log(data2)
    return (
        <Box>
            a
        </Box>
    )
}

export default Doujin;