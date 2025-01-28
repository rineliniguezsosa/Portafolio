import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineMuiProps } from '../../types/interfaces';

export const TimelineMui = ({position,variant,experience}:TimelineMuiProps) => {
  return (
    <Timeline position={position}>
      {experience.map(data => (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant={variant} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h3 className='text-sm font-ibm-plex-mono'>{data.company} - {data.role}({data.type})</h3>
        <p className='text-sm font-ibm-plex-mono'>{data.duration.start} - {data.duration.end}</p>
        </TimelineContent>
      </TimelineItem>
      ))
        }
    </Timeline>
  )
}
