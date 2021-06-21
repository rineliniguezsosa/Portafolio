import React from 'react'
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const useStyles = makeStyles(()=>({
    pie:{
        width:"100%",
        height:"70px",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#020200",
    },
    white:{
        backgroundColor:"#F2784B",
        color:"white",
        [theme.breakpoints.down(501)]: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },   
    },
    contacto:{
        marginRight:"20px",
        color:"#fff",
        fontWeight:"700",
        fontSize:"16px",
        lineHeight:"25.89px",
        letterSpacing:"0.5%",
        fontStyle:"normal",
        marginLeft:"5px",
        [theme.breakpoints.down(501)]: {
            fontSize:"12px",
            marginLeft:"2.5px",
            marginRight:"10px",
        },
        [theme.breakpoints.down(353)]:{
            fontSize:"10px",
        },
    },
}));

const theme = createMuiTheme(()=>({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
}));

function Pie() {
    const classes = useStyles();
    return (
        <Grid container className={classes.pie}>
            <ThemeProvider theme={theme}>
                <Avatar className={classes.white}><FiPhone></FiPhone></Avatar>
                <Box>
                   <Typography className={classes.contacto}>Cel.- 9999 08 63 84</Typography>
                </Box>
                
                <Avatar className={classes.white}><GoLocation></GoLocation></Avatar>
                <Box>
                   <Typography className={classes.contacto}>Mérida,yucatán</Typography>
                </Box> 
            </ThemeProvider>
        </Grid>
    )
}

export default Pie
