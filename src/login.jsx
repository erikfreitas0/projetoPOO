import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Usuario from './cadusuario';


const Login = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');


  const LogicaLogin = () => {
    
    if (login === 'alvaro1234' && senha === '1029') {
      
      navigation.navigate('Home');
    } else {
    
      Alert.alert('Erro Login ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.link} onPress={() => {Usuario}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Faça seu login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={LogicaLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  link: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default Login;
