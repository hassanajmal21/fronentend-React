import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instragram_icon from '../Assets/instagram_icon.png'
import Pintester_icon from '../Assets/pintester_icon.png'
import Whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'> 
     <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
     </div>
     <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instragram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={Pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={Whatsapp_icon} alt="" />
        </div>
     </div>
     <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 Shopper. All rights reserved.</p>

     </div>
     
    </div>
  )
}
export default Footer;