import Box from '@mui/joy/Box';
import { Testimonials } from '../../helpers';
import { TestimonialCard } from '../Card/TestimonialCard';


export const CarrouselMui = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 343,
      // height:'auto',
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
    {Testimonials.map(({id,name,description,img,position}) => (
      <TestimonialCard
       id={id}
       name={name} 
       description={description} 
       img={img}
       position={position}
       />
    ))}
  </Box>
  )
}
