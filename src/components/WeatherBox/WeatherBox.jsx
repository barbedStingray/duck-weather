import React from 'react';
import { WiStormShowers } from "react-icons/wi";


const WeatherBox = (props) => {

// todo run function to determine icon here? 

  return (
    <div
    className='weatherItem'
    key={props.index}
>
    <div className='weeklyTitle'>{props.weather.name}</div>

    <div className='weatherItemMeat'>
        <div className='iconTemp'>
            <div className='dailyIcon'>
                <WiStormShowers />
                {/* <img src={weather.icon} /> */}

            </div>
            <div className='dailyTemp'>
                <p>{props.weather.temperature}</p>
            </div>
        </div>

        <div className='dailyData'>
            <div>
                {/* <h4>Precipitation</h4> */}
                <p>Rain:</p>
                <p>{props.weather.probabilityOfPrecipitation.value}%</p>
            </div>
            <div>
                {/* <h4>Humidity</h4> */}
                <p>Humidity: {props.weather.relativeHumidity.value}</p>
            </div>
            <div>
                <h4>Wind</h4>
                <p>{props.weather.windSpeed}</p>
                <p>{props.weather.windDirection}</p>
            </div>
        </div>
    </div>


</div>
)
}

export default WeatherBox;
