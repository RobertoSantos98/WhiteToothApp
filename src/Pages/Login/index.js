import { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import UserServices from '../../Components/UserServices';
import Colors from '../../Components/Colors';

import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({onLogin}) {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = async () =>{
        const login = {
            usuario: usuario,
            password: password
        }

        setLoading(true);

        try {
            const response = await UserServices.Login(login);

            
            if (response) {

                onLogin(response);

            } else {
                alert("Verifique suas credenciais.");
            }
            
        } catch (error) {
            alert("Algo deu Errado: " + error)
        } finally {
            setLoading(false)
        }

    }

 return (
   <View style={styles.container}>
        <View style={styles.content1}>
            <Image source={require('./../../Image/logo.png')} style={styles.imageLogo}/>
            <Text style={styles.text}>WhiteTooth</Text>
        </View>

        <View style={styles.content2}>
            <Text>Digite seu usuário:</Text>
            <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />
            <Text>Digite sua senha:</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmitLogin}>
                {loading? <ActivityIndicator size={24} color={Colors.azulClaro}/> : 
                <Text style={styles.textButton}>Entrar</Text> }
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
        width: '80%',
        height: '80%',
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
        height: '50%',
        justifyContent: 'center',
    },
    content2:{
        height: '50%',
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