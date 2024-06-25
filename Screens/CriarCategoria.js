import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, Alert, Modal, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function CriarClassificacao({ navigation }) {
    const [descricao, setDescricao] = useState('');

    function postData() {
        if (descricao !== ''){
          try{
            axios.post('http://localhost:3000/categoria', 
            {
              descricao: descricao,
            },
            alert('Descrição cadastrada'),
            setDescricao(''),
            navigation.navigate('Adm')
            );
          } 
            catch (e) {
            console.log(e);
            alert('Erro ao cadastrar')
          }
        }
        else{
          alert('Insira os dados nos campos')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.geral}>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="branding-watermark" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Descricao: "
                        placeholderTextColor="gray"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.botom} 
                        onPress={postData}
                    >
                        <Text style={styles.txtbotom}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.fim}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#474a51',
        width: '100%',
        height: '100%',
    },
    geral: {
        marginTop: 100,
        width: 350,
        height: 500,
        marginLeft: 20,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginTop: 6,
        marginBottom: 6,
        width: '85%',
        height: 45,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    botom: {
        width: 160,
        height: 43,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'black',
    },
    txtbotom: {
        fontSize: 20,
        color: 'white',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 5,
    },
    checkBoxI: {
        marginTop: 9,
    },
    checkBox: {
        margin: 5,
    },
    modalTextTT: {
        alignItems: 'center',
        fontSize: 20,
        margin: 6,
    },
    modalTextT: {
        marginTop: 2,
        marginBottom: 3,
        alignItems: 'left',
        fontSize: 16,
        fontStyle: 'italic',
    },
    textGeral: {
        alignItems: 'center',

    },
    modalTextColEnt: {
    },
    modalTextMet: {
        fontSize: 25,
        margin: 10,
    },
    modalTextT2: {
        marginTop: 2,
        marginBottom: 3,
        alignItems: 'left',
        fontSize: 20,
        fontStyle: 'italic',
    },
    modalText2: {
        marginTop: 2,
        fontSize: 10,
        color: 'red',
    },
    fim: {
        height: 200,
    }
});
