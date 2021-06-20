import React from 'react'
import Link from '@material-ui/core/Link';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(()=>({
    enlaces:{
        maxWidth:"100%",
        height:"25px",
        marginRight:"50px",
        [theme.breakpoints.down(709)]: {
            display:"none"
        },
    },
    enlace2:{
        fontSize:"14px",
        fontStyle:"normal",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        fontWeight:"700",
        color:"#fff",
    },
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});


function Botonnav(props) {
    const classes = useStyles();
    return (
        <Box className={classes.enlaces} >
            <ThemeProvider theme={theme}>
            <Link className={classes.enlace2} underline="none" href={props.location}><Typography>{props.section}</Typography></Link>
            </ThemeProvider>
        </Box>
    )
}

export default Botonnav
