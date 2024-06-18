import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Categoria from './categoria';


const Usuario = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => { Categoria }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Categoria</Text>
        </View>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={styles.header}>Cadastro Usúario</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput placeholder="Digite seu nome..." style={styles.input} />

          <Text style={styles.label}>Login:</Text>
          <TextInput placeholder="Digite seu login..." style={styles.input} />

          <Text style={styles.label}>Senha:</Text>
          <TextInput placeholder="Digite sua senha..." style={styles.input} secureTextEntry />

          <TouchableOpacity style={[styles.button, styles.submitButton]}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.article}>
            <Text><Text style={styles.articleLabel}>Nome:</Text>José</Text>
            <Text><Text style={styles.articleLabel}>Login:</Text>Jose123@gmail.com</Text>
            <Text><Text style={styles.articleLabel}>Senha:</Text>*******</Text>
            <Text><Text style={styles.articleLabel}>Status:</Text>ATIVO</Text>
            <TouchableOpacity style={styles.trashButton}>
              <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Usuario;

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
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  header: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
  main: {
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
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