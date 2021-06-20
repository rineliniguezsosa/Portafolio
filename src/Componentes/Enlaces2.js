import React from 'react'
import Link from '@material-ui/core/Link';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    enlaces:{
        padding:"10px 15px",
        backgroundColor:"#FFF",
        borderRadius:"5px",
        marginLeft:"10px",
        border:"none",
        [theme.breakpoints.down(391)]: {
            padding:"7px 10px",
        },
        [theme.breakpoints.down(296)]: {
            padding:"4px 8px",
        },
    },
    donde:{
        fontSize:"14px",
        fontStyle:"normal",
        fontWeight:"700",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        color:"#020200",
        [theme.breakpoints.down(550)]: {
            fontSize:"12px",
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

function Enlaces2(props) {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
                <Link underline="none" className={classes.enlaces} href={props.enlace}>
                    <Typography className={classes.donde}>{props.donde}</Typography>
                </Link> 
        </ThemeProvider>
    )
}

export default Enlaces2
