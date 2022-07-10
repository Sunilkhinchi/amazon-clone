import React from 'react'
import "./product.css"

function Product({title, image, price, rating }) {
  return (
    <div className='product'> 
    <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            <p>🌟</p>
        </div>
    </div>

    <img src={image} alt=''/>
    <button>Add to basket</button>
    </div>
  )
}

export default Product