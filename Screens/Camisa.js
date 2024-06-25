import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Animated, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useCart } from './Screens/CartContext';

const { quantidade, valor, addCart } = useCart();

const { width: screenWidth } = Dimensions.get('window');

export default function Camisa({ navigation }) {

    const [currentIndexCamisa1, setCurrentIndexCamisa1] = useState(0);
    const [currentIndexCamisa2, setCurrentIndexCamisa2] = useState(0);
    const [currentIndexCamisa3, setCurrentIndexCamisa3] = useState(0);
    const fadeAnimCamisa1 = useRef(new Animated.Value(1)).current;
    const fadeAnimCamisa2 = useRef(new Animated.Value(1)).current;
    const fadeAnimCamisa3 = useRef(new Animated.Value(1)).current;

    const camisa1Entries = [
        { source: require('../ft/camisa1.1.jpg') },
        { source: require('../ft/camisa1.2.jpg') },
    ];

    const camisa2Entries = [
        { source: require('../ft/camisa2.1.jpg') },
        { source: require('../ft/camisa2.2.jpg') },
    ];

    const camisa3Entries = [
        { source: require('../ft/camisa3.1.jpeg') },
        { source: require('../ft/camisa3.2.jpeg') },
    ];

    const methods = ['PP', 'P', 'M', 'G', 'GG'];

    const [selectedMethodCamisa1, setSelectedMethodCamisa1] = useState(null);
    const [selectedMethodCamisa2, setSelectedMethodCamisa2] = useState(null);
    const [selectedMethodCamisa3, setSelectedMethodCamisa3] = useState(null);

    useEffect(() => {
        const intervalCamisa1 = setInterval(() => {
            Animated.timing(fadeAnimCamisa1, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexCamisa1(prevIndex => (prevIndex + 1) % camisa1Entries.length);
                Animated.timing(fadeAnimCamisa1, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        const intervalCamisa2 = setInterval(() => {
            Animated.timing(fadeAnimCamisa2, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexCamisa2(prevIndex => (prevIndex + 1) % camisa2Entries.length);
                Animated.timing(fadeAnimCamisa2, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        const intervalCamisa3 = setInterval(() => {
            Animated.timing(fadeAnimCamisa3, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexCamisa3(prevIndex => (prevIndex + 1) % camisa3Entries.length);
                Animated.timing(fadeAnimCamisa3, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        return () => {
            clearInterval(intervalCamisa1);
            clearInterval(intervalCamisa2);
            clearInterval(intervalCamisa3);
        };
    }, [camisa1Entries.length, camisa2Entries.length, camisa3Entries.length, fadeAnimCamisa1, fadeAnimCamisa2, fadeAnimCamisa3]);

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
                    <View style={styles.camisas}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimCamisa1 }]}
                            source={camisa1Entries[currentIndexCamisa1].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodCamisa1 === method}
                                    onPress={() => setSelectedMethodCamisa1(method)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="red"
                                    containerStyle={styles.checkBox}
                                    textStyle={styles.checkBoxText}
                                />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.Button} onPress={addCart}>
                        <Text style={styles.ButtonText}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                    <View style={styles.camisas}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimCamisa2 }]}
                            source={camisa2Entries[currentIndexCamisa2].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodCamisa2 === method}
                                    onPress={() => setSelectedMethodCamisa2(method)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="red"
                                    containerStyle={styles.checkBox}
                                    textStyle={styles.checkBoxText}
                                />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.Button} onPress={addCart}>
                        <Text style={styles.ButtonText}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                    <View style={styles.camisas}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimCamisa3 }]}
                            source={camisa3Entries[currentIndexCamisa3].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodCamisa3 === method}
                                    onPress={() => setSelectedMethodCamisa3(method)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="red"
                                    containerStyle={styles.checkBox}
                                    textStyle={styles.checkBoxText}
                                />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.Button} onPress={addCart}>
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
    camisas: {
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

