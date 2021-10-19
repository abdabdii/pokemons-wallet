import React , {useEffect, useState} from 'react'
import { BorderLinearProgress } from '../materialCustom/BorderLinearProgress'
import Tooltip from '@mui/material/Tooltip';

export const Stats = ({color , value,stat}) => {
    //Normalise the progressbar
    const MIN = 0
    const MAX = 255
    const normalisedValue = Math.floor(((value - MIN) * 100) / (MAX - MIN));


    const [progress, setProgress] = useState(0);
    //Make animation for progress bar
    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress >= normalisedValue) {
               return normalisedValue;
            }
            const diff =normalisedValue/5;
            return Math.min(oldProgress + diff, normalisedValue);
          });
        }, 60);
    
        return () => {
          clearInterval(timer);
        };
        // eslint-disable-next-line
      }, []);



    return (
        <div>
        <h5 style={{margin:'5px 0px',fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}}>{stat}</h5>
        <Tooltip title={`${stat} : ${value}`} followCursor={true} arrow>
            <BorderLinearProgress value={progress} currentcolor={color} variant="determinate" />
        </Tooltip>
        </div>
    )
}
