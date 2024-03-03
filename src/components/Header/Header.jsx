import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DropDownItem from './DropDownItem';

import { GiPlasticDuck } from "react-icons/gi";
import { GiDuckPalm } from "react-icons/gi";
import { GiDuck } from "react-icons/gi";
import { LiaCompassSolid } from "react-icons/lia";



const Header = (props) => {

  // // menu items
  const menuItems = [
    { title: 'Day', text: '/', icon: <GiDuckPalm /> },
    { title: 'Week', text: '/weeklyWeather', icon: <GiDuckPalm /> },
    { title: 'Locate', text: '/locate', icon: <LiaCompassSolid /> },
  ];

  return (
    <header className="duck-header">

      <h1>Duck Weather</h1>

      <div className='menuItems'>
        <DropDownItem title={'Day'} text={'/'} icon={<GiDuckPalm />} />
        <DropDownItem title={'Week'} text={'/weeklyWeather'} icon={<GiPlasticDuck />} />
        <DropDownItem title={'Locate'} text={'/locate'} icon={<LiaCompassSolid />} />
      </div>
      {/* {menuItems.map((item) => (
        <DropDownItem title={item.title} text={item.text} icon={item.icon} />
      ))} */}

    </header>
  )
}

export default Header;
