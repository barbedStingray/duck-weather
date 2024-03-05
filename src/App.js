import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



// components
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import Header from './components/Header/Header';
import WeatherToday from './components/WeatherToday/WeatherToday';
import Discover from './components/Discover/Discover';


function App() {

  const navigate = useNavigate();
  const location = useLocation();

  // boolean
  const [pageReady, setPageReady] = useState(false);
  const [dayWeekView, setDayWeekView] = useState(false);

  // weather forecast
  // const [forecast, setForecast] = useState([]);
  const [rightNow, setRightNow] = useState([]);
  const [dayArray, setDayArray] = useState([]);
  const [nightArray, setNightArray] = useState([]);

  // background
  const [background, setBackground] = useState('');


  // get weather
  async function getWeather(latitude, longitude) {
    try {
      // WEATHER API REQUEST
      // console.log(`coordinates`, latitude, longitude);
      // const response = await axios.get('https://api.weather.gov/gridpoints/MPX/108,72/forecast');
      const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
      // console.log('weather response,', response.data.properties.forecast);
      const weatherAPI = await axios.get(response.data.properties.forecast);
      const weatherData = weatherAPI.data.properties.periods;
      console.log(`weather data`, weatherData);

      // set entire forecast
      // setForecast(weatherData);

      // DAY WEATHER set today's weather
      setRightNow(weatherData[0]);
      // console.log('RIGHT NOW', weatherData[0]);

      // WEEKLY WEATHER set daytime-nighttime
      const dayTime = [];
      const nightTime = [];
      weatherData.forEach((weather) => {
        if (weather.isDaytime === true) {
          dayTime.push(weather);
        }
        else {
          nightTime.push(weather);
        }
      });
      setDayArray(dayTime);
      setNightArray(nightTime);

      // set background
      setBackground(backgroundRender(weatherData));

    } catch (error) {
      console.error('error', error);
      alert(`whoops! try again later...`);
    } finally {
      setPageReady(true);
      navigate('/');
      // console.log(`page ready`, pageReady);
    }
  }

  // get location
  function getLocation() {
    // console.log('in getLocation');
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords);
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    }, (error) => {
      console.log('error', error);
    })
  }

  useEffect(() => {
    getLocation();
  }, []);


  // render weather backgrounds
  function backgroundRender(weather) {
    let weatherObject = weather[0];
    let detailsArray = weatherObject.detailedForecast;
    let replaceDots = detailsArray.replace(/[.]/g, '');
    let replaceCommas = replaceDots.replace(/[,]/g, '');
    let splitDetails = replaceCommas.split(' ');

    for (let i = 0; i < splitDetails.length; i++) {
      // thunderstorm
      if (splitDetails[i] == 'thunderstorms' || splitDetails[i] == 'Thunderstorms') {
        return 'duckWeatherStorm';
      }
      // snow
      else if (splitDetails[i] == 'snow' || splitDetails[i] == 'Snow') {
        return 'duckWeatherSnow';
      }
      // cloudy
      else if (splitDetails[i] == 'cloudy' || splitDetails[i] == 'Cloudy') {
        return 'duckWeatherCloud';
      }
      // rain
      else if (splitDetails[i] == 'rain' || splitDetails[i] == 'Rain') {
        return 'duckWeatherRain';
      }
      else if (splitDetails[i] == 'sunny' || splitDetails[i] == 'Sunny' || splitDetails[i] == 'clear') {
        return 'duckWeatherSunny';
      }
      // sunny
      else {
        console.log('next word...');
      }
    }
  }




  return (
    <div className='duckWeather'>
      <div className={background}>

        <Header dayWeekView={dayWeekView} setDayWeekView={setDayWeekView} />

        <AnimatePresence
          mode='wait'
        // initial={false}
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/'
              element={
                <WeatherToday
                  // forecast={forecast}
                  rightNow={rightNow}
                  pageReady={pageReady}
                />
              }
            />
            <Route path='/weeklyWeather'
              element={
                <WeeklyWeather
                  dayArray={dayArray}
                  nightArray={nightArray}
                />
              }
            />
            <Route path='/locate'
              element={
                <Discover
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
