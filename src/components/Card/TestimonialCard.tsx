import { Card } from "@mui/joy"
import { TestimonialCardProps } from "../../types/interfaces"


export const TestimonialCard = ({id,name,description,img,position}:TestimonialCardProps) => {
  return (
    <Card 
       key={id} 
       sx={{backgroundColor:'#080808',display:'flex',flexDirection:'column'}} 
       orientation="horizontal" 
       size="lg" 
       variant="outlined"
    >
      <div className="w-full border-2 border-red-500">
        <blockquote className="text-darkgray text-sm font-ibm-plex-mono">
            {description}
        </blockquote>
      </div>
      <div className="w-1/2">
         <img className="w-10 h-10 rounded-full mr-3" src={img} alt={name} />
         <span className="text-lg font-raleway font-bold text-white">{name}{position}</span>
      </div>
    </Card>
  )
}
