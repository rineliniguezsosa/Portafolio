import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { AwardLinkProps } from '../../types/interfaces';

export const AwardLink = ({location,title}:AwardLinkProps) => {
  return (
    <div className='flex flex-row items-center'>
        <div>
            <EmojiEventsIcon className='text-yellow'/>
        </div>
        <div className='space-y-10 text-left'>
            <a
                className='text-white pl-2 font-ibm-plex-mono font-bold text-sm'
                target='_blank'
                href={location}>
                {title}
                </a>
        </div>
    </div>
  )
}
