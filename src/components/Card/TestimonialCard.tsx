import { Card } from "@mui/joy"
import { TestimonialCardProps } from "../../types/interfaces"


export const TestimonialCard = ({name,description,position}:TestimonialCardProps) => {
  return (
    <Card orientation="horizontal" size="lg" variant="outlined">
      <div>
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
