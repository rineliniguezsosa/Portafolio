import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Whatsappprops } from '../../types/interfaces'

export const FloatingWhatsapp = ({
  accountName,
  phoneNumber,
  avatar,
  statusMessage,
  chatMessage,
  ...props}:Whatsappprops
) => {
  return (
    <FloatingWhatsApp
      {...props}
      accountName={accountName} 
      phoneNumber={phoneNumber} 
      avatar={avatar}
      statusMessage={statusMessage}
      chatMessage={chatMessage}
    />
  )
}
