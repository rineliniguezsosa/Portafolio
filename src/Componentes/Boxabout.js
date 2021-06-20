import React from 'react'
import Grid from '@material-ui/core/Grid';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { FiGitlab} from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Btnsocialmedia from './Btnsocialmedia'
import Titulo from './Titulo';
import Cardme from './Cardme';
import mifoto from '../imagenes/rinel.jpeg'

const useStyles = makeStyles(()=>({
    contenedor:{
        maxWidth:"100%",
        height:"500px",
        diplay:"flex",
        flexDirection:"column",
        [theme.breakpoints.down(700)]: {
            height:"750px",
        },
    },
    box1:{
        width:"100%",
        height:"450px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#020200",
        [theme.breakpoints.down(700)]: {
            height:"700px",
        },
    },
    box2:{
        width:"80%",
        height:"300px",
        display:"flex",
        flexDirection:"row",
        padding:"10px",
        backgroundColor:"#333333",
        [theme.breakpoints.down(700)]: {
            flexDirection:"column",
            alignItems:"center",
            height:"490px",
        },
        [theme.breakpoints.down(472)]: {
            height:"540px",
        },
        [theme.breakpoints.down(353)]: {
            height:"580px",
        },
        [theme.breakpoints.down(340)]: {
            height:"480px",
        },
    },
    descripcion:{
        width:"80%",
        marginLeft:"10px",
        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.down(700)]: {
            marginTop:"20px",
            width:"90%",
        },
    },
    size:{
        width:"100%",
        textAlign:"justify",
    },
    size2:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        marginTop:"10px",
    },
    palabras:{
        fontSize:"17px",
        fontWeight:"400",
        fontStyle:"normal",
        color:"#fff",
        [theme.breakpoints.down(700)]: {
            fontSize:"15px",
        },
        [theme.breakpoints.down(400)]: {
            fontSize:"14px",
        },
        
    },
    large: {
        [theme.breakpoints.up(1200)]: {
            display:"none",
        },
        [theme.breakpoints.down(1200)]: {
            display:"none",
        },
        [theme.breakpoints.down(340)]: {
            display:"block",
            width: theme.spacing(15),
            height: theme.spacing(15),
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

function Boxabout() {
    const classes = useStyles();
    return (
        <Grid className={classes.contenedor}>
            <Titulo title="Sobre Mi"></Titulo>
            <Box className={classes.box1}>
                <Box className={classes.box2}>
                    <Cardme></Cardme>
                    <Avatar alt="Rinel iñiguez sosa" src={mifoto} className={classes.large} />
                        <Box className={classes.descripcion}>
                            <ThemeProvider theme={theme}>
                                <Box className={classes.size}>
                                    <Typography className={classes.palabras}>Hola a todos mi nombre es Rinel iñiguez sosa y soy desarrollador web, soy egresado del instituto tecnologico de merida en la carrera de ingenieria en sistemas computacionales, me interesa mucho el desarrollo de aplicaciones web y me gustaria aprender y aplicar por igual inteligencia artificial, personalmente me considero como una  persona seria, amigable y perserverante
                                    </Typography>
                                </Box>
                                <Box className={classes.size2}>
                                <Btnsocialmedia 
                                enlace="https://www.linkedin.com/in/rinel-i%C3%B1iguez-758a68203/" 
                                icono={<GrLinkedinOption/>}>
                                </Btnsocialmedia>
                                <Btnsocialmedia 
                                enlace="https://github.com/rineliniguezsosa" 
                                icono={<RiGithubLine/>}>
                                </Btnsocialmedia>
                                <Btnsocialmedia 
                                enlace="https://gitlab.com/rineliniguezsosa" 
                                icono={<FiGitlab/>}>
                                </Btnsocialmedia> 
                                </Box>
                            </ThemeProvider>
                        </Box>
                </Box>
            </Box>
            
        </Grid>
    )
}

export default Boxabout
