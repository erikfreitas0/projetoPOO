import {  StyleSheet, TouchableOpacity, Text, View, } from 'react-native';

export default function Classificacao({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.viewtext}>
                <Text style={styles.text}>Classificacao</Text>
            </View>
            <View style={styles.escolhageral}>
            <View style={styles.view}>
                    <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('CriarClassificacao')}>
                        <Text style={styles.txt}>Criar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('PesEDeltClassificacao')}>
                        <Text style={styles.txt}>Pesquisar</Text>
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
        marginTop: 100,
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 26,
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
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      txt: {
        color: 'white',
        fontSize: 22,
      },
});