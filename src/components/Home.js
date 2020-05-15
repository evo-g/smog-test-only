import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <section>
      <Banner />
      <div className='second-child'>
        <Carousel />
      </div>
      <div className='row'>
        <div className='card'>
          <h1>Why Smog Test Only?</h1>
          <p></p>
        </div>
        <div className='card'>
          <h1>Coupon</h1>
          <p></p>
        </div>
        <div className='card'>
          <h1>Locations</h1>
          <p></p>
        </div>
      </div>
    </section>
  )
};

export default Home;
