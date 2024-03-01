import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  // boolean
  const [pageReady, setPageReady] = useState(false);


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
      const forecast = await axios.get(response.data.properties.forecast);
      // console.log (`forecast`, forecast);
      const weatherData = forecast.data.properties.periods;
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
      <header className="duck-header">
        <h1>Duck Weather</h1>
      </header>
      <br />

      {pageReady ?
        <>
          <p>{forecast[0].detailedForecast}</p>
          <p>{forecast[0].temperature} {forecast[0].temperatureUnit}</p>
          <p>{forecast[0].probabilityOfPrecipitation.value}</p>
          <p>{forecast[0].shortForecast}</p>
          <p>{forecast[0].windSpeed}</p>
          <p>{forecast[0].windDirection}</p>
          <p>Humidity: {forecast[0].relativeHumidity.value}</p>
        </>
        : <p>Loading Page</p>
      }

    </div>
  );
}

export default App;
