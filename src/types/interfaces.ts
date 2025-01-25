import React from 'react';

export interface ButtonMuiProps {
    component:string,
    location:string,
    color:'blue'|'green'
    variant:'outlined',
    size:number,
    width:number,
    title:string,
    icon:React.ReactNode
}