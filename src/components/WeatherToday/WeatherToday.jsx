import React from 'react'

const WeatherToday = (props) => {
  return (
    <div className='weatherToday'>
            {props.pageReady ?
        <>
          <p>{props.forecast[0].detailedForecast}</p>
          <p>{props.forecast[0].temperature} {props.forecast[0].temperatureUnit}</p>
          <p>{props.forecast[0].probabilityOfPrecipitation.value}</p>
          <p>{props.forecast[0].shortForecast}</p>
          <p>{props.forecast[0].windSpeed}</p>
          <p>{props.forecast[0].windDirection}</p>
          <p>Humidity: {props.forecast[0].relativeHumidity.value}</p>
        </>
        : <p>Loading Page</p>
      }

    </div>
  )
}

export default WeatherToday;
