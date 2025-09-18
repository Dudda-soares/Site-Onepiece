import React from 'react'
import Logo from "../assets/One-P.png"


const StartScreen = ({ iniciaJogo }) => {

  
  return (
    <div className= "justify-items-center">
        <h1  className="font-luckiest font-normal  tracking-wider text-palha text-stroke-blue text-8xl text-shadow ">Palavra Secreta</h1>
        <img className="h-60 w-60 object-center m-8 " src={Logo} alt="" />
        <button type="button" className="bg-red font-archivo text-white py-0 px-11 rounded-3xl border border-redLuffy h-20 uppercase font-bold text-2xl cursor-pointer transition-all duration-400 box-shadow-red hover:border border-box-shadow-red bg-box-shadow-red" onClick={iniciaJogo}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen;