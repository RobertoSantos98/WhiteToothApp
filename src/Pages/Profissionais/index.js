
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import Colors from '../../Components/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useEffect, useState } from 'react';

import Skeleton from './agenda-skeleton';
import ConsultasSkeleton from '../Home/skeleton-consultas';
import ProfissionalServices from '../../Components/UserServices/ProfissionalServices';

export default function Profissionais() {

  const [ loading, setLoading ] = useState(true);
  const [ medicos, setMedicos ] = useState(null);
  const [ agenda, setAgenda ] = useState(null);
  
  useEffect(() => {
    const timeout = setTimeout(()=> {
      getMedicos();
      getAgenda();

    }, 3000)

    return () => clearTimeout(timeout);
  }, [])


  const getMedicos = async () =>{

    try{
      const response = await ProfissionalServices.getMedicos();
      setMedicos(response);

    } catch(error){
      alert(error)

    } 
  }

  const getAgenda = async () => {
    try {
      const response = await ProfissionalServices.getAgenda()
      setAgenda(response);

    } catch (error) {
      alert(error)
    } finally{
      setLoading(false)
    }
  }



 return (
   <View style={styles.container}>

        <Text style={{fontSize: 16, marginVertical: 8}}>Profissionais: </Text>
        <View style={{flex: 2}}>
          { loading? <ConsultasSkeleton/> :
              <FlatList
                data={medicos}
                key={(item) => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity style={{flexDirection: 'row', backgroundColor: Colors.branco, gap: 8, marginVertical: 4, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 4}}>
                    <View style={{width: 70}}>
                      <Icon name='account-circle' color={Colors.azulClaro} size={70}/>
                    </View>
                    <View style={{gap: 4, justifyContent: 'center'}}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.nomecompleto}</Text>
                      <Text>{item.especializacao}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />

          }

        </View>
        <View style={{flex: 3}}>
            <Text style={{fontSize: 16, marginVertical: 8}}>Horários disponíveis: </Text>

          {loading ? <Skeleton/> :
              <FlatList
              data={agenda}
              key={(item) => item.id}
              renderItem={({item}) => (
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: Colors.branco, gap: 8, marginVertical: 4, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 8, justifyContent: 'space-between'}}>

                  <View style={{gap: 4, justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.data}</Text>
                    <Text>{item.hora} </Text>
                    <Text>{item.medico} </Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Icon name='checkbox-multiple-blank-circle' color={item.disponivel? "#30AD23" : "red"} size={40}/>
                  </View>
                </TouchableOpacity>
              )}
            />

          }
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.brancoFundo,
    paddingHorizontal: 15,
  }
})