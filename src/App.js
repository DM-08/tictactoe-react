import { useState } from 'react';
import './styles.css';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}



function Board({ xIsNext, squares, onPlay }) {
    const [xIsNext,setXIsNext] = useState(true);
      //Array(9).fill(null) creates an array with nine elements and sets each of them to null. T
  //The useState() call around it declares a squares state variable that’s initially set to that array
    const [squares, setSquares] = useState(Array(9).fill(null));

    const winner= calculateWinner(squares);
    let status;
    if(winner){
      status="Winner "+winner;
    }else{
      status="Next player " +(xIsNext?"X":"0");
    }
  
    function handleClick(i) {
      if (squares[i]||calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if(xIsNext){
        nextSquares[i]="X";
      } else{
        nextSquares[i]="0"
      }
      onPlay(nextSquares);
    }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  const [xIsNext,setXIsNext]=useState(true);
  const[history,setHistory]= useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
  }

  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}