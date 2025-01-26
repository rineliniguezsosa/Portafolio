// import { Link } from 'react-router'
import './App.css'
import { ButtonMui } from './components/buttons/ButtonMui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <main className='w-full bg-green border-2 border-green-500'>
        <section className='w-full border-2 border-red-500'>
          {/* <header 
            className='w-full p-10 border-2 border-blue-500 bg-dark-600'>
              <nav>
                <Link to="#">Home</Link>
              </nav>
          </header> */}
          <Navbar/>
          <div className='w-full px-5 py-10 border-2 border-yellow-500'>
            <div>
                <img className='rounded-lg' src="../src/assets/images/rinelfoto.jpg" alt="rinel" />
            </div>
            <div>
              <h1>Rinel iñiguez sosa</h1>
              <p>mi description</p>
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
          </div>
        </section>
    </main>
  )
}

export default App
