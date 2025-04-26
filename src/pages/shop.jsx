import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/popular';
import Offers from '../components/Offers.js/Offers';
import { Newcollections } from '../components/Newcollections/Newcollections';
const Shop = () => {
  return (
    <div className='shop'>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
    </div>
  );
}
export default Shop;