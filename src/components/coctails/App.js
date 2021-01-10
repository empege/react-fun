import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Navbar from './Navbar'
import CoctailsHome from './Home'
import CoctailPage from './CoctailPage'
import About from './About'
import Error from './Error'
import './coctails.css';

function App() {
  return (
    <Router>
      {/* Body css kako menjati u odnosu na stranicu? */}
      <div className="coctails-wrapper">

      <Navbar />

      <Switch>

        <Route exact path='/coctails'>
          <CoctailsHome />
        </Route>

        <Route path='/coctails/about'>
          <About />
        </Route>
        
        <Route path='/coctails/coctail/:id'>
          <CoctailPage />
        </Route>

        <Route path='/coctails/*'>
          <Error />
        </Route>

      </Switch>
        
      </div>
    </Router>
  )
}

export default App
