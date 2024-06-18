import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {



  const [categoria, setCategoria] = useState<Categoria>({
    id: "",
    descricao: "",
  })

  function inserirCategoria(){
    axios.post('http:localhost:3000/categoria', {
      body:{
        id: categoria.id,
        descricao: categoria.descricao,
      },
      header:{
        'Content-Type': 'Application/Json'
      }
    })
  }

  useEffect(() => {
    console.log(categoria.id)
  },[categoria.id])

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
      id='id'
      value={categoria.id}
      placeholder="id"
      onChange={(e) => setCategoria({...categoria, id: e.target.value})}
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
