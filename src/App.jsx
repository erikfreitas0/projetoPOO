import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Home from './Home';
import Usuario from './cadusuario';
import Categoria from './categoria';
import Classificacao from './classificacao';
import Compras from './compras';
import Produto from './produto';


const Stack = createStackNavigator();

function App() {
<<<<<<< HEAD
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Classificacao" component={Classificacao} />
        <Stack.Screen name="Compras" component={Compras} />
        <Stack.Screen name="Produto" component={Produto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
=======



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
      type="int"
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
>>>>>>> de3110010753e37c240bb04da28dfcc35580e054
}

export default App;