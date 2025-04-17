import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- This is needed
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import './Navbar2.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Men")}>
                    <Link style={{textDecoration:"none"}} to='/Men'>Men</Link> {menu === "Men" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style={{textDecoration:"none"}} to='/Women'>Women</Link> {menu === "women" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{textDecoration:"none"}} to='/Kids'>Kids</Link> {menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-car-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
