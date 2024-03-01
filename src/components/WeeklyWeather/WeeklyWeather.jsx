import React from 'react';
import { motion as m } from 'framer-motion';

const WeeklyWeather = (props) => {
    return (
            <m.div
                className='weeklyWeather'
                key={'/weeklyWeather'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            >
                <h2>Weekly Weather</h2>
                {props.forecast.map((weather, index) => (
                    <p key={index}>{weather.shortForecast}</p>
                ))}

            </m.div>
    )
}

export default WeeklyWeather
