import React from 'react'
import Logo from "../assets/One-P.png"
import Style from "./StartScreen.module.scss"

const StartScreen = ({ iniciaJogo }) => {

  
  return (
    <div className= {Style.start}>
        <h1  className={Style.startTitle}>Palavra Secreta</h1>
        <img className={Style.startLogo} src={Logo} alt="" />
        <button type="button" onClick={iniciaJogo}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen;