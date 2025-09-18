import React from 'react'
import Logo from "../assets/One-P.png"


const StartScreen = ({ iniciaJogo }) => {

  
  return (
    <div className= "justify-items-center">
        <h1  className="font-luckiest font-normal  tracking-wider text-palha text-stroke-blue text-6xl md:text-8xl text-shadow ">Palavra Secreta</h1>
        <img className=" h-56 w-56 sm:h-60 sm:w-60 object-center m-8 " src={Logo} alt="" />
        <button type="button" className="bg-red font-archivo text-white py-2 px-6 sm:px-11 rounded-3xl border border-redLuffy h-20 uppercase font-bold sm:text-xl text-xl md:text-2xl cursor-pointer transition-all duration-300 box-shadow-red hover:scale-105" onClick={iniciaJogo}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen;