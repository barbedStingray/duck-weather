import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

import { WiStormShowers } from "react-icons/wi";
import WeekOutline from './WeekOutline';

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
                    <WeekOutline weather={weather} index={index}/>
                ))}
                </div>
                <div className='timeline'>
                {props.nightArray.map((weather, index) => (
                    <WeekOutline weather={weather} index={index}/>
                ))}
                </div>
            </div>


        </m.div>
    )
}

export default WeeklyWeather
