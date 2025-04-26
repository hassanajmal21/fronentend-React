import React from 'react'
import './newsletter.css'
export const Newslatter = () => {
  return (
    <div className='newslatter'>
      <h1>GET Exclusive Offers on your Email</h1>
      <p>Subcribe to our newletter and stay update</p>
      <div>
        <input type="email" placeholder='Your email id' /> 
        <button>Subscribe</button>
      </div>
    </div>
  )
}
