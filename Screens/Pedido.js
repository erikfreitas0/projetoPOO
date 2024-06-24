import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function Pedido({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function PesquisaPedido() {
    const PesquisaPedido = collection(database, 'Tasks')
    const listen = onSnapshot(PesquisaPedido, (query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setPesquisa(list)
    })
    return () => listen();
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
          onChange={e => setSerach(e.target.value)}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={PesquisaPedido}>
            <Image
              style={styles.lupa}
              source={require('../ft/lupa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>
        <Text>faz com que o pedido apareça aqui</Text>


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
});
