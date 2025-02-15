import { IconButton } from '@mui/material'
import { IconButtonProps } from '../../types/interfaces'


export const IconButtonMui = ({children,...props}:IconButtonProps) => {
  return (
    <IconButton
        {...props}
    >
        {children}
    </IconButton>
  )
}
