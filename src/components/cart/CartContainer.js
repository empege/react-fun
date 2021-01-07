import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useCartContext } from './context';

const CartContainer = () => {
  const { items, totalPrice, removeAll } = useCartContext();

  return (
    <section className="cart-container">
      { items.length > 0 ? 
      <>
        <div className="items-container">
          {
            items.map((item) => {
              return <CartItem key={item.id} {...item}/>
            })
          }
          
        </div>
        <div className="total-price-wrapper">
          <div>Total cost:</div>
          <div className="total-price">{`$${totalPrice}`}</div>
        </div>
        <button className="remove-items" onClick={removeAll}>Remove All</button>
      </> : <div className="empty-cart">The Coast... I mean Cart, is clear!</div>
    }
    </section>
  )







}

export default CartContainer;