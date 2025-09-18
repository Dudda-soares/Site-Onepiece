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
            {/* Titulo */}
            <h1 className="font-luckiest font-normal tracking-widest text-palha text-stroke-blue text-[2.7rem] sm:text-5xl md:text-7xl lg:text-8xl text-shadow-sm sm:text-shadow leading-tight text-center">Adivinhe <br/>
                a palavra !
            </h1>

            <h3 className="flex flex-col items-center p-4 sm:p-6 mt-6 rounded-2xl border-shadow-blue bg-bg-dicas min-w-[200px] max-w-[260px] sm:max-w-[300px]">
                <span className="text-lg sm:text-xl md:text-2xl">Categoria Sorteada</span>
                <span className="mt-2 text-base sm:text-xl md:text-2xl text-span-dicas text-shadow-red">
                {escolhaCategoria}
                </span>
            </h3>

        <div className="flex flex-wrap justify-center text-base items-center gap-6 mt-6  w-full max-w-2xl "> 
            <p className="flex flex-col items-center text-shadow-black text-sm sm:text-base font-archivo ">
                Tentativas 
                <span className="mt-2 flex bg-redLuffy w-12 h-12 sm:w-16 sm:h-16 font-normal justify-center text-xl items-center border-4 sm:border-8  border-border-red rounded-full shadow-black ">{chances}</span>  </p>
            <p className="flex flex-col items-center text-shadow-black text-sm sm:text-base font-archivo">
                Pontuação
                <span className="mt-2 flex bg-redLuffy w-12 h-12 sm:w-16 sm:h-16 font-normal justify-center text-xl sm:text-2xl items-center border-4 sm:border-8  border-border-red rounded-full shadow-black"> {pontos}</span>
             </p>
       </div>

        <div className={`m-4 p-4 sm:p-6 border-[10px] sm:border-[16px] md:border-[20px] border-palha rounded-2xl shadow-blue bg-cor-container-palavra mt-6 ${
            escolhaWord.length > 5 
                ? "grid grid-cols-[repeat(4,1fr)] gap-2  sm:gap-3 md:gap-4 md:grid-cols-[repeat(5,1fr)]" 
                : "flex flex-wrap justify-center gap-2 sm:gap-4"
            }`}>
            {letras.map((ltr, i) => {
                if (ltr === " ") {
                    return (
                        <span
                        key={i}
                        className="flex items-center justify-center 
                         h-14 w-14 text-2xl 
                         sm:h-16 sm:w-16 sm:text-3xl 
                         md:h-20 md:w-20 md:text-4xl 
                         lg:h-24 lg:w-24 lg:text-6xl 
                         xl:h-28 xl:w-28 xl:text-7xl
                         rounded-2xl 
                         border border-yellow shadow-yellow 
                         uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold"
                        >-</span> 
                    );
                }

            return letrasAdivinhadas.includes(ltr) ? (
            <span
                key={i}
                className="flex items-center justify-center 
                         h-14 w-14 text-3xl
                         sm:h-16 sm:w-16 sm:text-3xl 
                         md:h-20 md:w-20 md:text-4xl 
                         lg:h-24 lg:w-24 lg:text-6xl 
                         xl:h-28 xl:w-28 xl:text-7xl
                         rounded-2xl 
                         border border-yellow shadow-yellow 
                         uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold font-archivo"
            >
                {ltr}
            </span>
            ) : (
            <span
                key={i}
                className="flex items-center justify-center 
                         h-14 w-14 text-2xl 
                         sm:h-16 sm:w-16 sm:text-3xl 
                         md:h-20 md:w-20 md:text-4xl 
                         lg:h-24 lg:w-24 lg:text-6xl 
                         xl:h-28 xl:w-28 xl:text-7xl
                         rounded-2xl 
                         border border-yellow shadow-yellow 
                         uppercase bg-quadrado-vazio text-stroke-blue text-white font-bold"
            ></span>
            );
            })}
        </div>
        
        <p className="m-6 text-sm sm:text-base text-shadow-black text-tbase text-center ">
            Tente adivinha uma letra da palavra: 
            <span className='text-xs text-gray-400'>
                (As palavras não possui espaços)
            </span> 
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-3xl ">
            <div className="py-2 px-6 bg-bg-dicas shadow-sombraB rounded-xl">
                <p className=" text-sm sm:text-base text-shadow-black text-tbase ">
                    Letras ja utilizadas: 
                </p>

                <div className="flex flex-wrap gap-1 mt-2 ">

                    {letrasErradas.map((letra, i)=>(
                        <span className="text-lg sm:text-xl md:text-2xl text-white text-shadow-black font-luckiest"
                            key={i} > {letra}, 
                        </span>
                    ))}
                </div>

            </div>

            <form onSubmit={handlerForm} className='flex items-center justify-center gap-4' >
                <input 
                type="text" 
                name="letra" 
                ref={letraInputRef} 
                maxLength="1" 
                value={letra} 
                onChange={({target})=> setLetra(target.value)} 
                required 
                className=" h-10 w-10 sm:h-12 sm:w-12 border-none text-2xl sm:text-3xl text-gray-900 shadow-sombraB rounded-2xl text-center "
                />
                <button className="bg-red font-archivo text-white py-2 px-6 sm:px-8  rounded-2xl border border-redLuffy  uppercase font-bold text-lg sm:text-xl md:text-2xl cursor-pointer transition-all duration-300 box-shadow-red hover:scale-105">Jogar!</button>
            </form>
        </div>
    </div>
  )
}

export default Jogo