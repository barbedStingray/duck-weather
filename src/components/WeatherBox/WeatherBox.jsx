import React from 'react';
import { WiStormShowers } from "react-icons/wi";
import { IoPartlySunnyOutline } from "react-icons/io5";



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
                {/* <WiStormShowers /> */}
                <IoPartlySunnyOutline />
                {/* <img src={weather.icon} /> */}

            </div>
            <div className='dailyTemp'>
                <p>{props.weather.temperature}</p>
            </div>
        </div>

        <div className='dailyData'>
            <div className='rain'>
                {/* <h4>Precipitation</h4> */}
                <p>Rain</p>
                <p>{props.weather.probabilityOfPrecipitation.value === null ? '0%' : `${props.weather.probabilityOfPrecipitation.value}%`}</p>
            </div>
            <div className='humid'>
                <p>Humid</p>
                <p>{props.weather.relativeHumidity.value}rh</p>
            </div>
            <div className='wind'>
                <p>Wind</p>
                {/* <p>{props.weather.windSpeed}</p> */}
                <p>{props.weather.windDirection}</p>
            </div>
            <div className='speed'>
                <p>{props.weather.windSpeed}</p>
            </div>
        </div>
    </div>


</div>
)
}

export default WeatherBox;
