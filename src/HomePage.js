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
            <a href='https://github.com/amanda-hecht89/candy-crush' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Minesweeper</h2>
            <h4>Try to find all the mines without setting them off!</h4>
            <a href="https://amandasminesweeper.netlify.app/" target="/blank"><img src='/images/minesweeper.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/minesweeper' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Tetris</h2>
            <h4>Use the arrow keys to move the tiles to fill out the horizonal space to remove it. Dont let the tiles hit the top!</h4>
            <a href="https://amandamadeatetris.netlify.app/" target="/blank"><img src='/images/tetris.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/tetris' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Break The Tiles</h2>
            <h4>Use your left and right arrow keys to get the ball to remove all the blocks!</h4>
            <a href="https://amandasbreakoutgame.netlify.app/" target="/blank"><img src='/images/breakOut.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/breakout' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Matching Game</h2>
            <h4>Find the pairs!</h4>
            <a href="https://amandamatchgame.netlify.app/" target="/blank"><img src='/images/match.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/matching-game' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Shell Game</h2>
            <h4>Pick one of the three mountains to try and find the yeti!</h4>
            <a href="https://coloradoshellgame.netlify.app/" target="/blank"><img src='/images/shellGame.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/colorado-shell-game' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>Zombie Invaders</h2>
            <h4>Classic Space Invaders with a zombie twist. Use arrow keys to move right and left and press up to shoot!</h4>
            <a href="https://zombieinvaders.netlify.app/" target="/blank"><img src='/images/zombie1.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/space-invaders' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>PacPerson</h2>
            <h4>Move around the board with your arrow keys to try to eat all the pellets. Dont let the ghosts catch you!!!</h4>
            <a href="https://amandaman.netlify.app/" target="/blank"><img src='/images/pacman.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/pacman' className='github'>GITHUB</a>
          </div>
          <div className='soloGame'>
            <h2>BlackJack</h2>
            <h4>Play against the computer to get closer to the total 21. Aces are 11 then auto change to 1</h4>
            <a href="https://amandasblackjack.netlify.app/" target="/blank"><img src='/images/blackjack.png' className="picture" /></a>
            <a href='https://github.com/amanda-hecht89/blackjack' className='github'>GITHUB</a>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3>AMANDAS ARCADE 2022</h3>
      </div>

    </div>
  );
}
