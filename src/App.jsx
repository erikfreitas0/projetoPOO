import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {



  const [categoria, setCategoria] = useState<Categoria>({
    nome: "",
    descricao: "",
  })

  function inserirCategoria(){
    axios.post('http:localhost:300/categoria', {
      body:{
        nome: categoria.nome,
        descricao: categoria.descricao,
      },
      header:{
        'Content-Type': 'Application/Json'
      }
    })
  }

  useEffect(() => {
    console.log(categoria.nome)
  },[categoria.nome])

  return (
    <>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}></div>
      <input
      type="text"
      id='nome'
      value={categoria.nome}
      placeholder="Nome"
      onChange={(e) => setCategoria({...categoria, nome: e.target.value})}
       />
       <input
      type="text"
      id='descricao'
      value={categoria.descricao}
      placeholder="Descrição"
      onChange={(e) => setCategoria({...categoria, descricao: e.target.value})}
       />
       <button style={{backgroundColor:'red'}} onClick={() => inserirCategoria()}>
          Inserir Categoria
       </button>
    </>
  )
}

export default App
