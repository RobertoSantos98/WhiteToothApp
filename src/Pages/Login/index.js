import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
 return (
   <View style={styles.container}>
        <View style={styles.content1}>
            <Image source={require('./../../Image/logo.png')} style={styles.imageLogo}/>
            <Text style={styles.text}>WhiteTooth</Text>
        </View>

        <View style={styles.content2}>
            <Text>Digite seu usuário:</Text>
            <TextInput style={styles.input}/>
            <Text>Digite sua senha:</Text>
            <TextInput style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Ainda não possui uma conta?</Text>
                <TouchableOpacity>
                    <Text style={{color: "#0288D1"}}> Criar uma agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F5F5F5",
    },
    imageLogo:{
        width: '90%',
    },
    text:{
        color: "#0288D1",
        fontSize: 36,
        fontWeight: 'bold'
    },
    content1:{
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 15,
        flex:1,
        justifyContent: 'center',
    },
    content2:{
        flex:1,
        marginHorizontal: 15,
        gap: 10,
    },
    input:{
        backgroundColor: "#FFF",
        elevation: 12,
        height: 70,
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 18
    },
    button:{
        backgroundColor: "#0288D1",
        alignSelf: 'center',
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 12
    },
    textButton:{
        color: "#FFF",
        fontSize: 16,
        fontWeight: 'bold'
    },
})