import React from 'react'
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    enlace2:{
        fontSize:"15px",
        fontStyle:"normal",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        fontWeight:"700",
        color:"#000",
        marginTop:"4px",
        marginRight:"50px",
        [theme.breakpoints.down(821)]: {
            display:"none",
        },
    },
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});

function Enlaces(props) {
    const classes = useStyles()
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Link underline="none"  href={props.enlace}>
                    <Typography className={classes.enlace2}>{props.seccion}</Typography>
                </Link>
            </ThemeProvider>
        </Box>
    )
}

export default Enlaces
