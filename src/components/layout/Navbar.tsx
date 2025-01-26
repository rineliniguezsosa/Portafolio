import { IconButton,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header 
    className='w-full py-10 px-5 border-2 border-blue-500 bg-dark-600 flex flex-row justify-between items-center'>

      <IconButton onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
              <MenuIcon></MenuIcon>
      </IconButton>


      <div>
        <div>R</div>
      </div>


       <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={()=> setIsDrawerOpen(false)}
            PaperProps={{
              sx:{
                width:'70%'
              }
            }}
          >
            <nav>
              <span>Hola</span>
            </nav>
          </Drawer>
  </header>
  )
}
