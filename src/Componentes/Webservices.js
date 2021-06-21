import React from 'react'
import Box from '@material-ui/core/Box';
import Titulo from './Titulo';
import { makeStyles } from '@material-ui/core/styles';
import Servicios from './Servicios';
import { HiCode } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";


const useStyles = makeStyles((theme)=>({
    cajaservicios:{
        maxWidth:"100%",
        height:"350px",
        backgroundColor:"#fff",
    },
    box:{
        width:"100%",
        height:"300px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#020200",
        [theme.breakpoints.down(700)]: {
           flexDirection:"column",
        },
    },
   
}))

function Webservices() {
    const classes = useStyles();
    return (
        <Box id="servicios" className={classes.cajaservicios}>
            <Titulo title="Servicios"></Titulo>
            <Box className={classes.box}>
                <Servicios 
                descripcion="Construcción y Mantenimiento de sitios web" 
                titulo="Desarollo web" 
                icon={<HiCode></HiCode>}>
                </Servicios>

                <Servicios 
                descripcion="Desarrollo progresivo de la aplicación" 
                titulo="Desarollo móvil" 
                icon={<AiOutlineMobile></AiOutlineMobile>}>
                </Servicios>

            </Box>
        </Box>
    )
}

export default Webservices
