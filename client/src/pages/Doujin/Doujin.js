import React, { useState } from 'react';

import {
    Box,
    Grid,
    Typography,
    Stack,
    Button
} from '@mui/material';
import { QUERY_TAGS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { getRandomInt, randomValue, removeDups } from '../../utils/random';
import TagBox from '../../components/TagBox';

const QueryMultiple = () => {
    const queryTags = useQuery(QUERY_TAGS);
    return [queryTags];
}

const Doujin = () => {
    let tagList = [];
    const [state, setState] = useState(tagList)
    
    const [
        {loading: loading1, data: data1},
    ] = QueryMultiple();

    //generates the tagList
    const generateTags = () => {
        //removes the prev tagList
        tagList = [];

        //pulls a random amt of tags to input
        const randAmt = getRandomInt(12);
        for (let i = 0; i < randAmt; i++) {
            const randomTag = randomValue(data1.tags, `tagTitle`);
            tagList.push(randomTag);
        };
        
        const newList = removeDups(tagList);
        setState(newList);
    }

    if (loading1 === false) {   
        return (
            <Box>
                <Grid container
                marginY={8}
                spacing={4}
                height={'30vh'}
                alignContent={'center'}>
                    <Grid item xs={12}>
                        <Typography align={'center'} variant={'h3'}>Doujinshi Generator</Typography>
                    </Grid>
                    
                    <Grid item xs={2} />
                    <Grid item xs={8} align={'center'}>
                        <Stack>
                            <Typography variant='p'>Need to make a doujin and don't know where to start? Click the button below, and let the Prompt Generator create a template idea for you!</Typography>
                            <Button onClick={() => {generateTags()}}>Get Started!</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Box>
                    <TagBox data={state} />
                </Box>
            </Box>
        )
    }
}

export default Doujin;