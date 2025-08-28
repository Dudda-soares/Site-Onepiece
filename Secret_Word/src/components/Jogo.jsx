import React, { useState, useRef } from 'react'
import Style from './Jogo.module.scss';

const Jogo = ({verificarLetra, escolhaWord, escolhaCategoria,letras, letrasAdivinhadas, letrasErradas, chances, pontos}) => {
    
    const [letra, setLetra] = useState("")
    const letraInputRef = useRef(null)

    const handlerForm = (e)=>{
        e.preventDefault()
        verificarLetra(letra)


        setLetra("")

        letraInputRef.current.focus()
    }

    return (
    <div className={Style.game}>
            <h1>Adivinhe <br/>
                a palavra !</h1>
            <h3 className={Style.dicas}>
                Categoria Sorteada <span>{escolhaCategoria}</span>
            </h3>

        <div className={Style.dicasPonto}> 
            <p className={Style.chances}>Tentativas <span>{chances}</span>  </p>
            <p className={Style.pontos}>
                Pontuação
                <span> {pontos}</span>
             </p>
       </div>

        <div className={Style.palavraContainer}>
            {letras.map((ltr, i) =>
                letrasAdivinhadas.includes(ltr)  ? (
                    <span key={i} className={Style.letra}>{ltr}</span>
                ):(
                <span key={i} className={Style.quadradoVazio}></span>
                )
            )}
            

        
        </div>
        
            <p className={Style.tentativa}>Tente adivinha uma letra da palavra: </p>
        
        <div className={Style.letraContainer}>
            <div className={Style.chuteLetraContainer}>
                <p>Letras ja utilizadas: </p>
                {letrasErradas.map((letra, i)=>(
                    <span key={i} >{letra}, </span>
                )
            )}
            </div>
            <form onSubmit={handlerForm} >
                <input 
                type="text" 
                name="letra" 
                ref={letraInputRef} 
                maxLength="1" 
                value={letra} 
                onChange={({target})=> setLetra(target.value)} 
                required 
                />
                <button>Jogar!</button>
            </form>
        </div>
    </div>
  )
}

export default Jogo