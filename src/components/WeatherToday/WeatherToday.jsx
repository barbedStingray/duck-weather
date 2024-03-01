import React from 'react';
import { motion as m } from 'framer-motion';


const WeatherToday = (props) => {


  return (
    <div className='weatherToday'>
      {props.pageReady ?
          <m.div
            key={'/'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <p>{props.forecast[0].detailedForecast}</p>
            <p>{props.forecast[0].temperature} {props.forecast[0].temperatureUnit}</p>
            <p>{props.forecast[0].probabilityOfPrecipitation.value}</p>
            <p>{props.forecast[0].shortForecast}</p>
            <p>{props.forecast[0].windSpeed}</p>
            <p>{props.forecast[0].windDirection}</p>
            <p>Humidity: {props.forecast[0].relativeHumidity.value}</p>
          </m.div>
        : <p>Loading Page</p>
      }

    </div>
  )
}

export default WeatherToday;
