import { IconButton } from '@mui/material'
import { IconButtonProps } from '../../types/interfaces'


export const IconButtonMui = ({children,onClick,...props}:IconButtonProps) => {
  return (
    <IconButton
        size='small'
        onClick={() => onClick('left')}
        {...props}
        sx={{
          display:{md:'block',xs:'none'}
        }}
    >
        {children}
    </IconButton>
  )
}
