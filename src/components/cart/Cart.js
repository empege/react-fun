import React from 'react'
import CartContainer from './CartContainer'
import Loading from './../Loading'
import { IconContext } from 'react-icons'
// Icon Context je da mogu da style sve React icons odjednom, a svaku mogu posebno posle inline
import { BiCart } from 'react-icons/bi';
import { useCartContext } from './context';
import './cart.css'

const Cart = () => {
  const { loading, totalAmount } = useCartContext()

  document.title = 'Cart'
  //Kako ovo lepo da uradim?

  return (
    <>
      {
      loading === true ?
      <Loading /> :
      <IconContext.Provider value={{size: '2em'}}>
        <main id="cart-main">
          <div className="content-wrapper">
            <div className="cart-nav">
              <h1>Your Baggy:</h1>
              <div className="items-counter-wrapper">
                <BiCart/>
                <span className="items-counter">{totalAmount}</span>
              </div>
            </div>
            <CartContainer />
          </div>
        </main>
    </IconContext.Provider>
    }
    </>
    
  )

}

export default Cart;