import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function Pedido({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])
  const [data, setData] = useState([]);

  async function getData() {
    try{
      const response = await axios.get('http://localhost:3000/compras');
      if (search !== ''){
        const compras = response.data.compras.filter(compra => {
                  return compra.codigo == search;
                })
        setData(compras)
      }
      else{
        setData(response.data.compras);
      }  
      console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  }


  return (

    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoft}
          source={require('../ft/urbanvogue.png')}
        />
                <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
          <Image
            style={styles.carrinho}
            source={require('../ft/carrinho.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.linha1}></View>
      <View style={styles.opcoes}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>HOME</Text>
        </TouchableOpacity >

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pedido')}>
          <Text style={styles.txt}>PEDIDOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Camisa')}>
          <Text style={styles.txt}>CAMISAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Calça')}>
          <Text style={styles.txt}>CALÇAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Tênis')}>
          <Text style={styles.txt}>TÊNIS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linha2}></View>
      <View style={styles.campoPesquisa}>
        <TextInput
          style={styles.inputContainer}
          placeholder='Pesquise seus(s) pedidos pelo código:'
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
            Pedidos
          </Text>
          {data.length <= 0 ? (
            <Text>Pesquisando...</Text>
          ) : (
            data.map((compra) => {
              return(
                <View style={styles.valorcompra}>
                  <View style={styles.valorcompracod}>
                    <Text style={styles.valorcompracodtxt}>{compra.codigo}</Text>
                  </View>
                  <View style={styles.valorcompraprodtsegrd}>
                    <Text style={styles.valorcompraprodtsegrdtxt}>{compra.valor}</Text>
                  </View>
                  <View style={styles.valor}>
                    <Text style={styles.valortxt}>Data: {compra.data}</Text>
                  </View>
                  <View style={styles.valorcomprametdpendt}>
                    <View style={styles.valorcomprametd}>
                      <Text style={styles.valorcomprametdtxt}>Quantidade: {compra.quantidade}</Text>
                    </View>
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
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoft: {
    marginTop: 40,
    height: 100,
    width: 230,
    marginLeft: 60,
  },
  carrinho: {
    marginTop: 40,
    marginLeft: 30,
    height: 50,
    width: 50,
  },
  linha1: {
    backgroundColor: '#595c63',
    width: '100%',
    height: '1%',
    margin: -10,
  },
  opcoes: {
    backgroundColor: '#595c63',
    width: '100%',
    height: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha2: {
    backgroundColor: '#595c63',
    width: '100%',
    height: '1%',
  },
  botao: {
    width: '18%',
    height: '80%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'white',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  campoPesquisa: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
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
  valorcompra: {
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
  valorcompracod: {
    width: '100%',
    height: '10%',
  },
  valorcompracodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  valorcompraprodtsegrd: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorcompraprodtsegrdtxt: {
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
  valorcomprametdpendt: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valorcomprametd: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorcomprametdtxt: {
    fontSize: 16,
  },
  valorcomprapendt: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorcomprapendttext: {
    fontSize: 12,
  },
  valorcomprabancoendereco: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valorcomprabanco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorcomprabancotxt: {
    fontSize: 16,
  },
  valorcompraendereco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valorcompraenderecotxt: {
    fontSize: 15,
  },
});
