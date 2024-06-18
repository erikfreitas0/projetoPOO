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
}

export default App;