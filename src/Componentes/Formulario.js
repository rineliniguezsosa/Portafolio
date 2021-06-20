import React from 'react'
import Box from '@material-ui/core/Box';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Titulo from './Titulo'
import emailjs from 'emailjs-com';

const useStyles = makeStyles(()=>({
    cajaformulario:{
        width:"100%",
        height:" 495px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    },
    formulario:{
        width:"400px",
        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.down(501)]: {
            width:"325px",
        },
        [theme.breakpoints.down(423)]: {
            width:"300px",
        },
        [theme.breakpoints.down(353)]: {
            width:"250px",
        },
    },
    inputs:{
        width:"100%",
        height:"50px",
        borderRadius:".5rem",
        marginTop:"15px",
        border:"none",
    },
    textarea:{
        width:"100%",
        height:"150px",
        borderRadius:".5rem",
        border:"none",
        marginTop:"15px",
    },
    btnenviar:{
        width:"30%",
        height:"50px",
        marginTop:"10px",
        marginRight:"270px",
        borderRadius:".5rem",
        border:"none",
        backgroundColor:"#F2784B",
        color:"#fff",
        [theme.breakpoints.down(501)]: {
           height:"30px", 
        },
        [theme.breakpoints.down(423)]: {
            width:"35%",
        },
        [theme.breakpoints.down(353)]: {
            width:"100%",
        },
    },
    texto:{
       color:"#fff",
       fontSize:"14px",
       fontWeight:"700",
       fontStyle:"normal",
       [theme.breakpoints.down(501)]: {
        fontSize:"12px", 
       },
    },
    size:{
        width:"100%",
        heigth:"30px",
        marginTop:"5px",
    },
    caja:{
        width:"100%",
        height:"550px",
    },
    
}));
const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});

function Formulario() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_4obq4nd', 'template_o9t0v2o', e.target, 'user_pXfhtcvHw1AgNeVu7t5Gy')
          .then((result) => {
            alert("Mensaje Enviado !")
            console.log(result.text);
          }, (error) => {
              alert("Oh algo ha salido mal :( ,vuelve a intertar!")
              console.log(error.text);
          });
          e.target.reset()
    }
    const classes = useStyles();
    return (
        <Box  className={classes.caja}>
            <Titulo title="Contactame"></Titulo>
            <Box className={classes.cajaformulario}>
                <ThemeProvider theme={theme}>
                        <Box className={classes.formulario}>
                            <form onSubmit={sendEmail}>
                               <Box className={classes.size}><Typography className={classes.texto}>Nombre</Typography></Box>
                               <input className={classes.inputs} required name="nombre" type="text"></input>
                               <Box className={classes.size}><Typography className={classes.texto}>Email</Typography></Box>
                               <input className={classes.inputs} required name="email" type="text"></input>
                               <Box className={classes.size}><Typography className={classes.texto}>Mensaje</Typography></Box>
                               <input className={classes.textarea} required name="mensaje" type="text-area"></input>
                               <button className={classes.btnenviar} type="submit"><Typography className={classes.texto}>Enviar mensaje</Typography></button>
                            </form>
                        </Box>
                </ThemeProvider>
            </Box>
        </Box>
    )
}

export default Formulario
