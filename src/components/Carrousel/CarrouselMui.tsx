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
      width: '100%',
      scrollSnapType: 'x mandatory',
      '& > *': {
        flex: '0 0 auto',
        width: 'calc(100% - 16px)',
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
    {Testimonials.map(({id,name,description,img,position}) => (
      <TestimonialCard
       key={id}
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
