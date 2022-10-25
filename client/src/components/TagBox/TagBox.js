import React from 'react';

import {
    Grid,
    Typography,
    Stack,
    Button
} from '@mui/material';

const TagBox = (props) => {
    if (props !== undefined) {
        return (
            <Grid container
            spacing={4}>
                {props.data.map((item, index) => {
                    return (
                        <Grid item
                        xs={6} sm={4} md={2}
                        align={'center'}
                        key={index}
                        className={'tag'}>
                            <Typography variant='p'>{item.tagTitle}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
    else {
        return (
            <Stack>
            </Stack>
        )
    }
}

export default TagBox;