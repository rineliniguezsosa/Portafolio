/* eslint-disable @typescript-eslint/no-empty-object-type */
// import React from 'react';
import { ButtonProps } from "@mui/material";

export interface ButtonMuiProps extends ButtonProps {
   href:string,
   className?:string
}

export interface workhistoryprops {
   id:number,
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

export interface TestimonialCardProps {
   id:number,
   name:string,
   description:string,
   img?:string,
   position:string
}

export interface NavLinkProps {
   onClick:()=> void,
   location:string,
   title:string
}

export interface CarrouselMuiProps {
   title?:string,
   children:React.ReactNode
}

export interface projectProps extends Omit<TestimonialCardProps,"position"> {
  url:string
}

export interface AwardLinkProps extends Omit<NavLinkProps,"onClick">{}

export interface Whatsappprops {
   accountName:string,
   phoneNumber:string,
   avatar:string,
   statusMessage:string,
   chatMessage:string,
   notification:boolean,
   notificationSound:boolean,
   notificationDelay:number
   notificationLoop:number,
}
export interface IconButtonProps {
   children:React.ReactNode,
   onClick:(direction:'left' | 'right') => void
}