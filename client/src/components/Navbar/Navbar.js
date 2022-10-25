import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import {
    Grid,
    Box,
    Stack,
    Button,
    Grow,
    Collapse,
    FormControlLabel,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';

const Navbar = () => {
    const theme = useTheme();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    const VisualNovel = () => {
        const match = useMediaQuery(theme.breakpoints.up('sm'));
        if (match === true) {
            return <Button href='/'>Visual Novel</Button>
        }
        else {
            return <Button href='/'>VN</Button>
        }
    }

    const Doujinshi = () => {
        const match = useMediaQuery(theme.breakpoints.up('sm'));
        if (match === true) {
            return <Button href='/doujin'>Doujinshi</Button>
        }
        else {
            return <Button href='/doujin'>Doujin</Button>
        }
    }

    return (
    <Box>
    <Stack
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    marginX={2}
    marginTop={0}
    marginBottom={2}>
        <Button href='/'><Typography variant='h2'>Prompt Generator</Typography></Button>

        <FormControlLabel control={<MenuIcon checked={checked} onClick={handleChange} />}>
            <MenuIcon />
        </FormControlLabel>
    </Stack>
    <Collapse
    in={checked}>
    <Grow
    in={checked}
    style={{ transformOrigin: 'top right' }}
    {...(checked ? { timeout: 1000 } : {})}>
        <Grid container>
            <Grid item xs={9}/>
            <Grid item xs={3}>
                <Stack>
                    <Doujinshi />
                    <VisualNovel />
                </Stack>
            </Grid>
        </Grid>
    </Grow>
    </Collapse>
    </Box>
    );
}

export default Navbar;