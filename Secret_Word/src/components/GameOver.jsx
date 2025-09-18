import React from 'react'


const GameOver = ({reset, pontos}) => {
  return (
    <div>
      <h1 className="font-luckiest font-normal tracking-widest text-palha text-stroke-blue text-6xl sm:text-5xl md:text-7xl lg:text-8xl text-shadow-sm sm:text-shadow leading-tight text-center">Game Over</h1>
      <h2 className="flex flex-col m-6 items-center text-shadow-black text-base sm:text-lg  font-archivo">Sua pontuação foi: <span className="mt-2 flex bg-redLuffy w-12 h-12 sm:w-16 sm:h-16 font-normal justify-center text-xl sm:text-2xl items-center border-4 sm:border-8  border-border-red rounded-full shadow-black" >{pontos}</span> </h2>
      <button className="bg-red m-6 font-archivo text-white py-2 px-6 sm:px-10 rounded-3xl border border-redLuffy h-20 uppercase font-bold sm:text-xl text-lg md:text-2xl cursor-pointer transition-all duration-300 box-shadow-red hover:scale-105" onClick={reset}>Tentar novamente</button>
    </div>
  )
}

export default GameOver;