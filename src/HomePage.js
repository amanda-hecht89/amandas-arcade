import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='header'>
        <h1>WELCOME TO AMANDAS ARCADE</h1>
      </div>
      <div className='body'>
        <div className='games'>
          <div className='fruitCrush'>
            <h2>Fruit Crush</h2>
            <h4>Match 3 or 4 game, like candy crush, but with fruit!</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
          <div className='minesweeper'>
            <h2>Minesweeper</h2>
            <h4>Description</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3>AMANDAS ARCADE 2022</h3>
      </div>

    </div>
  );
}
