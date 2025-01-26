import { ButtonMui } from './components/buttons/ButtonMui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <main className='w-full border-2'>
        <section className='w-full border-2 border-blue-500'>
          <Navbar/>
          <div 
          className='w-full flex flex-col gap-5 bg-dark items-center py-20 '
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
            <div className='w-3/4 text-left'>
              <h1 className='text-2xl font-raleway font-bold text-white'>Rinel iñiguez sosa</h1>
              <p className='text-darkgray font-ibm-plex-mono text-sm'>
              I am a Full Stack Developer from Mérida, Yucatán, Mexico, specialized in JavaScript
               technologies. My work has allowed me to grow professionally and explore places like Mexico City and Culiacán. 
               Committed to delivering quality results, I value responsibility, dedication, and continuous improvement.
              </p>
              <br />
              <p className='text-darkgray font-ibm-plex-mono text-sm'>
              "Always looking to improve and deliver continuous results, contact me or discover my projects"
              </p>
              <ButtonMui
                href="#"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className='text-white'
                // color='primary'
                variant='contained'
                size='large'
                sx={{ textTransform:"none",background:'#3F8E00',border:'1px #62BA1B solid',marginTop:5, width:'50%'}}
              >
                <span className='text-xs font-ibm-plex-mono'>let's get started</span>
              </ButtonMui>
            </div>
            {/* fin información personal */}
            <div className='w-full border-2 border-orange-500'>
              
            </div>
          </div>
        </section>
    </main>
  )
}

export default App
