import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

import Button from '../Button/Button';

const Header = (props) => {

  const navigate = useNavigate();

  // change the day/week view
  function dayToWeek() {
    console.log(`day to week`, props.dayWeekView);
    props.setDayWeekView(!props.dayWeekView);
    navigate('/weeklyWeather');
  }
  function weekToDay() {
    console.log(`week to day`, props.dayWeekView);
    props.setDayWeekView(!props.dayWeekView);
    navigate('/');
  }

  return (
    <header className="duck-header">
      <h1>Duck Weather</h1>

      <Link to="/">Daily Forecast</Link>
      <Link to="/weeklyWeather">Weekly Forecast</Link>

      {props.dayWeekView ?
        <Button
          name={'Day View'}
          click={weekToDay}
        />
        :
        <Button
          name={'Week View'}
          click={dayToWeek}
        />
      }
      
    </header>
  )
}

export default Header;
