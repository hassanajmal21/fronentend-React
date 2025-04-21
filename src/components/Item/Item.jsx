import React from "react";
import "./Item.css";
const Item = (props) => {
    return (
        <div className="item">
         <img src={props.image} className="imagesitem" alt="" />
         <p>{props.name}</p>
         <div className="Item-Price">
            <div className="Item-price-new">
                ${props.new_price}
            </div>
            <div className="Item-price-old">
            ${props.old_price}
            </div>
         </div>
        </div>
    );
}

export default Item;