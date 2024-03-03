import React from 'react';
import { motion as m } from 'framer-motion';

import { WiStormShowers } from "react-icons/wi";



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
          <div className='iconTemp'>
            <div className='dailyIcon'>
              <WiStormShowers />
            </div>
            <div className='dailyTemp'>
              <p>{props.forecast[0].temperature} {props.forecast[0].temperatureUnit}</p>
            </div>
          </div>
          <div className='dailyData'>
            <div>
              <h4>Precipitation</h4>
              <p>{props.forecast[0].probabilityOfPrecipitation.value}%</p>
            </div>
            <div>
              <h4>Humidity</h4>
              <p>{props.forecast[0].relativeHumidity.value}</p>
            </div>
            <div>
              <h4>Wind</h4>
              <p>{props.forecast[0].windSpeed}</p>
              <p>{props.forecast[0].windDirection}</p>
            </div>
          </div>

          <div className='duckDiv'></div>
          {/* <div className='plantDiv'></div> */}


        </m.div>
        : <p>Loading Page</p>
      }


      {/* <div className='dailyForecast'>
            <h4>Today's Forecast</h4>
            <p>{props.forecast[0].shortForecast}</p>
            <p>{props.forecast[0].detailedForecast}</p>
            <img src={props.forecast[0].icon} />
          </div> */}

    </div>
  )
}

export default WeatherToday;
