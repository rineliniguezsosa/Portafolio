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
      height:300,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
    {Testimonials.map(({name,description,position}) => (
      <TestimonialCard name={name} description={description} position={position}/>
    ))}
  </Box>
  )
}
