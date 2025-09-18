import React, { useState, useRef } from 'react'


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
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <h1 className="font-luckiest font-normal tracking-widest text-palha text-stroke-blue text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-shadow leading-tight text-center">Adivinhe <br/>
                a palavra !</h1>
            <h3 className="flex flex-col items-center p-4 sm:p-6 mt-6 rounded-2xl border-shadow-blue bg-bg-dicas min-w-[350px] max-w-[410px] sm:max-w-[300px]">
                <span className="text-lg sm:text-xl md:text-2xl">Categoria Sorteada</span>
                <span className="mt-2 text-base sm:text-xl md:text-2xl text-span-dicas text-shadow-red">
                {escolhaCategoria}
                </span>
            </h3>

        <div className="flex text-justify text-base font-normal font-archivo tracking-widest  justify-center items-center w-[100%]"> 
            <p className="my-auto mx-5 justify-center text-shadow-black text-tbase justify-items-center ">
                Tentativas 
                <span className="mt-3 flex bg-redLuffy w-16 h-16 font-normal justify-center  text-3xl items-center border-8 border-border-red rounded-full shadow-black font-archivo">{chances}</span>  </p>
            <p className="justify-items-center">
                Pontuação
                <span className="mt-3 flex bg-redLuffy w-16 h-16 font-normal justify-center text-3xl items-center border-8 border-border-red rounded-full shadow-black font-archivo"> {pontos}</span>
             </p>
       </div>

        <div className={`m-6 p-6  border-[20px]  border-palha rounded-3xl shadow-blue bg-cor-container-palavra ${
            escolhaWord.length > 5 
                ? "grid grid-cols-[repeat(5,1fr)] gap-4" 
                : "flex"
            }`}>
            {letras.map((ltr, i) => {
                if (ltr === " ") {
                // 👉 se for hífen, já mostra preenchido
                    return (
                        <span
                        key={i}
                        className="text-8xl rounded-3xl ml-4 border border-yellow shadow-yellowB  flex items-center justify-center h-28 w-28 uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold"
                        >-</span> 
                    );
                }

            return letrasAdivinhadas.includes(ltr) ? (
            <span
                key={i}
                className="text-7xl rounded-3xl ml-4 border border-yellow shadow-yellowB flex items-center justify-center h-28 w-28 uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold"
            >
                {ltr}
            </span>
            ) : (
            <span
                key={i}
                className="text-7xl rounded-3xl ml-4 border border-yellow shadow-yellowB flex items-center justify-center h-28 w-28 uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold"
            ></span>
            );
            })}
        </div>
        
            <p className="m-9 text-base text-shadow-black text-tbase  ">Tente adivinha uma letra da palavra: <span className='text-xs text-gray-400'>(As palavras não possui espaços)</span> </p>
        
        <div className="static justify-center flex">
            <div className="py-0 px-11 bg-bg-dicas shadow-sombraB mr-8">
                <p className="text-base items-center text-shadow-black text-tbase mt-2">Letras ja utilizadas: </p>
                {letrasErradas.map((letra, i)=>(
                    <span className="text-2xl text-white text-shadow-black font-luckiest text-center" key={i} >{letra}, </span>
                )
            )}
            </div>
            <form onSubmit={handlerForm} className='flex items-center justify-center' >
                <input 
                type="text" 
                name="letra" 
                ref={letraInputRef} 
                maxLength="1" 
                value={letra} 
                onChange={({target})=> setLetra(target.value)} 
                required 
                className="h-12 w-12 border-none text-4xl text-gray-900 shadow-sombraB rounded-2xl text-center mr-4"
                />
                <button className="bg-red font-archivo text-white py-0 px-11 rounded-3xl border border-redLuffy h-20 uppercase font-bold text-2xl cursor-pointer transition-all duration-400 box-shadow-red hover:border border-box-shadow-red bg-box-shadow-red">Jogar!</button>
            </form>
        </div>
    </div>
  )
}

export default Jogo