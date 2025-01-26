import { Button } from "@mui/material";
import { ButtonMuiProps } from "../../types/interfaces";

export const ButtonMui = ({
  href,
  children,
  endIcon,
  className,
  ...props
}: ButtonMuiProps) => {
  return (
    <Button
      LinkComponent={"a"}
      href={href}
      endIcon={endIcon}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};
