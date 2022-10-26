import React from 'react';

import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Collapse,
} from '@mui/material';

const TagBox = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    if (props !== undefined && props.data.length !== undefined) {
        return (
            <Grid container
            spacing={12}>
                {props.data.map((item, index) => {
                    return (
                        <Grid item
                        xs={4} sm={3} md={2}
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
}

export default TagBox;