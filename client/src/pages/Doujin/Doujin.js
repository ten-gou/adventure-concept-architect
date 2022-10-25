import React, { useState } from 'react';

import {
    Box,
    Grid,
    Typography,
    Stack,
    Button
} from '@mui/material';
import { QUERY_REGIONS, QUERY_TAGS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { getRandomInt } from '../../utils/random';
import TagBox from '../../components/TagBox';

const QueryMultiple = () => {
    const queryTags = useQuery(QUERY_TAGS);
    const queryRegions = useQuery(QUERY_REGIONS);
    return [queryTags, queryRegions];
}

const Doujin = () => {
    let tagList = [];
    let newList = [];
    const [state, setState] = useState(tagList)
    
    const [
        {loading: loading1, data: data1},
        {loading: loading2, data: data2},
    ] = QueryMultiple();

    //generates the tagList
    const generateTags = () => {
        //removes the prev tagList
        tagList = [];

        //pulls a random amt of tags to input
        const randomAmt = getRandomInt(10);
        for (let i = 0; i < randomAmt; i++) {
            const randomTag = getRandomInt(data1.tags.length, 0);
            tagList.push(data1.tags[randomTag]);
        };
        
        return tagList;
    }

    const removeDups = (array) => {
        const newList = array.filter(function(item, pos) {
            return array.indexOf(item) == pos;
        })

        setState(newList);
    }

    const makeTagList = () => {
        generateTags();
        removeDups(tagList);
    };

    if (loading1 === false && loading2 === false) {   
        return (
            <Box>
                <Grid container
                marginY={4}
                height={'30vh'}
                alignContent={'center'}>
                    <Grid item xs={12}>
                        <Typography align={'center'} variant={'h3'}>Doujinshi Generator</Typography>
                    </Grid>
                    
                    <Grid item xs={2} />
                    <Grid item xs={8} align={'center'}>
                        <Stack>
                            <Typography variant='p'>Need to make a doujin and don't know where to start? Click the button below, and let the Prompt Generator create a template idea for you!</Typography>
                            <Button onClick={() => {makeTagList()}}>Get Started!</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Box><TagBox data={state} /></Box>
            </Box>
        )
    }
}

export default Doujin;