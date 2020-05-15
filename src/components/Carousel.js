import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel autoPlay infiniteLoop>
    <div>
      <img alt='san diego' src={require('../assets/images/home/san-diego2.jpg')} />
      {/* <p className='legend'>san diego</p> */}
    </div>
    <div>
      <img alt='fairmount location' src={require('../assets/images/home/fairmount-1.jpg')} />
      <p className='legend'>Fairmount</p>
    </div>
    <div>
      <img alt='bancroft location' src={require('../assets/images/home/bancroft-1.jpg')} />
      <p className='legend'>Bancroft</p>
    </div>
    <div>
      <img alt='broadway location' src={require('../assets/images/home/broadway-1.jpg')} />
      <p className='legend'>Broadway</p>
    </div>
  </Carousel>
)