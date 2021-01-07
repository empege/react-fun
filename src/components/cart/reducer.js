const reducer = (state, action) => {

  if (action.type === 'LOADING') {
    return { ...state, loading: false }
  }
  
  if (action.type === 'REMOVE_ALL') {
    return { ...state, items: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return { ...state, items: state.items.filter(item => item.id !== action.payload) }
  }
  if (action.type === 'FETCH_ITEMS') {
    return { ...state, items: action.payload }
  }

  if (action.type === 'TOTAL_AMOUNT_AND_PRICE') {
    let {amount, price} = state.items.reduce((total, current) => {
      const {amount, price} = current;
      total.amount += amount;
      total.price += price * amount;
      return total
    }, {
      amount:0,
      price:0
    });
    price = parseFloat(price.toFixed(2))
    
    return { ...state, totalAmount: amount, totalPrice: price }
  }
  
  if (action.type === 'INCREMENT') {
    const items = state.items.map(current => {
      if(current.id === action.payload){
        return {...current, amount: current.amount + 1};
      }
      return current;
    })
    return { ...state, items }
  }
  
  if (action.type === 'DECREMENT') {
    const items = state.items.map(current => {
      if(current.id === action.payload){
        return {...current, amount: current.amount - 1};
      }
      return current;
    })
    .filter(current => current.amount !== 0)
    return { ...state, items }
  }

  
}

export default reducer;