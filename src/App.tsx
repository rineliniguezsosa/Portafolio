import { ButtonMui } from './components/buttons/ButtonMui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <main className='w-full border-2 border-green-500'>
        <section className='w-full border-2 border-red-500'>
          {/* <header 
            className='w-full p-10 border-2 border-blue-500 bg-dark-600'>
              <nav>
                <Link to="#">Home</Link>
              </nav>
          </header> */}
          <Navbar/>
          <div 
          className='w-full flex flex-col gap-5 bg-dark items-center py-20 border-2 border-yellow-500'
          >

            {/* imagen */}
            <div className='w-3/5'>
                <img 
                  className='rounded-xl' 
                  src="../src/assets/images/rinelfoto.jpg" 
                  alt="rinel" 
                />
            </div>
            {/* fin imagen */}

            {/* información personal */}
            <div className='w-3/5 text-left border-2 border-red-500'>
              <h1 className='text-2xl font-raleway font-bold text-white'>Rinel iñiguez sosa</h1>
              <p className='text-lg'>mi description</p>
              <ButtonMui
                href="#"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className='text-white'
                color='primary'
                variant='contained'
                size='large'
                sx={{ textTransform: "none" }}
              >
                <span className='text-xs'>¡Empecemos!</span>
              </ButtonMui>
            </div>
            {/* fin información personal */}
            <div>
              
            </div>
          </div>
        </section>
    </main>
  )
}

export default App
