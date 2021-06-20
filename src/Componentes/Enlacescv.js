import React from 'react'
import Link from '@material-ui/core/Link';
import cv from '../Archivo/CV_Rinel_Iñiguez_Sosa.pdf'
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    file:{
        padding:"5px 20px",
        borderRadius:"20px",
        backgroundColor:"#000000",
        [theme.breakpoints.down(490)]: {
            marginRight:"10px",
        },
    },
    descargar:{
        fontSize:"14px",
        fontStyle:"normal",
        fontWeight:"700",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        color:"#fff",
        [theme.breakpoints.down(381)]: {
           fontSize:"10px",  
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

function Enlacescv(props) {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
                <Link className={classes.file} underline="none" href={cv} download>
                    <Typography className={classes.descargar}>{props.seccion}</Typography>
                </Link> 
        </ThemeProvider>
    )
}

export default Enlacescv
