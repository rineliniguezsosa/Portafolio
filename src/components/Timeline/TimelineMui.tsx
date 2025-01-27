import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineMuiProps } from '../../types/interfaces';

export const TimelineMui = ({position,variant,color,experience}:TimelineMuiProps) => {
  return (
    <Timeline position={position}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant={variant} color={color} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        {experience.map( data =>{
          <h3>Design and Conservation of DCIESA Properties - web developer</h3>
          <p>August 2020 - December 2020</p>
        })
        }
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
