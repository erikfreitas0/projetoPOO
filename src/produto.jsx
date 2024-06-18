import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Compras from './compras';

const Produto = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => { Compras }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Compras</Text>
        </View>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={styles.header}> Cadastro Produtos</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Código:</Text>
          <TextInput placeholder="Digite o código..." style={styles.input} />

          <Text style={styles.label}>Cor:</Text>
          <TextInput placeholder="Digite a cor..." style={styles.input} />

          <Text style={styles.label}>Marca:</Text>
          <TextInput placeholder="Digite a marca..." style={styles.input} />

          <Text style={styles.label}>Tamanho:</Text>
          <TextInput placeholder="Digite o tamanho..." style={styles.input} />

          <Text style={styles.label}>Preço:</Text>
          <TextInput placeholder="Digite o preço..." style={styles.input} />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.article}>
            <Text><Text style={styles.articleLabel}>Código:</Text> 1</Text>
            <Text><Text style={styles.articleLabel}>Cor:</Text> Preto</Text>
            <Text><Text style={styles.articleLabel}>Marca:</Text> Nike</Text>
            <Text><Text style={styles.articleLabel}>Tamanho:</Text> G</Text>
            <Text><Text style={styles.articleLabel}>Preço:</Text> R$ 89,99</Text> 
            
            <TouchableOpacity style={styles.trashButton}>
            <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
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
});