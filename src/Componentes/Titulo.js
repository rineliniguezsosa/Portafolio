import React from 'react'
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    cajatitulo:{
        width:"100%",
        height:"50px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"#020200",
    },
    barra:{
        width:"8%",
        height:"6px",
        backgroundColor:"#F2784B",
        border:"none",
    },
    tituloproyecto:{
        fontSize:"20px",
        fontStyle:"normal",
        lineHeight:"22.65px",
        fontWeight:"700",
        color:"#fff",
        padding:"5px",
    },
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});

function Titulo(props) {
    const classes = useStyles();
    return (
        <Box className={classes.cajatitulo}>
            <ThemeProvider theme={theme}>
                <Typography className={classes.tituloproyecto}>{props.title}</Typography>
                <hr className={classes.barra}></hr>
            </ThemeProvider>
        </Box>
    )
}

export default Titulo
