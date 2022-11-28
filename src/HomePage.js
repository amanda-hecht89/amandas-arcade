import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='header'>
        <h1>ARCADE</h1>
      </div>
      <div className='body'>
        <div className='games'>
          <div className='soloGame'>
            <h2>Fruit Crush</h2>
            <h4>Classic Candy Crush with a fruit twist. Match 3 or 4 vertically or horizonally.</h4>
            <a href="https://amandacrush.netlify.app/" target="/blank"><img src='/images/fruitCrush.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Minesweeper*</h2>
            <h4>Try to find all the mines without setting them off!</h4>
            <a href="https://amandasminesweeper.netlify.app/" target="/blank"><img src='/images/minesweeper.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Tetris*</h2>
            <h4>Use the tiles to fill out the horizonal space to remove it. Dont let the tiles hit the top!</h4>
            <a href="" target="/blank"><img src='/images/underCon.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>NOT Break Out*</h2>
            <h4>Use your left and right arrow keys to get the ball to remove all the blocks!</h4>
            <a href="https://amandasbreakoutgame.netlify.app/" target="/blank"><img src='/images/breakOut.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Matching Game</h2>
            <h4>Find the pairs!</h4>
            <a href="https://amandamatchgame.netlify.app/" target="/blank"><img src='/images/match.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2>Shell Game</h2>
            <h4>Pick one of the three mountains to try and find the yeti!</h4>
            <a href="https://coloradoshellgame.netlify.app/" target="/blank"><img src='/images/shellGame.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2> Zombie Invaders*</h2>
            <h4>Classic Space Invaders with a zombie twist. Use arrow keys to move right and left and press up to shoot!</h4>
            <a href="https://zombieinvaders.netlify.app/" target="/blank"><img src='/images/invaders.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2> NOT Pacman*</h2>
            <h4>Move around the board to try to eat all the pellets. Dont let the ghosts catch you!!!</h4>
            <a href="" target="/blank"><img src='/images/underCon.png' className="picture" /></a>
          </div>
          <div className='soloGame'>
            <h2> NOT Pong*</h2>
            <h4>Move up and down to keep the ball on the playing square</h4>
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
