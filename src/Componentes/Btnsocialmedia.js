import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    btnlinks:{
        width:"35px",
        height:"35px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000000",
        color:"#fff",
        marginRight:"8px",
    }
});

function Btnsocialmedia(props) {
    const classes = useStyles();
    return (
        <Box>
           <Link underline="none" className={classes.btnlinks} href={props.enlace}>{props.icono}</Link> 
        </Box>
    )
}

export default Btnsocialmedia
