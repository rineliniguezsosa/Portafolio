import Box from '@mui/joy/Box';
import { CarrouselMuiProps } from '../../types/interfaces';


export const CarrouselMui = ({children}:CarrouselMuiProps) => {
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
    {children}
  </Box>
  )
}
