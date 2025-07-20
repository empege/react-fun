import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://ivanmitov.com/api/smilga-data.json'
const CartContext = React.createContext()

const initialState = {
  loading: true,
  items: cartItems,
  totalAmount: 0,
  totalPrice: 0
}

const CartProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    const resp = await fetch(url);
    const items = await resp.json();
    dispatch({ type: 'FETCH_ITEMS', payload: items })
    dispatch({ type: 'LOADING' })
  }

  useEffect(() => {
    fetchData();
  }, [])


  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increment = (id) => {
    dispatch({ type: 'INCREMENT', payload: id })
  }

  const decrement = (id) => {
    dispatch({ type: 'DECREMENT', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'TOTAL_AMOUNT_AND_PRICE' });
  }, [state.items])

  return (
    <CartContext.Provider value={{
      ...state,
      removeAll,
      increment,
      decrement,
      removeItem,
    }}>
      {children}
    </CartContext.Provider>
  )

}

// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}

export { CartContext, CartProvider }