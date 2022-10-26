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
import VNPrompt from '../../components/VNPrompt';
import TagBox from '../../components/TagBox';

const QueryMultiple = () => {
    const queryTags = useQuery(QUERY_TAGS);
    const queryRegions = useQuery(QUERY_REGIONS);
    const queryMatures = useQuery(QUERY_MATURES);
    const queryGenres = useQuery(Query_GENRES);
    return [queryTags, queryRegions, queryMatures, queryGenres];
}

const VN = () => {
    let vnList = [
        {
            genre: {}
        },
        {
            mature: {}
        },
        {
            region: {}
        },
        {
            tags: {}
        }
    ];
    const [
        {loading: loading1, data: data1},
        {loading: loading2, data: data2},
        {loading: loading3, data: data3},
        {loading: loading4, data: data4},
    ] = QueryMultiple();

    const [state, setState] = useState(vnList);

    const generateVN = () => {
        //clears the prev information
        vnList = vnList = [];
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
        const newList = removeDups(tagList);

        vnList.push({'tags':newList});

        setState(vnList);
    }

    if (loading1 === false && loading2 === false && loading3 === false && loading4 === false) {
        return (
            <Box>
                <Grid container
                marginY={8}
                spacing={4}
                height={'30vh'}
                alignContent={'center'}>
                    <Grid item xs={12}>
                        <Typography align={'center'} variant={'h3'}>Visual Novel Generator</Typography>
                    </Grid>
                    
                    <Grid item xs={2} />
                    <Grid item xs={8} align={'center'}>
                        <Stack>
                            <Typography variant='p'>When building a visual novel, a good place to start is a template! Click the button below to get a template!</Typography>
                            <Button onClick={() => {generateVN()}}>Get Started!</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Box>
                    <VNPrompt data={state} />
                    <TagBox data={state[3].tags} />
                </Box>
            </Box>
            
        )
    }
}

export default VN;