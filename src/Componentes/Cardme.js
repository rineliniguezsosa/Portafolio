import React from 'react'
import mifoto from '../imagenes/rinel.jpeg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root:{
        maxWidth: "100%",
        height:"280px",
        [theme.breakpoints.down(700)]: {
            height:"250px",
        },
        [theme.breakpoints.down(340)]: {
            display:"none",
        },  
    },
    media:{
        height: "200px",
        backgroundColor:"#E7EAED",
    },
    welcome:{
        fontSize:"12px",
        fontStyle:"normal",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        fontWeight:"700", 
    },
    cardcontent:{
        textAlign:"center", 
    },  
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
  });
function Cardme() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia  className={classes.media} image={mifoto} tittle="Rinel iñiguez sosa">
            </CardMedia>
            <CardContent className={classes.cardcontent}>
                <ThemeProvider theme={theme}>
                <Typography className={classes.welcome}>Bienvenido a mi portafolio</Typography>
                </ThemeProvider>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default Cardme
