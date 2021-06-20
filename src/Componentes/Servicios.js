import React from 'react'
import Box from '@material-ui/core/Box';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    boxservicios:{
        width:"350px",
        height:"100px",
        display:"flex",
        flexDirection:"row",
        marginLeft:"10px",
        [theme.breakpoints.down(860)]: {
            width:"300px",
            height:"80px",
        },
        [theme.breakpoints.down(700)]: {
           marginBottom:"10px",
           width:"400px",
           height:"60px",
           marginLeft:"0px",
        },
        [theme.breakpoints.down(473)]: {
            width:"350px",
        },
        [theme.breakpoints.down(423)]: {
            width:"300px",
        },
        [theme.breakpoints.down(353)]: {
            width:"250px",
        },
    },
    icon:{
        width:"20%",
        height:"100px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"45px",
        color:"#fff",
        backgroundColor:"#F2784B",
        marginRight:"5px",
        [theme.breakpoints.down(860)]: {
            width:"15%",
            height:"80px",
        },
        [theme.breakpoints.down(700)]: {
            width:"15%",
            height:"60px",
        },
    },
    describe:{
        width:"100%",
        height:"100px",
        textAlign:"center",  
        backgroundColor:"#FFF",
        [theme.breakpoints.down(860)]: {
            height:"80px",
        },
        [theme.breakpoints.down(700)]: {
            height:"60px",
        },
    },
    words:{
        fontSize:"18px",
        fontStyle:"normal",
        fontWeight:"700",
        color:"#020200",
        [theme.breakpoints.down(473)]: {
            fontSize:"15px",
        },
        [theme.breakpoints.down(353)]: {
            fontSize:"12px",
        },
    },
    words2:{
        fontSize:"15px",
        fontWeight:"700",
        color:"#020200",
        fontStyle:"normal",
        [theme.breakpoints.down(860)]: {
            fontSize:"13px",
        },
        [theme.breakpoints.down(700)]: {
            fontSize:"15px",
        },
        [theme.breakpoints.down(473)]: {
            fontSize:"13px",
        },
        [theme.breakpoints.down(353)]: {
            fontSize:"11px",
        },
    },
}))

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});

function Servicios(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.boxservicios}>
            <Box className={classes.icon}>
                {props.icon}
            </Box>
            <Box className={classes.describe}>
                <Typography className={classes.words}>{props.titulo}</Typography>
                <Typography className={classes.words2}>{props.descripcion}</Typography>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default Servicios
