import React from 'react'
import Informacion from './Informacion'
import { makeStyles } from '@material-ui/core/styles';
import Titulo from './Titulo';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(()=>({
    description:{
        maxWidth:"100%",
        display:"flex",
        flexDirection:"column",
    },
}));

function Description() {
    const classes = useStyles();
    return (
        <Grid id="proyectos" container className={classes.description}>
          <Titulo title="Portafolio"></Titulo>
          <Informacion ></Informacion>
        </Grid>
    )
}

export default Description
