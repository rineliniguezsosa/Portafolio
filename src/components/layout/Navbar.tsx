import { IconButton,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header 
    className='w-full bg-dark-600 py-10 px-5 flex flex-row justify-between items-center'>

      <IconButton 
       onClick={()=> setIsDrawerOpen(!isDrawerOpen)}
       sx={{ 
        '&:focus': {
          outline: 'none',
        },
        color:'#9C9C9C'
      }}
      >
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
                width:'100%',
                height:'100%',
                backgroundColor:'#080808',
                border:'5px yellow solid',
              }
            }}
            // className="bg-dark"
          >
            <nav className='w-full h-full px-10 py-2 flex flex-col items-center'>
              <div className='w-full flex justify-between border-2 border-red-500'>
                <span className='text-white font-raleway font-bold font-xl'>Hola Bienvenido,</span>
                <CloseIcon sx={{color:'white'}} onClick={()=> setIsDrawerOpen(false)}/>
              </div>

              <div>

              </div>
            </nav>
          </Drawer>
  </header>
  )
}
