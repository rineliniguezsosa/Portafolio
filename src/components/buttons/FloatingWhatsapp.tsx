import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Whatsappprops } from '../../types/interfaces'

export const FloatingWhatsapp = ({phoneNumber}:Whatsappprops) => {
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
    />
  )
}
