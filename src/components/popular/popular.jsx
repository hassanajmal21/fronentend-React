import React from 'react'
import './popular.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'
export const Popular = () => {
  return (
    <div className='popular'>
    <h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popoular-item">
{data_products.map((item,i) => {
    return < Item key={i} id={item.id} name={item.name}e image={item.image} new_price={item.new_price} old_price={item.old_price} />
})}
    
</div>
    </div>
  )
}
export default Popular