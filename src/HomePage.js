import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='header'>
        <h1>AMANDAS ARCADE</h1>
      </div>
      <div className='body'>
        <div className='games'>
          <div className='soloGame'>
            <h2>Fruit Crush</h2>
            <h4>Description</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Minesweeper*</h2>
            <h4>Description</h4>
            <a href="https://amandasminesweeper.netlify.app/" target="/blank"><img src='/images/minesweeper.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Tetris*</h2>
            <h4>UNDER CONSTRUCTION</h4>
            <a href="" target="/blank"><img src='/images/underCon.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Break Out*</h2>
            <h4>Description</h4>
            <a href="https://amandasbreakoutgame.netlify.app/" target="/blank"><img src='/images/breakOut.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Matching Game</h2>
            <h4>Description</h4>
            <a href="https://amandamatchgame.netlify.app/" target="/blank"><img src='/images/match.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Shell Game</h2>
            <h4>Description</h4>
            <a href="https://coloradoshellgame.netlify.app/" target="/blank"><img src='/images/shellGame.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2> NOT Space Invaders*</h2>
            <h4>UNDER CONSTRUCTION</h4>
            <a href="" target="/blank"><img src='/images/underCon.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2> NOT Pacman*</h2>
            <h4>UNDER CONSTRUCTION</h4>
            <a href="" target="/blank"><img src='/images/underCon.png' className="picture" /></a>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3>AMANDAS ARCADE 2022</h3>
      </div>

    </div>
  );
}
