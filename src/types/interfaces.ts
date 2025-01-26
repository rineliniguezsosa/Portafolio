import React from 'react';
import { ButtonProps } from "@mui/material";

export interface ButtonMuiProps extends ButtonProps {
   href:string,
   className?:string
}