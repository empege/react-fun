import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useCartContext } from './context'

const CartItem = ({id, title, price, img, amount: itemCount}) => {
  const { increment, decrement, removeItem } = useCartContext()
  
  return (
    <section key={id} className="cart-item">

      <img src={img} alt={title} />

      <div className="item-info">
        <div className="item-title">{title}</div>
        <div className="item-price">{`$${price}`}</div>
        <button className="remove-item" onClick={() => {removeItem(id)}}>Remove</button>
      </div>
      <div className="item-count">
        <IoIosArrowUp size="1.5rem" onClick={()=>{increment(id)}}/>
        <div className="count">{itemCount}</div>
        <IoIosArrowDown size="1.5rem" onClick={()=>{decrement(id)}}/>
      </div>

    </section>
  )







}
export default CartItem;