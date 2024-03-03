import React from 'react';
import { motion as m } from 'framer-motion';

import WeatherBox from '../WeatherBox/WeatherBox';


const WeatherToday = (props) => {


  return (
    <div className='weatherToday'>

      {props.pageReady ?
        <m.div
          className='dailyReport'
          key={'/'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='adjustDailyWeather'>
            <WeatherBox
              weather={props.rightNow}
              index={0}
            />
          </div>

          <div className='duckDiv'></div>

        </m.div>
        : <p>Loading Page</p>
      }
    </div>
  )
}

export default WeatherToday;
