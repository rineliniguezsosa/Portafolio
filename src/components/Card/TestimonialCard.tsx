import { Card } from "@mui/joy"
import { TestimonialCardProps } from "../../types/interfaces"


export const TestimonialCard = ({id,name,description,img,position}:TestimonialCardProps) => {
  return (
    <Card 
       key={id} 
       sx={{backgroundColor:'#080808',display:'flex',flexDirection:'column'}} 
       orientation="horizontal" 
       size="sm" 
       variant="outlined"
    >
      {/* quote */}
      <div className="relative">
        <img 
          className="absolute top-0 left-0 -mt-4 ml-2 h-3 w-3" 
          src="/Portafolio/assets/images/doublequotes.png" 
          alt="quote"
          />
      </div>
      {/* fin quote */}
      
      {/* description testimonial */}
      <div className="w-full">
        <blockquote className="text-darkgray text-xs font-ibm-plex-mono">
            {description}
        </blockquote>
      </div>
      {/* fin descrioption testimonial */}

      {/* testimonial */}
      <div className="w-full flex flex-row">
         <img className="w-10 h-10 rounded-full mr-3" src={img} alt={name} />
         <div>
           <span className="text-xs font-raleway font-bold text-white">{name}</span>
           <p className="text-xs font-raleway font-bold text-white">{position}</p>
         </div>
      </div>
      {/* testimonial fin */}
    </Card>
  )
}
