import React from 'react'
import './GameOver.css'

const GameOver = ({reset, pontos}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Seua pontuação foi <span>{pontos}</span> </h2>
      <button onClick={reset}>Tentar novamente</button>
    </div>
  )
}

export default GameOver;