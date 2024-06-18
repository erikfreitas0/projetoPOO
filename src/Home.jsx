import React from 'react';
import { View, Text, Image,  ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Login from './login';

const Home  = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => {Login}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>Bem-vindo à Urban Vogue</Text>
      
      <View style={styles.grid}>
        <View style={styles.item}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX522_.jpg' }} style={styles.image} />
          <Text style={styles.itemTitle}>Camiseta Casual</Text>
          <Text style={styles.price}>Preço: R$ 29,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: 'https://www.tradeinn.com/f/13713/137133676_3/jack---jones-jeans-glenn-original-am-814-slim.jpg?_gl=1*hy7wph*_up*MQ..&gclid=CjwKCAjwmrqzBhAoEiwAXVpgol2roJygjtPpmjabRIAiU7yraItd5dhHm_pwmJ4x7oAFzDf0U38E8hoC2dwQAvD_BwE&gclsrc=aw.ds' }} style={styles.image} />
          <Text style={styles.itemTitle}>Calça Jeans</Text>
          <Text style={styles.price}>Preço: R$ 49,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/41ooBGr8VJL._AC_SX466_.jpg' }} style={styles.image} />
          <Text style={styles.itemTitle}>Camisa de Time</Text>
          <Text style={styles.price}>Preço: R$ 339,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/71h9QfV3y2L._AC_SX522_.jpg' }} style={styles.image} />
          <Text style={styles.itemTitle}>Jaqueta de Couro</Text>
          <Text style={styles.price}>Preço: R$ 99,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/61YDPLza0YL._AC_SX522_.jpg' }} style={styles.image} />
          <Text style={styles.itemTitle}>Blusa de lã</Text>
          <Text style={styles.price}>Preço: R$ 149,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Text style={styles.itemTitle}>Regata Dallas</Text>
          <Text style={styles.price}>Preço: R$ 149,99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  link: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#edf2f7',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    marginVertical: 8,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
    textAlign: 'center',
    marginVertical: 8,
  },
  price: {
    color: '#4a5568',
    textAlign: 'center',
  },
});

export default Home;