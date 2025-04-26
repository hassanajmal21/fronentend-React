import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/popular';
import Offers from '../components/Offers.js/Offers';
import { Newcollections } from '../components/Newcollections/Newcollections';
import { Newslatter } from '../components/Newsletter/Newslatter';
const Shop = () => {
  return (
    <div className='shop'>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newslatter />
    </div>
  );
}
export default Shop;