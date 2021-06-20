import React from 'react'
import cv from '../Archivo/CV_Rinel_Iñiguez_Sosa.pdf'
import Link from '@material-ui/core/Link';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(()=>({
    file:{
        fontSize:"14px",
        fontStyle:"normal",
        padding:"5px 20px",
        borderRadius:"20px",
        backgroundColor:"#000000",
        color:"#fff",
        fontWeight:"700",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        [theme.breakpoints.down(709)]: {
            marginRight:"10px",
        },
        [theme.breakpoints.down(281)]:{
           marginRight:"0px", 
           padding:"5px 7px",
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
function Botonfilecv(props) {
    const classes = useStyles();
    return (
            <ThemeProvider  theme={theme}>
                <Link className={classes.file} underline="none" href={cv} download>
                  <Typography>{props.section}</Typography>
                </Link>
            </ThemeProvider>
    )
}

export default Botonfilecv
