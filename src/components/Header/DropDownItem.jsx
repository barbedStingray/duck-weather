import React from 'react';
import { Link } from 'react-router-dom';


const DropDownItem = (props) => {
  return (
    <Link to={props.text}>
    <div className='dropdownItem'>
        {props.icon}
        <span className='menuWord'><h6>{props.title}</h6></span>
    </div>
</Link>
)
}

export default DropDownItem;
