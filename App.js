import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './Screens/CartContext';

import Login from './Screens/Login';
import Cadastro from './Screens/Cadastrar';
import Adm from './Screens/Adm';
import Camisas from './Screens/Camisas';
import CriarCamisa from './Screens/CriarCamisa';
import AlterarCamisa from './Screens/AlterarCamisa';
import PesEDeltCamisa from './Screens/PesEDeltCamisa';
import PesEDeltCategoria from './Screens/PesEDeltCategoria';
import PesEDeltClassificacao from './Screens/PesEDeltClassificacao';
import Calças from './Screens/Calças';
import CriarCalça from './Screens/CriarCalça';
import AlterarCalça from './Screens/AlterarCalça';
import PesEDeltCalça from './Screens/PesEDeltCalça';
import Tenis from './Screens/Tenis';
import CriarTênis from './Screens/CriarTênis';
import CriarCategoria from './Screens/CriarCategoria';
import CriarClassificacao from './Screens/CriarClassificacao';
import Categoria from './Screens/Categoria';
import Classificacao from './Screens/Classificacao';
import AlterarTênis from './Screens/AlterarTênis';
import PesEDeltTênis from './Screens/PesEDeltTênis';
import Home from './Screens/Home';
import Pedido from './Screens/Pedido';
import Camisa from './Screens/Camisa';
import Calça from './Screens/Calça';
import Tênis from './Screens/Tênis';
import Carrinho from './Screens/Carrinho';


export default function Stack() {
  const Stack = createStackNavigator();

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          
              headerStyle: { backgroundColor: "#474a51" }, 
              headerTransparent:true,
              headerTintColor: "white",
              headerTitleAlign: "center",}}>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Adm' component={Adm} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Camisas' component={Camisas} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='CriarCamisa' component={CriarCamisa} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='AlterarCamisa' component={AlterarCamisa} />        
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='PesEDeltCamisa' component={PesEDeltCamisa} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='PesEDeltCategoria' component={PesEDeltCategoria} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='PesEDeltClassificacao' component={PesEDeltClassificacao} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Calças' component={Calças} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='CriarCalça' component={CriarCalça} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='CriarCategoria' component={CriarCategoria} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='CriarClassificacao' component={CriarClassificacao} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Categoria' component={Categoria} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Classificacao' component={Classificacao} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='AlterarCalça' component={AlterarCalça} />        
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='PesEDeltCalça' component={PesEDeltCalça} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Tenis' component={Tenis} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='CriarTênis' component={CriarTênis} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='AlterarTênis' component={AlterarTênis} />        
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='PesEDeltTênis' component={PesEDeltTênis} />
          <Stack.Screen options={{ headerShown: false, headerTitle:' '  }} name='Home' component={Home} />
          <Stack.Screen options={{ headerShown: false, headerTitle:' '  }} name='Pedido' component={Pedido} />
          <Stack.Screen options={{ headerShown: false, headerTitle:' '  }} name='Camisa' component={Camisa} />
          <Stack.Screen options={{ headerShown: false, headerTitle:' '  }} name='Calça' component={Calça} />
          <Stack.Screen options={{ headerShown: false, headerTitle:' '  }} name='Tênis' component={Tênis} />
          <Stack.Screen options={{ headerShown: true, headerTitle:' '  }} name='Carrinho' component={Carrinho} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}