import React from 'react'

const WeeklyWeather = (props) => {
    return (
        <div className='weeklyWeather'>
            <h2>Weekly Weather</h2>
            {props.forecast.map((weather, index) => (
                <p key={index}>{weather.shortForecast}</p>
            ))}

        </div>
    )
}

export default WeeklyWeather
