import { Card } from "@mui/joy"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { projectProps } from "../../types/interfaces";

export const ProjectCard = ({id,name,description,img,url}: projectProps) => {
  return (
      <Card
        key={id}
        sx={{border:'none'}}
        orientation="horizontal" 
        size="sm" 
        variant="outlined"
       >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={url} size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
  )
}
