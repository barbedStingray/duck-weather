import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import Header from './components/Header/Header';
import WeatherToday from './components/WeatherToday/WeatherToday';


function App() {

  // boolean
  const [pageReady, setPageReady] = useState(false);
  const [dayWeekView, setDayWeekView] = useState(false);


  // weather forecast
  const [forecast, setForecast] = useState([]);
  // const [weatherNow, setWeatherNow] = useState();

  async function getWeather(latitude, longitude) {

    try {
      // console.log(`lat & long`, latitude, longitude);
      console.log(`coordinates`, latitude, longitude);
      // const response = await axios.get('https://api.weather.gov/gridpoints/MPX/108,72/forecast');
      // const response = await axios.get(`https://api.weather.gov/points/28.5384,-81.3789`); // Orlando
      const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
      // console.log('weather response,', response.data);
      // console.log('weather response,', response.data.properties.forecast);
      const weatherAPI = await axios.get(response.data.properties.forecast);
      // console.log (`forecast`, forecast);
      const weatherData = weatherAPI.data.properties.periods;
      console.log(`weatherData`, weatherData);
      setForecast(weatherData);
      // setWeatherNow(weatherData[0]);

    } catch (error) {
      console.error('error', error);
      alert(`whoops! try again later...`);
    } finally {
      setPageReady(true);
      console.log(`page ready`, pageReady);
    }

  }

  // get location
  function getLocation() {
    console.log('in getLocation');
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
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
  // useEffect (() => {
  //   getWeather();
  // }, [latitude, longitude]);



  return (
    <div className="duckWeather">

      <Header dayWeekView={dayWeekView} setDayWeekView={setDayWeekView}/>

      <Routes>
        <Route path='/' element={<WeatherToday forecast={forecast} pageReady={pageReady}/>}/>
        <Route path='/weeklyWeather' element={<WeeklyWeather forecast={forecast}/>}/>
      </Routes>

    </div>
  );
}

export default App;
