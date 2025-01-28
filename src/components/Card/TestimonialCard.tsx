import { Card } from "@mui/joy"
import { TestimonialCardProps } from "../../types/interfaces"


export const TestimonialCard = ({id,name,description,position}:TestimonialCardProps) => {
  return (
    <Card key={id} className="flex flex-col bg-dark" orientation="horizontal" size="lg" variant="outlined">
      <div className="w-full border-2 border-red-500">
        <blockquote>
            {description}
        </blockquote>
      </div>
      <div>
         {name}{position}
      </div>
    </Card>
  )
}
