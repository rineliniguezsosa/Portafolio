import { Button } from "@mui/material";
import { ButtonMuiProps } from "../../types/interfaces";


export const ButtonMui = ({color,variant,size,width,title}:ButtonMuiProps) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      width={width}
    >
      {title}
    </Button>
  )
}
