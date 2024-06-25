import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Animated, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useCart } from './CartContext';



const { width: screenWidth } = Dimensions.get('window');

export default function Tênis({ navigation }) {

    const { quantidade, valor, addCart } = useCart();

    const [currentIndexTenis1, setCurrentIndexTenis1] = useState(0);
    const [currentIndexTenis2, setCurrentIndexTenis2] = useState(0);
    const [currentIndexTenis3, setCurrentIndexTenis3] = useState(0);
    const fadeAnimTenis1 = useRef(new Animated.Value(1)).current;
    const fadeAnimTenis2 = useRef(new Animated.Value(1)).current;
    const fadeAnimTenis3 = useRef(new Animated.Value(1)).current;

    const Tenis1Entries = [
        { source: require('../ft/tenis1.1.png') },
        { source: require('../ft/tenis1.2.jpg') },
    ];

    const Tenis2Entries = [
        { source: require('../ft/tenis2.1.jpg') },
        { source: require('../ft/tenis2.2.jpeg') },
    ];

    const Tenis3Entries = [
        { source: require('../ft/tenis3.1.jpeg') },
        { source: require('../ft/tenis3.2.jpg') },
    ];

    const methods = ['30-33', '34-37', '38-40', '41-43'];

    const [selectedMethodTenis1, setSelectedMethodTenis1] = useState(null);
    const [selectedMethodTenis2, setSelectedMethodTenis2] = useState(null);
    const [selectedMethodTenis3, setSelectedMethodTenis3] = useState(null);

    useEffect(() => {
        const intervalTenis1 = setInterval(() => {
            Animated.timing(fadeAnimTenis1, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexTenis1(prevIndex => (prevIndex + 1) % Tenis1Entries.length);
                Animated.timing(fadeAnimTenis1, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        const intervalTenis2 = setInterval(() => {
            Animated.timing(fadeAnimTenis2, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexTenis2(prevIndex => (prevIndex + 1) % Tenis2Entries.length);
                Animated.timing(fadeAnimTenis2, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        const intervalTenis3 = setInterval(() => {
            Animated.timing(fadeAnimTenis3, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setCurrentIndexTenis3(prevIndex => (prevIndex + 1) % Tenis3Entries.length);
                Animated.timing(fadeAnimTenis3, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);

        return () => {
            clearInterval(intervalTenis1);
            clearInterval(intervalTenis2);
            clearInterval(intervalTenis3);
        };
    }, [Tenis1Entries.length, Tenis2Entries.length, Tenis3Entries.length, fadeAnimTenis1, fadeAnimTenis2, fadeAnimTenis3]);

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
                    <View style={styles.tenis}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimTenis1 }]}
                            source={Tenis1Entries[currentIndexTenis1].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodTenis1 === method}
                                    onPress={() => setSelectedMethodTenis1(method)}
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
                    <View style={styles.tenis}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimTenis2 }]}
                            source={Tenis2Entries[currentIndexTenis2].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodTenis2 === method}
                                    onPress={() => setSelectedMethodTenis2(method)}
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
                    <View style={styles.tenis}>
                        <Animated.Image
                            style={[styles.bannerImage, { opacity: fadeAnimTenis3 }]}
                            source={Tenis3Entries[currentIndexTenis3].source}
                        />
                    </View>
                    <View style={styles.tamanho}>
                        {methods.map((method, index) => (
                            <View key={index} >
                                <CheckBox
                                    title={method}
                                    checked={selectedMethodTenis3 === method}
                                    onPress={() => setSelectedMethodTenis3(method)}
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
    tenis: {
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

