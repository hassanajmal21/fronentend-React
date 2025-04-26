import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
  <div className="Offers-left">
  <h1>Exclusive</h1>
    <h1>Offers For You</h1> 
    <p>ONLY ON BESTSELLERS PRODUCTS</p>
    <button >Cheack Now</button>
  </div>
  <div className="Offers-right">
   <img src={exclusive_image} alt="" />
  </div>
    </div>
  )
}
export default Offers