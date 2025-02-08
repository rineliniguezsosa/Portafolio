import { ButtonMui } from './components/buttons/ButtonMui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navbar } from './components/layout/Navbar';
import { TimelineMui,CarrouselMui, TestimonialCard,ProjectCard, FloatingWhatsapp } from './components';
import { 
  Testimonials, 
  Workhistory,
  frontendmentorprojects,
  reactnativeprojects,
  reactprojects,
  typescriptprojects,
  backendprojects,
  Mernprojects,
  jsprojects
} from './helpers';
import { AwardLink } from './components/shared/AwardLink';
import { usePermissionHandler } from './hooks';


function App() {

  const { allowpermitions } = usePermissionHandler();
  
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
                href="#projects"
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
                        reactnativeprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`reactnative-${id}-${index}`}
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
                        frontendmentorprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`frontendmentor-${id}-${index}`}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='Reactjs'>
                      {
                        reactprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`reactjs-${id}-${index}`}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='Typescript'>
                      {
                        typescriptprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`typescript-${id}-${index}`}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='Backend'>
                      {
                        backendprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`Backend-${id}-${index}`}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='Mern'>
                      {
                        Mernprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`mern-${id}-${index}`}
                          id={id}
                          name={name}
                          description={description}
                          img={img}
                          url={url}
                          />
                        ))
                      }
                  </CarrouselMui>

                  <CarrouselMui title='javascript'>
                      {
                        jsprojects.map(({id,name,description,img,url}, index)=>(
                          <ProjectCard
                          key={`js-${id}-${index}`}
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

        <section id='certificates' className='w-full bg-dark'>
          <div className='w-full py-20 flex flex-col gap-5 items-center'>
              <div className='w-3/4'>
                <h2 className='text-2xl font-raleway font-bold text-white'>Certificates</h2>
              </div> 
              <div className='w-3/4'>
                  <AwardLink
                    location='https://tutorial-sql.s3.amazonaws.com/certificates/41727_Rinel_I%C3%B1iguez/41727_01122024.png'
                    title='interactive sql'
                  />
                  <AwardLink
                    location='https://www.udemy.com/certificate/UC-df70df56-8b23-4e11-be94-f0a2eb64321b/'
                    title='TypeScript: Your complete guide and handbook.'
                  />
                  <AwardLink
                    location='https://www.udemy.com/certificate/UC-50f8746a-eec8-44b8-9cda-2c29b6edf6b5/'
                    title='Web development. JavaScript from scratch. 2018-2019 Edition'
                  />
                  <AwardLink
                    location='https://www.udemy.com/certificate/UC-32522d56-5eed-4451-9b68-61bff10b8535/'
                    title='Git Fundamentals in Cloud'
                  />
                  <AwardLink
                    location='https://www.sololearn.com/Certificate/CT-8CBMYR70/jpg'
                    title='Javascript'
                  />
              </div> 
          </div>
        </section>

        <footer className="bg-dark-600 py-10 px-5 text-center">
          <p className='text-darkgray text-xs font-ibm-plex-mono'>Made by: Rinel Iñiguez. ⚛️💻🖤</p>
          <p className='text-darkgray text-xs font-ibm-plex-mono'>Mail contact: rineliniguezsosa@gmail.com</p>
          <p className='text-darkgray text-xs font-ibm-plex-mono'>Phone number: +52 9999-08-63-84</p>
        </footer>

        <FloatingWhatsapp
          accountName="Rinel"
          phoneNumber="+529999086384"
          avatar='/Portafolio/assets/images/rinelfoto.jpg'
          statusMessage='For a more rapid and effective response, please send me a message with clear details.'
          chatMessage="Hello! 😊 How can I help? Write to me, and I'll reply soon."
          notification={allowpermitions}
          notificationSound={allowpermitions}
          notificationDelay={60}
          notificationLoop={2}
        />
    </main>
  )
}

export default App
