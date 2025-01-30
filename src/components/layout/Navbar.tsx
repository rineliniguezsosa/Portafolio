import { IconButton,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
// import { Link } from 'react-router';


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


      {/* <div className='px-2 py-2'>
        <div className='text-white font-ibm-plex-mono text-lg'>R</div>
      </div> */}


       <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={()=> setIsDrawerOpen(false)}
            PaperProps={{
              sx:{
                width:'100%',
                height:'100%',
                backgroundColor:'#080808',
              }
            }}
            // className="bg-dark"
          >
            <nav className='w-full h-full px-2 py-5 flex flex-col items-center'>
              <div className='w-full flex justify-between'>
                <span className='text-white font-raleway font-bold font-xl'>Hi welcome</span>
                <CloseIcon sx={{color:'white'}} onClick={()=> setIsDrawerOpen(false)}/>
              </div>

              {/* links principales */}
              <div className='w-full flex flex-col mt-5'>
              <a 
                href='#work-experience' 
                onClick={() => setIsDrawerOpen(false)} 
                className='w-full text-white text-center px-5 py-5 font-raleway font-bold font-xl'>
                Work experience
              </a>
              <a 
                href='#testimonial' 
                onClick={() => setIsDrawerOpen(false)} 
                className='w-full text-white text-center px-5 py-5 font-raleway font-bold font-xl'
              >
                Testimonial
              </a>

              </div>
            </nav>
          </Drawer>
  </header>
  )
}
