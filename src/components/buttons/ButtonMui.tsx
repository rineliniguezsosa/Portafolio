import { Button } from "@mui/material";
import { ButtonMuiProps } from "../../types/interfaces";


export const ButtonMui = (
  {component,
  location,
  color,
  variant,
  size,
  width,
  title
  icon}:ButtonMuiProps
) => {
  return (
    <Button
      component={component}
      href={location}
      color={color}
      variant={variant}
      size={size}
      width={width}
      endIcon={icon}
    >
      {title}
    </Button>
  )
}
