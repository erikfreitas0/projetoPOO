import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign, EvilIcons  } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function postUsuario(){
    try{
      const userdocRef = collection(database, 'Usuario')
      addDoc(userdocRef, {
        nome: name,
        login: username,
        senha: password,
      })
      alert('usuario cadastrada')
      navigation.navigate('Login')
    }
    catch (e) {
      alert((e))
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
      <Text style={styles.txt}>Cadastre-se!</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
        <EvilIcons name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Nome: "
            placeholderTextColor="gray"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
        <AntDesign name="login" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário: "
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
        <TouchableOpacity style={styles.botom} onPress={() => postUsuario()}>
          <Text style={styles.txtbotom}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCadastro}>
       
      </View>

      <TouchableOpacity style={styles.cadstreaqdiv} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.cadastreaq} >Entrar!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: '#474a51',
  },
  imagem: {
    height: 200,
    width: 350,
  },
  txt: {
    fontSize: 30,
    color: 'white',
    marginBottom: "8%",
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
    fontSize: 15,
    color: 'white',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  viewCadastro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    marginBottom: "15px",
    marginTop: "15px",
  },
  iconCadastro: {
    height: "100%",
    width: "35%",
    
  },
});
