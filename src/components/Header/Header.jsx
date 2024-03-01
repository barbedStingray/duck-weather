import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DropDownItem from './DropDownItem';

import { GiPlasticDuck } from "react-icons/gi";
import { GiDuckPalm } from "react-icons/gi";
import { GiDuck } from "react-icons/gi";
import { LiaCompassSolid } from "react-icons/lia";




const Header = (props) => {

  // toggle dropdown
  const [menu, setMenu] = useState(false);

  // click off menu
  useEffect(() => {
    let handler = () => {
      setMenu(false);
    };
    document.addEventListener('mousedown', handler);
  }, []);

  // // menu items
  const menuItems = [
    { title: 'Day', text: '/', icon: <GiDuckPalm />},
    { title: 'Week', text: '/weeklyWeather', icon: <GiDuckPalm />},
  ];

  return (
    <header className="duck-header">



      <h1>Duck Weather</h1>

      <div className='menuContainer'>
        <div className='menuTrigger' onClick={() => setMenu(!menu)}>
          <GiPlasticDuck />
        </div>
        <div className={`dropdownMenu ${menu ? 'active' : 'inactive'}`}>
          <ul>
            <DropDownItem title={'Day'} text={'/'} icon={<GiDuckPalm />}/>
            <DropDownItem title={'Week'} text={'/weeklyWeather'} icon={<GiDuck />}/>
            <DropDownItem title={'Locate'} text={'/locate'} icon={<LiaCompassSolid />}/>
            
            {/* {menuItems.map((item) => (
              <DropDownItem title={item.title} text={item.text} icon={item.icon} />
            ))} */}
          </ul>
        </div>
      </div>




    </header>
  )
}

export default Header;
