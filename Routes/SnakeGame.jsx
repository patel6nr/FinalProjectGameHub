import React, { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css';

// Component to display game over screen
const GameOver = ({ width, height, score, onRestart }) => {
  return (
    <div className="game-over-screen">
      <h2>Game Over!</h2>
      <p>Score: {score}</p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

// Main SnakeGame component
const SnakeGame = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [blockWidth, setBlockWidth] = useState(20);
  const [blockHeight, setBlockHeight] = useState(20);
  const [snake, setSnake] = useState([]);
  const [apple, setApple] = useState({});
  const [direction, setDirection] = useState('right');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Function to get random position for apple
  const getRandomPosition = (max, blockSize) => {
    return Math.floor(Math.random() * (max / blockSize)) * blockSize;
  };

  // Function to initialize game
  const initGame = useCallback(() => {
    const newSnake = [];
    const startX = Math.floor(width / 2);
    const startY = Math.floor(height / 2);
    const startSnakeSize = 6;

    //Initialize snake in the middle of the game board
    for (let i = 0; i < startSnakeSize; i++) {
      newSnake.push({ Xpos: startX - i * blockWidth, Ypos: startY });
    }

    // Initialize apple at random position
    const newAppleX = getRandomPosition(width, blockWidth);
    const newAppleY = getRandomPosition(height, blockHeight);

    // Set the initial game state
    setSnake(newSnake);
    setApple({ Xpos: newAppleX, Ypos: newAppleY });
    setIsGameOver(false);
    setScore(0);
  }, [width, height, blockWidth, blockHeight]);

  // Effect to set up initial game state and keydown event listener
  useEffect(() => {
    initGame();
    const keydownHandler = (event) => handleKeyDown(event);
    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [initGame]);

  //FUnction to handle keydown events
  const handleKeyDown = (event) => {
    if (isGameOver && event.keyCode === 32) {
      initGame();
      return;
    }

    // Change direction of the snake based on key press
    switch (event.keyCode) {
      case 37:
      case 65:
        setDirection('left');    
        break;
      case 38:
      case 87:
        setDirection('up');
        break;
      case 39:
      case 68:
        setDirection('right');
        break;
      case 40:
      case 83:
        setDirection('down');
        break;
      default:
        break;
    }
  };

  // Function to move the snake
  const moveSnake = () => {
    if (isGameOver) return;

    const newSnake = [...snake];
    const head = newSnake[0];
    let newHead = { ...head };

    // Move the head of the snake based on the current direction
    switch (direction) {
      case 'left':
        newHead.Xpos = (head.Xpos - blockWidth + width) % width;
        break;
      case 'up':
        newHead.Ypos = (head.Ypos - blockHeight + height) % height;
        break;
      case 'right':
        newHead.Xpos = (head.Xpos + blockWidth) % width;
        break;
      case 'down':
        newHead.Ypos = (head.Ypos + blockHeight) % height;
        break;
      default:
        break;
    }

    // Check for collision with self
    if (isSnakeCollision(newHead.Xpos, newHead.Ypos)) {
      setIsGameOver(true);
      return;
    }

    // Add the new head to the snake
    newSnake.unshift(newHead);
    if (newHead.Xpos === apple.Xpos && newHead.Ypos === apple.Ypos) {
    //if the snake eats the apple, increase the score and place a new apple at random position
      setScore(score + 1);
      setApple({
        Xpos: getRandomPosition(width, blockWidth),
        Ypos: getRandomPosition(height, blockHeight),
      });
    } else {
      // If the snake does not eat the apple, remove the tail
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Function to check if the snake collides with itself
  const isSnakeCollision = (x, y) => {
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].Xpos === x && snake[i].Ypos === y) {
        return true;
      }
    }
    return false;
  };

  // Effect to move the snake at regular intervals
  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [snake]); // Restart interval on snake change (moveSnake dependencies)

  // Render the game board and the game over screen if the game is over
  return (
    <div style={{ position: 'relative' }}>
      <div className="Score">Score: {score}</div>
      <div
        id="GameBoard"
        className="GameBoard"
        style={{ width: width, height: height }}
      >
        {snake.map((part, index) => (
          <div
            key={index}
            className="SnakePart"
            style={{
              left: part.Xpos,
              top: part.Ypos,
              width: blockWidth,
              height: blockHeight,
            }}
          />
        ))}
        <div
          className="Apple"
          style={{
            left: apple.Xpos,
            top: apple.Ypos,
            width: blockWidth,
            height: blockHeight,
          }}
        />
      </div>
      {isGameOver && (
        <GameOver width={width} height={height} score={score} onRestart={initGame} />
      )}
    </div>
  );
}

export default SnakeGame;
