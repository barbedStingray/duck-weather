import React from 'react';
import { motion as m } from 'framer-motion';


const Discover = () => {
  return (
    <m.div
    className='locateWeather'
    key={'/locate'}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}

    >
        <h2>Work In Progress</h2>
    </m.div>
  )
}

export default Discover
