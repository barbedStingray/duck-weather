import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

import WeatherBox from '../WeatherBox/WeatherBox';

const WeeklyWeather = (props) => {


    return (
        <m.div
            className='weeklyWeather'
            key={'/weeklyWeather'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >

            <div className='scrollContainer'>
                <div className='timeline'>
                {props.dayArray.map((weather, index) => (
                    <WeatherBox weather={weather} index={index} key={index}/>
                ))}
                </div>
                <div className='timeline'>
                {props.nightArray.map((weather, index) => (
                    <WeatherBox weather={weather} index={index} key={index}/>
                ))}
                </div>
            </div>
        </m.div>
    )
}

export default WeeklyWeather
