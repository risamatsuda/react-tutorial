import {useState} from 'react';

function Square({value, onSquareClick}) {
  return (
      <button className="square" onClick = {onSquareClick}>{value}</button>
  );
}

export default function Board(){
  //プレイヤーが着手するたびに、どちらが次のプレイヤーかを切り替えるための変数
  const [xIsNext, setXIsNext] = useState(true);
  //盤面の状態を管理するための変数
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i]||calculateWinner(squares)){
      return;
    }
    //nextSquaresはsquaresのコピー
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = 'Winner: ' + winner;
  }else{
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value = {squares[0]} onSquareClick={()=> handleClick(0)}/>
      <Square value = {squares[1]} onSquareClick={()=> handleClick(1)}/>
      <Square value = {squares[2]} onSquareClick={()=> handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value = {squares[3]} onSquareClick={()=> handleClick(3)}/>
      <Square value = {squares[4]} onSquareClick={()=> handleClick(4)}/>
      <Square value = {squares[5]} onSquareClick={()=> handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value = {squares[6]} onSquareClick={()=> handleClick(6)}/>
      <Square value = {squares[7]} onSquareClick={()=> handleClick(7)}/>
      <Square value = {squares[8]} onSquareClick={()=> handleClick(8)}/>
    </ div>
    </>
  );
}

//「この中身はReact特有のものではないので、あまり気にしないようにしてください」
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
