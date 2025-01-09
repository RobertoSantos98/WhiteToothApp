import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../Components/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Skeleton from './skeleton-home';
import ConsultasServices from '../../Components/UserServices/ConsultaServices'
import ConsultasSkeleton from './skeleton-consultas';


export function Home({ navigation }) {

    const [ usuario, setUsuario ] = useState(null);
    const [ consultas, setConsultas ] = useState(null);
    const [ idusuario, setIdUsuario ] = useState(null);

    const [ loading, setLoading ] = useState(true);
    const [ loadingConsultas, setLoadingConsultas ] = useState(true)
    
    useEffect(() => {
        handleUsuario()
        
        if(usuario != null && idusuario != null){
            renderConsultas()

            setLoading(false)
            setLoadingConsultas(false)
        }
    }, [usuario]);

    const renderConsultas = async () => {
        
        const response = await ConsultasServices.ConsultaPorPaciente(idusuario);

        if (response) {
            setConsultas(response)
        } else {
            alert("Não foi possível recuperar consultas.")
        }

    }


    const handleUsuario = async () => {  
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            const idusuario = parseInt(await AsyncStorage.getItem('idusuario'), 10);
            setUsuario(usuario)
            setIdUsuario(idusuario)
            
        } catch (error) {
            console.log(error)
        }
    }
 

 return (
    <View style={styles.container}>

        {loading ? 
        ( <Skeleton/>)
        :(
            <View style={styles.header}>
                <Text style={styles.textHeader}>Olá, {usuario}!</Text>
                <Image source={require("./../../Image/logo.png")} style={styles.imageHeader} />
            </View>
        )}

            <View style={styles.content}>

                <View>
                    <Image source={require('../../Image/banner-1.jpg')} style={{width: '100%', borderRadius: 18, elevation: 8, marginTop: 15}}/>
                </View>


                <Text style={{fontWeight: '900', marginVertical: 8}}>Acesso Rápido</Text>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        
                        <TouchableOpacity onPress={()=> navigation.navigate('Agendar')} style={{height: 120, width: 120, alignItems: 'center', justifyContent: 'center', gap: 5}}>
                            <View style={styles.buttonMenu}>
                                <Icon name='calendar-plus' size={36} color={Colors.branco}/>
                            </View>
                            <Text style={{fontSize: 12, alignSelf: 'center'}}>Agendar Consulta </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: 120, width: 120, alignItems: 'center', justifyContent: 'center', gap: 5}}>
                            <View style={styles.buttonMenu}>
                                <Icon name='calendar-remove' size={36} color={Colors.branco}/>
                            </View>
                            <Text style={{fontSize: 12}}>Cancelar Consulta </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: 120, width: 120, alignItems: 'center', justifyContent: 'center', gap: 5}}>
                            <View style={styles.buttonMenu}>
                                <Icon name='calendar-question' size={36} color={Colors.branco}/>
                            </View>
                            <Text style={{fontSize: 12}}>Notificar Ausência </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: 120, width: 120, alignItems: 'center', justifyContent: 'center', gap: 5}}>
                            <View style={styles.buttonMenu}>
                                <Icon name='calendar-search' size={36} color={Colors.branco}/>
                            </View>
                            <Text style={{fontSize: 12}}>Procurar Consulta </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                
                <View>
                    <Text style={{fontWeight: '900'}}>Consulta Agendadas </Text>
                    <View>
                        {loadingConsultas ? 
                            <ConsultasSkeleton />
                        : (
                            <FlatList 
                                data={consultas}
                                key={(item)=> item.id}
                                renderItem={({item}) => (
                                    <TouchableOpacity style={styles.consultasList}>
                                        <View style={{width: 70}}>
                                            <Icon name='account-circle' color={Colors.azulClaro} size={70}/>
                                        </View>
                                        <View style={{justifyContent:'space-around', marginHorizontal: 15, height: 70, width: '100%'}}>
                                            <Text style={{fontWeight: '900', fontSize: 16}}>{item.medico}</Text>
                                            <Text>{item.motivo}</Text>
                                            <Text>{item.data}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                />

                        )
                        }
                    </View>

                </View>
                

            </View>
   
        
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.azulPrincipal
    },
    header:{
        backgroundColor: Colors.azulPrincipal,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        
    },
    imageHeader:{
        height: 70,
        width: 90
    },
    textHeader:{
        color: Colors.branco,
        fontSize: 24,
        fontWeight: 'bold'
    },
    content:{
        backgroundColor: Colors.brancoFundo,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingHorizontal: 15,
        flex: 1
    },
    buttonMenu:{
        backgroundColor: Colors.azulPrincipal,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 12,
    },
    consultasList:{
        backgroundColor: Colors.branco,
        borderRadius: 12,
        elevation: 4,
        paddingVertical: 12,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8,
        
    }

})