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

const TagBox = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        console.log('hello!')
        setChecked((prev) => !prev);
    };

    if (props !== undefined) {
        return (
            <Grid container
            spacing={12}>
                {props.data.map((item, index) => {
                    return (
                        <Grid item
                        xs={6} sm={4} md={2}
                        align={'center'}
                        key={index}
                        >

                            <Card>
                            <CardActionArea
                            onClick={handleChange}
                            checked={checked}>
                                <CardContent>
                                <Typography variant='p'>{item.value}</Typography>
                                <Collapse in={checked}>
                                    <Typography variant='p'>{item.description}</Typography>
                                </Collapse>
                                </CardContent>
                            </CardActionArea>
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