import Box from '@mui/joy/Box';
import { CarrouselMuiProps } from '../../types/interfaces';
import { useRef } from 'react';
import { IconButtonMui } from '../buttons';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const CarrouselMui = ({title,children}:CarrouselMuiProps) => {
  const scrollcontainer = useRef<HTMLDivElement>(null)

  const scroll = (direction:'left' | 'right') =>{
    if(scrollcontainer.current){
      const scrollAmount = 300;
      scrollcontainer.current.scrollBy({
        left:direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      console.log(direction);
    }
  }
 
  return (
    <>
      <div>
        <h4 className='text-darkgray text-sm font-ibm-plex-mono'>{title}</h4>
      </div>
       <div className='flex flex-row items-center'>
         <IconButtonMui onClick={() => scroll('left')}>
            <KeyboardArrowLeftIcon  sx={{color:'#9C9C9C'}}/>
         </IconButtonMui>
          <Box
          ref={scrollcontainer}
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
          {children}
          </Box>
          <IconButtonMui onClick={() => scroll('right')}>
            <KeyboardArrowRightIcon sx={{color:'#9C9C9C'}}/>
         </IconButtonMui>
       </div>
    </>
  )
}
