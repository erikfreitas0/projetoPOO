import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

export default function PesEDeltCamisa({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])
  const [data, setData] = useState([]);

  async function getData() {
    try{
      const response = await axios.get('http://localhost:3000/produto');
      if (search !== ''){
        const produtos = response.data.produtos.filter(produto => {
                  return produto.codigo == search;
                })
        setData(produtos)
      }
      else{
        setData(response.data.produtos);
      }  
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteData(codigo) {
    try {
      await axios.delete('http://localhost:3000/produto', {
        data: {
          codigo: codigo,
        },
      });
      setData(prevData => prevData.filter(produto => produto.codigo !== codigo));
    } catch (e) {
      console.log(e);
    }
  }


  return (

    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
        style={styles.inputContainer}
        placeholder='Pesquise a camisa pelo código:'
        placeholderTextColor="gray"
        id='serach'
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
            Camisas
          </Text>
          {data.length <= 0 ? (
            <Text>Pesquisando...</Text>
          ) : (
            data.map((produto) => {
              return(
                <View style={styles.valorproduto}>
                  <View style={styles.valorprodutocod}>
                    <Text style={styles.valorprodutocodtxt}>{produto.codigo}</Text>
                  </View>
                  <View style={styles.valorprodutoprodtsegrd}>
                    <Text style={styles.valorprodutoprodtsegrdtxt}>{produto.marca}</Text>
                  </View>
                  <View style={styles.valor}>
                    <Text style={styles.valortxt}>Cor: {produto.cor}</Text>
                  </View>
                  <View style={styles.valorprodutometdpendt}>
                    <View style={styles.valorprodutometd}>
                      <Text style={styles.valorprodutometdtxt}>Tamanho: {produto.tamanho}</Text>
                    </View>
                    <View style={styles.valorprodutopendt}>
                      <Text style={styles.valorprodutopendttext}>Valor: {produto.preco}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                  onPress={() => deleteData(produto.codigo)}
                  >
                    <Feather name="trash-2" size={24} color="red" />
                  </TouchableOpacity>
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
  valorproduto: {
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
  valorprodutocod: {
    width: '100%',
    height: '10%',
  },
  valorprodutocodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  valorprodutoprodtsegrd: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorprodutoprodtsegrdtxt: {
    fontSize: 20,
  },
  valor: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valortxt: {
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic',
  },
  valorprodutometdpendt: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valorprodutometd: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorprodutometdtxt: {
    fontSize: 16,
  },
  valorprodutopendt: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorprodutopendttext: {
    fontSize: 12,
  },
  valorprodutobancoendereco: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valorprodutobanco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorprodutobancotxt: {
    fontSize: 16,
  },
  valorprodutoendereco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorprodutoenderecotxt: {
    fontSize: 15,
  },
});
