import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Colors from '../../Components/Colors';


export default function Agendar() {
  const [ medico, setMedico ] = useState();
  const [ descricao, setDescricao ] = useState();
  const [ data, setData ] = useState();


 return (
   <View style={styles.container}>
      <Modal />




      <Text style={{fontSize: 18, marginVertical: 8}}>Agendar Consulta </Text>
      <View style={{gap: 4}}>
        <Text>Escolha o seu Médico: </Text>
        <TouchableOpacity style={styles.input} onPress={setModalMedico} />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.brancoFundo,
    paddingHorizontal: 15
  },
  input:{
    backgroundColor: "#FFF",
    elevation: 12,
    height: 70,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 18
},
})