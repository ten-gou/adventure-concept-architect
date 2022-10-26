import React from 'react';

import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Collapse,
    Slide,
} from '@mui/material';
import { getRandomInt, randomValue, removeDups } from '../../utils/random';
import TagBox from '../TagBox';

const VNPrompt = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    if (props !== undefined || props.data.length !== 0) {
        return (
            <Grid container marginY={4}>
                <Typography variant={'p'} textAlign={'center'}>Ok, so imagine this: a(n) {props.data[0].genre.value} {props.data[1].mature.value} set in the {props.data[2].region.value} with the following tags: </Typography>
            </Grid>
        )
    }
};

export default VNPrompt;