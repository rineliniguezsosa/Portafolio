// import React from 'react';
import { ButtonProps } from "@mui/material";

export interface ButtonMuiProps extends ButtonProps {
   href:string,
   className?:string
}

export interface workhistoryprops {
   company:string,
   role:string,
   duration:{
      start:string,
      end:string
   }
   type:string
}
export interface TimelineMuiProps {
   position:'alternate-reverse'|'alternate'| 'left' | 'right',
   variant:'filled'|'outlined',
   color?:'error'|'grey'|'info'|'inherit'|'primary'|'secondary'|'success'|'warning'| string,
   experience: workhistoryprops[]
}