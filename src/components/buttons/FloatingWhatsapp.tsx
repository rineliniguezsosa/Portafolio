import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Whatsappprops } from '../../types/interfaces'

export const FloatingWhatsapp = ({accountName,phoneNumber,avatar,...props}:Whatsappprops) => {
  return (
    <FloatingWhatsApp
    {...props}
    accountName={accountName} 
    phoneNumber={phoneNumber} 
    avatar={avatar}
    />
  )
}
