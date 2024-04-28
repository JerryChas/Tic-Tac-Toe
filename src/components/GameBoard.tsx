import { useEffect, useState } from 'react';
import Square from './Square';
import NewGame from './NewGame';

const GameBoard = () => {
  const [currentPlayer, setcurrentPlayer] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState('');

  //* Mönster för vinst
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    // Kollar om det finns någon vinnare
    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
      console.log(winner, 'är vinnaren');
    }
  }, [squares]);

  //* Funktion för att kolla om någon har vunnit
  const checkWinner = () => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return '';
  };

  //* Funktion för vad som händer vid klick i rutan
  const handleClick = (i: number) => {
    // Om spelet är över
    if (winner) {
      return;
    }
    // Kollar så att  rutan inte redan är fylld
    if (squares[i]) return;
    // Skapa en kopia av squares
    const nextSquares = [...squares];
    // Uppdatera det elementet i den nya kopian
    nextSquares[i] = currentPlayer;
    // Uppdatera state med den nya kopian
    setSquares(nextSquares);
    // Byter spelare
    setcurrentPlayer((player) => (player === 'X' ? 'O' : 'X'));
  };

  return (
    <>
      <div className='boardContainer'>
        <div className='row'>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className='row'>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className='row'>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <NewGame />
    </>
  );
};

export default GameBoard;
