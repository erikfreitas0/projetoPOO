import {  StyleSheet, TouchableOpacity, Text, View, } from 'react-native';

export default function Adm({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.viewtext}>
                <Text style={styles.text}>Cadastre, altere, delete </Text>
                <Text style={styles.text}> ou pesquise o que desejar</Text>
            </View>
            <View style={styles.escolhageral}>
                <View style={styles.view}>
                    <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('Camisas')}>
                        <Text style={styles.txt}>Camisas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('Calças')}>
                        <Text style={styles.txt}>Calças</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('Tenis')}>
                        <Text style={styles.txt}>Tênis</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('Classificacao')}>
                        <Text style={styles.txt}>Classificacao</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('Categoria')}>
                        <Text style={styles.txt}>Categoria</Text>
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
        alignItems: 'center',
    },
    viewtext: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom: 40,    
    },
    text: {
        fontSize: 26,
        color: 'white',
    },
    escolhageral: {
        width: 370,
        height: 400,
        justifyContent: 'center',
    },
    view: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botom: {
        width: 240,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      },
      txt: {
        color: 'white',
        fontSize: 22,
      },
});
