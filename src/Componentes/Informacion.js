import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
    info:{
        width:"100%",
        height:"490px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#020200",
        [theme.breakpoints.down(769)]: {
            flexDirection:"column",
            height:"790px",
        }, 
         
    },
    root: {
        maxWidth: "320px",
        height:"320px",
        marginRight:"10px",
        borderRadius:"5px",
        [theme.breakpoints.down(769)]: {
           marginBottom:"15px",
        },
        [theme.breakpoints.down(423)]: {
            height:"310px",
            maxWidth:"290px", 
        },
        [theme.breakpoints.down(353)]: {
            height:"290px",
            maxWidth:"240px", 
        },
    },
    media:{
        height: "150px",
        width:"100%", 
    },
    cajabtn:{
        marginLeft:"7px",
        [theme.breakpoints.down(423)]: {
            marginLeft:"0px",
        },
    },
    btncolor:{
        color:"#fff",
        backgroundColor:"#000",
        padding:"10px 20px",
        borderRadius:".5rem",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    subtitlebtn:{
        fontSize:"12px",
        fontStyle:"normal",
        lineHeight:"22.65px",
        letterSpacing:"1.25px",
        fontWeight:"700",
        color:"#fff",
    },
    subtitle:{
        fontSize:"12.5px",
        fontWeight:"400",
        [theme.breakpoints.down(423)]: {
            fontSie:"10px",
        },
        [theme.breakpoints.down(353)]: {
            fontSize:"10px",
        }, 
    },
    titulo:{
        fontSize:"17px",
        fontWeight:"700",
    },
    contenedor:{
        [theme.breakpoints.down(423)]: {
            padding:"9px",
        },
    },
    
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oxygen',
      ].join(','),
    },
});

function Informacion() {
    const classes = useStyles();
    const elementos =[
        {
            id:1,
            nombreproyecto:"Mi portafolio personal",
            imagen:"https://media.bitdegree.org/storage/media/images/2018/10/The-Most-Essential-React-Interview-Questions.jpg",
            descripcion:"Desarrollo de mi portafolio personal empleando reactjs,javascript,html,css,material ui y github",
            enlacegit:"https://github.com/rineliniguezsosa/Portafolio",
        },
        {
            id:2,
            nombreproyecto:"Practicando javascript",
            imagen:"https://revo300.academy/wp-content/uploads/2019/12/js.jpg",
            descripcion:"Desarrollo de proyectos javascript para practicar en la pandemia",
            enlacegit:"https://github.com/rineliniguezsosa/Practicando-Javascript",
        },
    ]
    
    const lista = elementos.map(contenido=>(
        <Box key={contenido.id}>
                <ThemeProvider theme={theme}>
                    <Card className={classes.root}>
                        <CardActionArea border="1px red solid">
                             <CardMedia component="img" image={contenido.imagen} className={classes.media}>
    
                             </CardMedia>
                        <CardContent className={classes.contenedor}>
                         <Typography className={classes.titulo}>
                             {contenido.nombreproyecto}
                        </Typography>
                         <Typography className={classes.subtitle}>
                            {contenido.descripcion}
                        </Typography>
                         </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cajabtn}>
                            <Link underline="none" href={contenido.enlacegit} size="small" className={classes.btncolor}>
                               <Typography className={classes.subtitlebtn}>Ver Código</Typography> <RiGithubLine></RiGithubLine>
                            </Link>
                        </CardActions>
                    </Card>
                </ThemeProvider>
            </Box>
    ))
    return (
        <Box className={classes.info}>
            {lista}
        </Box>
    )
}

export default Informacion
