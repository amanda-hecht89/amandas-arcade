import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='header'>
        <h1>WELCOME TO AMANDAS ARCADE</h1>
      </div>
      <div className='body'>
        <h1>Please Enjoy My Games</h1>
        <div className='games'>
          <div className='soloGame'>
            <h2>Fruit Crush</h2>
            <h4>Description</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Minesweeper</h2>
            <h4>Description</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Tetris</h2>
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
