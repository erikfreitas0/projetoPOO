import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
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
      <View style={styles.opções}>
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
      <View style={styles.história}>
        <Text style={styles.históriaTitulo}>Nossa História</Text>
        <Text style={styles.históriaTexto}>
          Desde 2005, a Urban Vogue tem sido uma referência em moda urbana, combinando estilo e conforto para clientes exigentes. Com uma paixão por tendências contemporâneas, oferecemos uma seleção exclusiva de camisetas, calças e tênis que expressam sua individualidade.
        </Text>
      </View>
      <View style={styles.outrosElementos}>
        <Text style={styles.elementosTitulo}>Nossos Compromissos</Text>
        <Text style={styles.elementosTexto}>
          - Qualidade superior em todos os produtos.
          {"\n"}- Atendimento ao cliente excepcional.
          {"\n"}- Entrega rápida e confiável.
          {"\n"}- Inovação contínua em design e estilo.
        </Text>
      </View>
      <View style={styles.destaque}>
        <Image
          style={styles.destaqueImagem}
          source={require('../ft/tenis2.1.jpg')}
        />
        <View style={styles.destaqueTexto}>
          <Text style={styles.destaqueTitulo}>Produto em Destaque</Text>
          <Text style={styles.destaqueDescricao}>Descubra nosso novo lançamento: Camiseta Urban Vogue 2024. Disponível em vários tamanhos.</Text>
          <TouchableOpacity style={styles.destaqueBotao}>
            <Text style={styles.destaqueBotaoTexto}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
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
