import { useEffect,useState } from 'react';

export const usePermissionHandler = () =>{
    const [allowpermitions, setAllnotifications] = useState(false);

    const permissionNotification = async() =>{
      if("Notification" in window){
        const permission = await Notification.requestPermission();

        if(permission === 'granted') {setAllnotifications(true)}
      }
    }
  
    useEffect(() => {
       permissionNotification()
    }, []);

    return allowpermitions
}