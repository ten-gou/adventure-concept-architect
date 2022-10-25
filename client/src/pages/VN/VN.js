import React, { useState } from 'react';

import {
    Box,
    Grid,
    Typography,
    Stack,
    Button
} from '@mui/material';
import { Query_GENRES, QUERY_MATURES, QUERY_REGIONS, QUERY_TAGS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { getRandomInt, randomValue, removeDups } from '../../utils/random';
import TagBox from '../../components/TagBox';

const QueryMultiple = () => {
    const queryTags = useQuery(QUERY_TAGS);
    const queryRegions = useQuery(QUERY_REGIONS);
    const queryMatures = useQuery(QUERY_MATURES);
    const queryGenres = useQuery(Query_GENRES);
    return [queryTags, queryRegions, queryMatures, queryGenres];
}

const VN = () => {
    let vnList = [];
    const [
        {loading: loading1, data: data1},
        {loading: loading2, data: data2},
        {loading: loading3, data: data3},
        {loading: loading4, data: data4},
    ] = QueryMultiple();

    const [state, setState] = useState(vnList);

    const generateVN = () => {
        //clears the prev information
        vnList = [];
        let tagList = [];

        //random genre
        const randGenre = randomValue(data4.genres, `genreTitle`);
        vnList.push({'genre':randGenre});

        //random mature rating
        const randMature = randomValue(data3.matures, 'matureRating');
        vnList.push({'mature':randMature});

        //random region
        const randRegion = randomValue(data2.regions, `regionTitle`);
        vnList.push({'region':randRegion});

        //random tags
        const randAmt = getRandomInt(12);
        for (let i = 0; i < randAmt; i++) {
            const randTags = randomValue(data1.tags, `tagTitle`);
            tagList.push(randTags);
        }
        removeDups(tagList);

        vnList.push({'tags':tagList});

        console.log(vnList);
    }

    return (
        <Button onClick={() => {generateVN()}}>Get Started!</Button>
    )
}

export default VN;