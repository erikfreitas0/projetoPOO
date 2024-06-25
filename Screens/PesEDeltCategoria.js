import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function PesEDeltcategoria({ navigation }) {

  const [pesquisa, setPesquisa] = useState([]);
  const [data, setData] = useState([]);

  async function getData() {
    try{
      const response = await axios.get('http://localhost:3000/categoria');
      if (search !== ''){
        const categorias = response.data.categorias.filter(categoria => {
                  return categoria.codigo == search;
                })
        setData(categorias)
      }
      else{
        setData(response.data.categorias);
      }  
      console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  }


  return (

    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
        style={styles.inputContainer}
        placeholder='Pesquise a categoria pelo código:'
        placeholderTextColor="gray"
        value={pesquisa}
        onChangeText={setPesquisa}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={getData}>
          <Image
                style={styles.lupa}
                source={require('../ft/lupa.png')}
              />
          </TouchableOpacity>
        </View>
      </View> 
      
        <ScrollView>
        <Text>
            Caminhões
          </Text>
          {data.length <= 0 ? (
            <Text>Pesquisando...</Text>
          ) : (
            data.map((categoria) => {
              return(
                <View style={styles.categoria}>
                  <View style={styles.categoriacod}>
                    <Text style={styles.categoriacodtxt}>{categoria.codigo}</Text>
                  </View>
                  <View style={styles.categoriatipo}>
                    <Text style={styles.categoriatipotxt}>{categoria.tipo}</Text>
                  </View>
                </View>
              );
            })
          )}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#474a51',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  campoPesquisa: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 20,
    height: 40,
    backgroundColor: 'white',
  },
  lupa: {
    width: 30,
    height: 30,
  },
  square1: {
    width: 70, 
    height: 40,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  categoria: {
    margin: 20,
    width: 320,
    height: 190,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  categoriacod: {
    width: '100%',
    height: '10%',
  },
  categoriacodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  categoriatipo: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriatipotxt: {
    fontSize: 20,
  },
});
