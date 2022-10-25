import React from 'react';

import {
    Grid,
    Typography,
    Card,
} from '@mui/material';

const TagBox = (props) => {
    if (props !== undefined) {
        return (
            <Grid container
            spacing={12}>
                {props.data.map((item, index) => {
                    return (
                        <Grid item
                        xs={6} sm={4} md={2}
                        align={'center'}
                        key={index}>
                            <Card>
                                <Typography variant='p'>{item.tagTitle}</Typography>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
    else {
        return (
            <Grid container></Grid>
        )
    }
}

export default TagBox;