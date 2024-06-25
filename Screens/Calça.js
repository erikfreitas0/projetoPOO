import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Animated, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useCart } from './Screens/CartContext';

const { quantidade, valor, addCart } = useCart();

const { width: screenWidth } = Dimensions.get('window');

export default function Calça({ navigation }) {
  const [currentIndexCalca1, setCurrentIndexCalca1] = useState(0);
  const [currentIndexCalca2, setCurrentIndexCalca2] = useState(0);
  const [currentIndexCalca3, setCurrentIndexCalca3] = useState(0);
  const fadeAnimCalca1 = useRef(new Animated.Value(1)).current;
  const fadeAnimCalca2 = useRef(new Animated.Value(1)).current;
  const fadeAnimCalca3 = useRef(new Animated.Value(1)).current;

  const Calca1Entries = [
    { source: require('../ft/Calca1.1.jpg') },
    { source: require('../ft/Calca1.2.jpg') },
  ];

  const Calca2Entries = [
    { source: require('../ft/Calca2.1.jpg') },
    { source: require('../ft/Calca2.2.jpg') },
  ];

  const Calca3Entries = [
    { source: require('../ft/Calca3.1.jpeg') },
    { source: require('../ft/Calca3.2.jpg') },
  ];

  const methods = ['PP', 'P', 'M', 'G', 'GG'];

  const [selectedMethodCalca1, setSelectedMethodCalca1] = useState(null);
  const [selectedMethodCalca2, setSelectedMethodCalca2] = useState(null);
  const [selectedMethodCalca3, setSelectedMethodCalca3] = useState(null);

  useEffect(() => {
    const intervalCalca1 = setInterval(() => {
      Animated.timing(fadeAnimCalca1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndexCalca1(prevIndex => (prevIndex + 1) % Calca1Entries.length);
        Animated.timing(fadeAnimCalca1, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    const intervalCalca2 = setInterval(() => {
      Animated.timing(fadeAnimCalca2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndexCalca2(prevIndex => (prevIndex + 1) % Calca2Entries.length);
        Animated.timing(fadeAnimCalca2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    const intervalCalca3 = setInterval(() => {
      Animated.timing(fadeAnimCalca3, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndexCalca3(prevIndex => (prevIndex + 1) % Calca3Entries.length);
        Animated.timing(fadeAnimCalca3, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => {
      clearInterval(intervalCalca1);
      clearInterval(intervalCalca2);
      clearInterval(intervalCalca3);
    };
  }, [Calca1Entries.length, Calca2Entries.length, Calca3Entries.length, fadeAnimCalca1, fadeAnimCalca2, fadeAnimCalca3]);

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
      <ScrollView style={styles.scroll}>
        <View style={styles.banners}>
          <View style={styles.calca}>
            <Animated.Image
              style={[styles.bannerImage, { opacity: fadeAnimCalca1 }]}
              source={Calca1Entries[currentIndexCalca1].source}
            />
          </View>
          <View style={styles.tamanho}>
            {methods.map((method, index) => (
              <View key={index} >
                <CheckBox
                  title={method}
                  checked={selectedMethodCalca1 === method}
                  onPress={() => setSelectedMethodCalca1(method)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="red"
                  containerStyle={styles.checkBox}
                  textStyle={styles.checkBoxText}
                />
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => alert('Adicionado ao carrinho')}>
            <Text style={styles.ButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          <View style={styles.calca}>
            <Animated.Image
              style={[styles.bannerImage, { opacity: fadeAnimCalca2 }]}
              source={Calca2Entries[currentIndexCalca2].source}
            />
          </View>
          <View style={styles.tamanho}>
            {methods.map((method, index) => (
              <View key={index} >
                <CheckBox
                  title={method}
                  checked={selectedMethodCalca2 === method}
                  onPress={() => setSelectedMethodCalca2(method)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="red"
                  containerStyle={styles.checkBox}
                  textStyle={styles.checkBoxText}
                />
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => alert('Adicionado ao carrinho')}>
            <Text style={styles.ButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          <View style={styles.calca}>
            <Animated.Image
              style={[styles.bannerImage, { opacity: fadeAnimCalca3 }]}
              source={Calca3Entries[currentIndexCalca3].source}
            />
          </View>
          <View style={styles.tamanho}>
            {methods.map((method, index) => (
              <View key={index} >
                <CheckBox
                  title={method}
                  checked={selectedMethodCalca3 === method}
                  onPress={() => setSelectedMethodCalca3(method)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="red"
                  containerStyle={styles.checkBox}
                  textStyle={styles.checkBoxText}
                />
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => alert('Adicionado ao carrinho')}>
            <Text style={styles.ButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
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
  scroll: {
    width: '100%',
    height: '100%',
  },
  banners: {
    alignItems: 'center',
  },
  calca: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  tamanho: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  checkBoxText: {
    color: 'white',
    marginLeft: 5,
  },
  Button: {
    backgroundColor: '#595c63',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

