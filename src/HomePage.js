import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='header'>
        <h1>WELCOME TO AMANDAS ARCADE</h1>
      </div>
      <div className='body'>
        <div className='game'>
          <h2>Fruit Crush</h2>
          <h4>Description</h4>
          <a href="https://amandacrush.netlify.app/" target="/blank"><img src="/images/fruitCrush.png" className="icon" /></a>
        </div>
      </div>
      <div className='footer'>
        <h3>AMANDAS ARCADE 2022</h3>
      </div>

    </div>
  );
}
