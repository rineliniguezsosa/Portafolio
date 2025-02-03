import { AspectRatio, Card } from "@mui/joy"
import { projectProps } from "../../types/interfaces";
import { ButtonMui } from "../buttons/ButtonMui";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export const ProjectCard = ({id,name,description,img,url}: projectProps) => {
  return (
      <Card
        sx={{  
          border:'none',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          backgroundColor:'#ffffff',
          paddingX:2,
        }} 
        key={id}
        orientation="horizontal" 
        size="sm" 
        variant="outlined"

       >
        {
          img && (
          <AspectRatio objectFit="cover">
            <img src={img} alt={name} />
          </AspectRatio>
          )
        }
  
        <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-relaway text-base text-dark font-bold">{name}</h4>
            </div>

            <div>
              <p className="text-darkgray text-sm font-ibm-plex-mono">{description}</p>
            </div>

            <div>
              <ButtonMui
                  href={url}
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className='text-white'
                  variant='contained'
                  size='small'
                  sx={{ textTransform:"none",background:'#3F8E00',border:'1px #62BA1B solid',marginTop:5}}
                >
                  <span className='text-xs font-ibm-plex-mono'>Know more</span>
              </ButtonMui>
            </div>
        </div>
        
      </Card>
  )
}
