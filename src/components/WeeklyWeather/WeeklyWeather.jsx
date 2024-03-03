import React from 'react';
import { motion as m } from 'framer-motion';

import { WiStormShowers } from "react-icons/wi";

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
            {props.forecast.map((weather, index) => (
                <div
                    className='weatherItem'
                    key={index}
                >
                    <div className='weeklyTitle'>{weather.name}</div>

                    <div className='weatherItemMeat'>
                        <div className='iconTemp'>
                            <div className='dailyIcon'>
                                <WiStormShowers />
                                {/* <img src={weather.icon} /> */}

                            </div>
                            <div className='dailyTemp'>
                                <p>{weather.temperature} {weather.temperatureUnit}</p>
                            </div>
                        </div>

                        <div className='dailyData'>
                            <div>
                                <h4>Precipitation</h4>
                                <p>Rain: {weather.probabilityOfPrecipitation.value}%</p>
                            </div>
                            <div>
                                <h4>Humidity</h4>
                                <p>Humidity: {weather.relativeHumidity.value}</p>
                            </div>
                            <div>
                                <h4>Wind</h4>
                                <p>{weather.windSpeed}</p>
                                <p>{weather.windDirection}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}


        </m.div>
    )
}

export default WeeklyWeather
