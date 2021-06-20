import React from 'react'
import Formulario from './Formulario';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(()=>({
    contform:{
        maxWidth:"100%",
        height:"550px",
        display:"flex",
        flexDirection:"column",
        backgroundColor: "#020200",
    },
}));

function ContForm() {
    const classes = useStyles();
    return (
        <Box id="contactame" className={classes.contform} >
          <Formulario></Formulario>
        </Box>
    )
}

export default ContForm
