import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h3>New Arrival Only</h3>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                       <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyones</p>
                    <div className="hero-latest-btn">
                        <div>latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    );
}
export default Hero;    