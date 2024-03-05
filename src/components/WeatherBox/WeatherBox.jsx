import React from 'react';

import { WiDaySunny } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi"; 
import { WiRaindrops } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnowflakeCold } from "react-icons/wi";
import { PiWind } from "react-icons/pi";

const WeatherBox = (props) => {


    function iconRender() {
        let detailsArray = props.weather.detailedForecast;
        let replaceDots = detailsArray.replace(/[.]/g, '');
        let replaceCommas = replaceDots.replace(/[,]/g, '');
        let splitDetails = replaceCommas.split(' ');

        for (let i = 0; i < splitDetails.length; i++) {
            // thunderstorm
            if (splitDetails[i] == 'thunderstorms' || splitDetails[i] == 'Thunderstorms') {
                return < WiThunderstorm />;
            }
            // snow
            else if (splitDetails[i] == 'snow' || splitDetails[i] == 'Snow') {
                return < WiSnowflakeCold />;
            }
            // cloudy
            else if (splitDetails[i] == 'cloudy' || splitDetails[i] == 'Cloudy') {
                return < WiCloudy />;
            }
            // rain
            else if (splitDetails[i] == 'rain' || splitDetails[i] == 'Rain') {
                return < WiRaindrops />;
            }
            // windy
            // else if (splitDetails[i] == 'cloudy') {
            //     console.log(`I found sunny!`);
            //     return console.log(`it is sunny`);
            // }
            // windy
            else if (splitDetails[i] == 'sunny' || splitDetails[i] == 'Sunny' || splitDetails[i] == 'clear') {
                return < WiDaySunny />;
            }
            // sunny
            else {
                console.log('next word...');
            }
        }
    }



    return (
        <div
            className='weatherItem'
        >
            <div className='weeklyTitle'>{props.weather.name}</div>

            <div className='weatherItemMeat'>
                <div className='iconTemp'>
                    <div className='dailyIcon'>
                        {iconRender()}
                    </div>
                    <div className='dailyTemp'>
                        <p>{props.weather.temperature}</p>
                    </div>
                </div>

                <div className='dailyData'>
                    <div className='rain'>
                        <p>Rain</p>
                        <p>{props.weather.probabilityOfPrecipitation.value === null ? '0%' : `${props.weather.probabilityOfPrecipitation.value}%`}</p>
                    </div>
                    <div className='humid'>
                        <p>Humid</p>
                        <p>{props.weather.relativeHumidity.value}rh</p>
                    </div>
                    <div className='wind'>
                        <p>Wind</p>
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
