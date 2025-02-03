import { ButtonMui } from './components/buttons/ButtonMui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navbar } from './components/layout/Navbar';
import { TimelineMui,CarrouselMui, TestimonialCard,ProjectCard } from './components';
import { Testimonials, Workhistory,frontendmentorprojects,reactnativeprojects } from './helpers';


function App() {
  return (
    <main className='w-full'>
        <section id='aboutme' className='w-full'>
          <Navbar/>
          {/* inicio div */}
          <div
          className='w-full flex flex-col gap-5 bg-dark items-center py-20 px-1'
          >

            {/* imagen */}
            <div
              className='w-[90%] h-[400px] flex items-center justify-center bg-cover bg-center
             bg-patternmobile bg-no-repeat'>
                <img
                  className='w-3/5 rounded-xl'
                  src="/Portafolio/assets/images/rinelfoto.jpg"
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
                variant='contained'
                size='large'
                sx={{ textTransform:"none",background:'#3F8E00',border:'1px #62BA1B solid',marginTop:5}}
              >
                <span className='text-xs font-ibm-plex-mono'>let's get started</span>
              </ButtonMui>
            </div>
            {/* fin información personal */}
          </div>
          {/* fin div */}
        </section>

        {/* work experience */}
        <section id='work-experience' className='w-full'>
            <div className='w-full py-20 flex flex-col gap-5 items-center'>
              <div className='w-3/4'>
                <h2 className='text-2xl font-raleway font-bold text-dark'>Work experience</h2>
              </div>
              <div className='w-full flex justify-center items-center'>
              <TimelineMui position='alternate' variant='outlined' experience={ Workhistory }/>
              </div>
            </div>
        </section>
        {/* fin work experience */}

        {/* testimonios */}
        <section id='testimonial' className='w-full'>
            <div className='w-full py-20 flex bg-dark flex-col gap-5 items-center px-1'>
              <div className='w-3/4'>
                <h2 className='text-2xl font-raleway font-bold text-white'>Testimonials</h2>
                <br />
                <p className='text-darkgray text-sm font-ibm-plex-mono'>The testimonies I share here come from close friends from the university and coworkers with whom I have had the pleasure of collaborating over the years.</p>
              </div>

              {/* friends */}
              <div className='w-3/4'>
                <CarrouselMui>
                  {Testimonials.map(({id,name,description,img,position})=> (
                    <TestimonialCard
                      key={id}
                      id={id}
                      name={name}
                      description={description}
                      img={img}
                      position={position}
                    />
                  ))}
                </CarrouselMui>
              </div>
              {/* fin friends */}
            </div>
        </section>
        {/* testimonios */}

        <section id='projects' className='w-full bg-white'>
            <div className='w-full py-20 flex flex-col gap-5 items-center px-1'>

                <div className='w-3/4 flex justify-between'>
                  <div>
                    <h2 className='text-2xl font-raleway font-bold text-dark'>Projects</h2>
                  </div>

                  <div className='text-center text-darkgray text-sm font-ibm-plex-mono'>
                      <span>Total</span>
                      <p>41</p>
                  </div>
                </div>
             
                <div className='w-3/4'>
                  <p className='text-darkgray text-sm font-ibm-plex-mono'>
                    Explore my projects and discover what I can build. 🚀
                  </p>
                  <br />


                  <CarrouselMui title='React native'>
                      {
                        reactnativeprojects.map(({id,name,description,img,url})=>(
                          <ProjectCard
                          key={id}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='Front-end mentor'>
                      {
                        frontendmentorprojects.map(({id,name,description,img,url})=>(
                          <ProjectCard
                          key={id}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <p className='text-darkgray text-sm font-ibm-plex-mono'>building this section 🛠️</p>
                </div>

                {/* projects */}
            </div>

        </section>
    </main>
  )
}

export default App
