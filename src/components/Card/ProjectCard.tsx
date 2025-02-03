import { AspectRatio, Card } from "@mui/joy"
import { projectProps } from "../../types/interfaces";

export const ProjectCard = ({id,name,description,img,url}: projectProps) => {
  return (
      <Card
        sx={{  
          border:'none',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          paddingX:2,
        }} 
        key={id}
        orientation="horizontal" 
        size="sm" 
        variant="outlined"

       >
        {
          img && (
          <AspectRatio objectFit="cover">
            <img src={img} alt="" />
          </AspectRatio>
          )
        }
  
        <div>
            <h4>{name}</h4>
            <p>{description}</p>

            <a href={url}>Know more</a>
        </div>
        
      </Card>
  )
}
