import React from 'react';
import Banner from './Banner';

const Coupon = () => {
  return (
    <React.Fragment>
      <div className='coupon'>
        <h1><strong>Smog Test Special</strong></h1>
        <h3>$31.75 + $ 8.25 for the certificate</h3>
        <p>Trucks, Vans and SUVs add $10 extra</p>
        <p>1995 and older add $10 extra</p>
        <p>Specials not valid with any other offer. Some restrictions may Apply. Hours: Monday – Friday 8am to 5pm, Saturday 8 am to 4pm.</p>
        <p>NO NEED TO PRINT COUPON:</p>
        <p>Just use the following coupon code for a paperless coupon:</p>
        <p>Code: “TV”</p>
      </div>
    </React.Fragment>
  )
};

export default Coupon;
