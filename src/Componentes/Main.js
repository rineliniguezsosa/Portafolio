import React from 'react'
import react from '../imagenes/tazajs.png'
import Enlaces from './Enlaces';
import Enlacescv from './Enlacescv'
import Enlaces2 from './Enlaces2'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    contenedor:{
        maxWidth:"100%",
        height:"550px",
        backgroundImage:`url(${react})`, 
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.down(550)]: {
            height:"480px",
        },
        [theme.breakpoints.down(336)]: {
            height:"420px",
        },
        [theme.breakpoints.down(296)]: {
            height:"380px",
        },
    },
    nav:{
        maxWidth:"100%",
        height:"50px",
        backgroundColor:"#fff",
        opacity:"0.9",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        [theme.breakpoints.down(821)]: {
            justifyContent:"space-around",
        },
        [theme.breakpoints.down(490)]: {
            justifyContent:"flex-end", 
        },
    },
    name:{
        color:"#000",
        fontSize:"17px",
        fontWeight:"700",
        marginRight:"100px",
        [theme.breakpoints.down(490)]: {
            display:"none",
        },
    },
    contenedor2:{
        maxWidth:"100%",
        height:"500px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    rinel:{
        width:"100%",
    },
    fullname:{
        color:"#FFF",
        fontSize:"50px",
        fontWeight:"700",
        letterSpacing:"1.25px",
        [theme.breakpoints.down(701)]: {
            fontSize:"45px",
        },
        [theme.breakpoints.down(550)]: {
            fontSize:"35px",
        },
        [theme.breakpoints.down(391)]: {
            fontSize:"30px",
        },
        [theme.breakpoints.down(336)]: {
            fontSize:"25px",
        },
        [theme.breakpoints.down(296)]: {
            fontSize:"20px",
        },
    },
    size:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    dev:{
        color:"#FFF",
        fontSize:"25px",
        fontWeight:"700",
        letterSpacing:"1.25px",
        [theme.breakpoints.down(391)]: {
            fontSize:"20px",
        },
        [theme.breakpoints.down(296)]: {
            fontSize:"17px",
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

function Main() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.contenedor}>
            <Grid className={classes.nav}>
               <Typography className={classes.name}>Rinel</Typography>
                <Enlaces seccion="Servicios" enlace="#servicios"></Enlaces>
                <Enlaces seccion="Proyectos" enlace="#proyectos"></Enlaces>
                <Enlaces seccion="Contactame" enlace="#contactame"></Enlaces>
                <Enlacescv seccion="DESCARGAR CURRICULUM"></Enlacescv>
            </Grid>

            <Box className={classes.contenedor2}>
                <Box className={classes.rinel}>
                    <Box className={classes.size}><Typography className={classes.fullname}>RINEL IÑIGUEZ SOSA</Typography></Box>
                    <Box className={classes.size}><Typography className={classes.dev}>DESARROLLADOR WEB</Typography></Box>
                    <Box className={classes.size}>
                        <Enlaces2 donde="Portafolio" enlace="#proyectos"></Enlaces2>
                        <Enlaces2 donde="Contactame" enlace="#contactame"></Enlaces2>
                    </Box>
                </Box>
            </Box>
        </Box>

        </ThemeProvider>
    )
}

export default Main
