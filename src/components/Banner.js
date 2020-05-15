import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner-container'>
      <Link to ='/'><img src={require('../assets/images/Banner.png')} /></Link>
    </div>
  )
};

export default Banner;
