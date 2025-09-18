import './App.css'

//react
import { use, useCallback, useEffect, useState } from 'react';


//data
import { wordsList } from "./data/word"

//components
import StartScreen from './components/StartScreen'
import Jogo from './components/Jogo';
import GameOver from './components/GameOver';

const estagios = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const qtdChanches= 4;


function App() {
  

  const [estagioJogo, setEstagioJogo ] = useState(estagios[0].name)
  const [palavras] = useState(wordsList)
  
  const [escolhaWord, setEscolhaWord] = useState('')
  const [escolhaCategoria, setEscolhaCategoria] = useState("")
  const [letras, setLetras] = useState([])

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([])
  const [letrasErradas, setLetrasErradas]= useState([])
  const [chances, setChances] = useState(qtdChanches)
  const [pontos, setPontos] = useState(0)

  const escolhaWordAndCategoria = useCallback(() =>{
    // escolha aleatorio a categoria
    const categorias = Object.keys(palavras)
    {/*Gera um número decimal aleatório(random) entre 0 (inclusive) e o número de categorias (exclusivo) */}
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length) ]

    //escolha  palavra aleatorio 
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)]
   
    
    return {palavra, categoria}

  },[])

  const formataCategoria = (nomeCategoria)=>{
    return nomeCategoria
      .replace(/([a-z])([A-Z])/g, '$1 $2') //separa as palavras
      .replace(/^./, str => str.toUpperCase()) //primeira letra maiuscula
      .split(' ')
      .map(formaLetra => formaLetra.charAt(0).toUpperCase() + formaLetra.slice(1))
      .join(' ');
  };

  const iniciaJogo = useCallback(() =>{
     limparLetra()
    //escolha word e escolha categoria
    const {palavra, categoria} = escolhaWordAndCategoria()

    //cria um array com cada letra
    let letraDaPalavra = palavra.split("")

    
    letraDaPalavra = letraDaPalavra.map((l) => l.toLowerCase())

    //preencher estados

    setEscolhaWord(palavra)
    setEscolhaCategoria(formataCategoria(categoria))
    setLetras(letraDaPalavra)

    setEstagioJogo(estagios[1].name)
  },[escolhaWordAndCategoria])

  // useEffect(() => {
  //   iniciaJogo(); // roda só uma vez ao montar
  // }, [iniciaJogo]);
  
  const verificarLetra = (letra) => {
    
    const normalizeLetra = letra.toLowerCase();

    // ver se aletra ja foi utilizada
    if (letrasAdivinhadas.includes(normalizeLetra) || letrasErradas.includes(normalizeLetra)){
      return;
    };

    // Verifica se a letra normalizada está presente na lista de letras corretas (letras da palavra)
    if(letras.includes(normalizeLetra)){


      // Se sim, adiciona essa letra à lista de letras adivinhadas corretamente
      setLetrasAdivinhadas((atualLetrasAdivinhadas) =>[
        ...atualLetrasAdivinhadas, // mantém as letras já adivinhadas
        normalizeLetra // adiciona a nova letra correta

      ])

    }else{
       setLetrasErradas((atualLetraErrada) =>[
        ...atualLetraErrada,
        normalizeLetra

      ])
      //diminui as chances
      setChances((atualChances) => atualChances - 1)
    };
  };

  const limparLetra = ()=>{
    setLetrasAdivinhadas([])
    setLetrasErradas([])
  };

  
  
  //verifica se condicao e vencedor
  useEffect(()=>{
    const letraUnica = [...new Set(letras)]
    
    if(estagioJogo === 'game'&&
      letrasAdivinhadas.length === letraUnica.length){
      //add scrore
      setPontos((atualPontos) => atualPontos +=  100 )
      
      setChances(qtdChanches) //reseta a chance
      //restrt
      iniciaJogo() // gera nova palavra
    }
  },[letrasAdivinhadas,letras,iniciaJogo,estagioJogo])
  
  
  
  //checar se as tentativas terminaram derrrota
  useEffect(()=>{
    if(chances <= 0){
      //reseta o estagio
      limparLetra();
      setEstagioJogo(estagios[2].name)
    }
  },[chances]);
  
  
  const reset = () =>{
    //reseta os pontos e a qtda de chances
    setPontos(0)
    setChances(qtdChanches)

    setEstagioJogo(estagios[0].name)
  };
  

  return (
    <>
    <div className="App relative flex flex-col items-center justify-start sm:justify-center text-center min-h-screen max-w-[1920px] mx-auto p-4">
      <div className="fixed inset-0 -z-10 sm:hidden bg-conic-ios"></div>
      {estagioJogo === 'start' && <StartScreen iniciaJogo={iniciaJogo}/>}
      {estagioJogo === 'game' && <Jogo verificarLetra={verificarLetra} escolhaWord={escolhaWord} escolhaCategoria={escolhaCategoria} letras={letras} letrasAdivinhadas={letrasAdivinhadas} letrasErradas={letrasErradas} chances={chances}  pontos={pontos}       />}
      {estagioJogo === 'end' && <GameOver reset={reset} pontos={pontos} />}
    </div>
      
    </>
  )
}

export default App
