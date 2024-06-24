import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function PesEDeltCamisa({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function PesquisaCamisa(){
    const PesquisaCamisa = collection(database, 'Tasks') 
    const listen = onSnapshot(PesquisaCamisa, (query) => { 
      const list = [] 
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id}) 
      })
      setPesquisa(list) 
    })
    return () => listen();
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
        onChange={e => setSerach(e.target.value)}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={PesquisaCamisa}>
          <Image
                style={styles.lupa}
                source={require('../ft/lupa.png')}
              />
          </TouchableOpacity>
        </View>
      </View> 
      
        <ScrollView>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          <Text>faz com que a camisa apareça aqui</Text>
          

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
});
