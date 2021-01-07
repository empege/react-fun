import React from 'react';
import Components from './Components'
import '../App.css';

const Home = () => {
  return (
    <>
      <div className="title">
        <h1> ⚛️ React Fun! ⚛😁⚛</h1>
        <h3> ⚛ Tryin' to learn some React out here...⚛</h3>
        <h3> 👇 Check out some of the components I've build while learning: 👇</h3>
      </div>

      <Components />
    </>
    
  );
};

export default Home;
