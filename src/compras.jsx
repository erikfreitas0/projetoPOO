import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Home from './Home';


const Compras = () => {
  return (
    <View style={styles.container}>
            <TouchableOpacity style={styles.link} onPress={() => { Home }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={styles.header}> Cadastro Compras</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Código:</Text>
          <TextInput placeholder="Digite o código..." style={styles.input} />

          <Text style={styles.label}>Valor:</Text>
          <TextInput placeholder="Digite o valor..." style={styles.input} />

          <Text style={styles.label}>Data:</Text>
          <TextInput placeholder="Digite a data..." style={styles.input} />

          <Text style={styles.label}>Quantidade:</Text>
          <TextInput placeholder="Digite a quantidade..." style={styles.input} />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.article}>
            <Text><Text style={styles.articleLabel}>Código:</Text> 1</Text>
            <Text><Text style={styles.articleLabel}>Valor:</Text> R$ 89,99</Text>
            <Text><Text style={styles.articleLabel}>Data:</Text> 13/06/24</Text>
            <Text><Text style={styles.articleLabel}>Quantidade:</Text> 1</Text> 
            
            <TouchableOpacity style={styles.trashButton}>
            <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Compras;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  main: {
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  section: {
    width: '100%',
  },
  article: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    position: 'relative',
  },
  articleLabel: {
    fontWeight: '600',
  },
  trashButton: {
    backgroundColor: '#e53e3e',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  link: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});