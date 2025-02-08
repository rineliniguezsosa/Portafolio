import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Whatsappprops } from '../../types/interfaces'


export const FloatingWhatsapp = ({
  accountName,
  phoneNumber,
  avatar,
  statusMessage,
  chatMessage,
  notification,
  notificationSound,
  notificationDelay,
  notificationLoop,
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
      notification={notification}
      notificationSound={notificationSound}
      notificationDelay={notificationDelay}
      notificationLoop={notificationLoop}
    />
  )
}
