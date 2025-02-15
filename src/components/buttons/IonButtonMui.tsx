import { IconButton } from '@mui/material'
import { IconButtonProps } from '../../types/interfaces'


export const IonButtonMui = ({children,...props}:IconButtonProps) => {
  return (
    <IconButton
        {...props}
    >
        {children}
    </IconButton>
  )
}
