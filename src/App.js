import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Navigation from './components/Navigation'
import ColorPicker from './components/colorPicker/ColorPicker'
import Cart from './components/cart/Cart'
import { CartProvider } from './components/cart/context';
import Error from './components/Error'
import './App.css';

function App() {
  
  return (
    <Router>
      <Navigation />
      

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/colorPicker'>
          <ColorPicker />
        </Route>

        <Route path='/cart'>
          <CartProvider>
            <Cart />
          </CartProvider>
        </Route>

        <Route path='*'>
          <Error />
        </Route>


      </Switch>

      

    </Router>
  );
}

export default App;
