import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div>
      <div className='second-child'>
        <Carousel />
      </div>
      <div className='row'>
        <div className='card'>
          <h1>Why Smog Test Only?</h1>
          <p>Smog Test Only provides the best, highest quality, friendliest and fastest smog checks and
          testing in San Diego County. Their highest priority is to help you pass your smog test.
          </p>
        </div>
        <div className='card'>
          <h1>Coupon</h1>
          <p>
            Use these special coupon codes to get the best pricing possible for your vehicle!
            To help you pass, check out our Hints and Tips page
          </p>
        </div>
        <div className='card'>
          <h1>Locations</h1>
          <p>
            1. Fairmount San Diego
          </p>
          <a href='619-281-8888'>619-281-8888</a>
          <p>
            2. Bancroft Spring Valley
          </p>
          <a href='619-589-0000'>619-589-0000</a>
          <p>
            3. Broadway El Cajon
          </p>
          <a>619-579-7777</a>
        </div>
      </div>
    </div>
  )
};

export default Home;
