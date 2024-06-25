import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function Login({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  async function Submit() {
    if (username === 'erik' && password === '1234') {
      navigation.navigate('Home');// entrada de adm
      setUsername('');
      setPassword('');
    }
        else if (username === 'adm' && password === 'adm') {
          navigation.navigate('Adm');// entrada de adm
          setUsername('');
          setPassword('');
        }
        else {
          alert('Dados inválidos');
        }
      
      if (userFound) {
        navigation.navigate('Home');
        setUsername('');
        setPassword('');
      }
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('../ft/urbanvogue.png')}
        />
      </View>
      <Text style={styles.txt}>Seja bem-vindo a</Text>
      <Text style={styles.txt1}> melhor loja do mundo!</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <AntDesign name="login" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Usuário: "
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="lock1" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Senha: "
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.botom} onPress={Submit}>
          <Text style={styles.txtbotom}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cadstreaqdiv} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastreaq} >Cadastre-se!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#474a51',
  },
  imagem: {
    height: 200,
    width: 350,
  },
  txt: {
    fontSize: 30,
    color: 'white',
  },
  txt1: {
    fontSize: 30,
    color: 'white',
    marginBottom: 35,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: '70%',
    height: 45,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  botom: {
    width: 160,
    height: 43,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'black',
  },
  txtbotom: {
    fontSize: 20,
    color: 'white',
  },
  cadstreaqdiv: {
    alignItems: "center",
  },
  cadastreaq: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },

});
