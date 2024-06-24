import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#474a51',
    width: '100%',
    height: '100%',
    display: 'flex',
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
    marginTop: -10,
  },
  opções: {
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
  história: {
    backgroundColor: '#36393f',
    padding: 20,
    marginVertical: 10,
  },
  históriaTitulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  históriaTexto: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  outrosElementos: {
    backgroundColor: '#36393f',
    padding: 20,
    marginVertical: 10,
  },
  elementosTitulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementosTexto: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  destaque: {
    backgroundColor: '#36393f',
    flexDirection: 'row',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  destaqueImagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  destaqueTexto: {
    flex: 1,
    marginLeft: 20,
  },
  destaqueTitulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  destaqueDescricao: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
  destaqueBotao: {
    backgroundColor: '#5e636b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  destaqueBotaoTexto: {
    color: 'white',
    fontSize: 14,
  },
});
