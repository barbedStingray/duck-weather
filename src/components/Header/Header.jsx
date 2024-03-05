import React from 'react';

import DropDownItem from './DropDownItem';

import { GiPlasticDuck } from "react-icons/gi";
import { LiaCompassSolid } from "react-icons/lia";
import { GiFeather } from "react-icons/gi";



const Header = () => {

  // menu items
  const menuItems = [
    { title: 'Day', text: '/', icon: <GiPlasticDuck /> },
    { title: 'Week', text: '/weeklyWeather', icon: <GiFeather />  },
    { title: 'Locate', text: '/locate', icon: <LiaCompassSolid /> },
  ];

  return (
    <header className="duck-header">

      <h1>Duck Weather</h1>

      <div className='menuItems'>
        {menuItems.map((item, i) => (
          <DropDownItem title={item.title} text={item.text} icon={item.icon} key={i}/>
        ))}
      </div>

    </header>
  )
}

export default Header;
