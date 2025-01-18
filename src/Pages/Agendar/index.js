import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Colors from '../../Components/Colors';
import LoadingScreen from '../../Components/loadingScreen';
import TelaPersonalizavel from '../../Components/TelaPersonalizavel'

import ProfissionalServices from '../../Components/UserServices/ProfissionalServices';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomModal from '../../Components/ModalOptions';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Agendar() {
  const [ idusuario, setIdUsuario ] = useState();
  const [ medicoSelected, setMedico ] = useState('');
  const [ descricao, setDescricao ] = useState('');
  const [ dataSelected, setData ] = useState('');

  const [ medicos, setMedicos ] = useState();
  const [ datasAgenda, setDatasAgenda ] = useState();

  const [ modalMedico, setModalMedico ] = useState(false);
  const [ modalDia, setModalDia ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  useEffect(()=>{
    salvarUsuario()
  },[medicoSelected])

  useEffect(()=> {
    const timeout = setTimeout(() => { 
    setSuccess(false)
  }, 5000);

  return () => clearTimeout(timeout)

  },[success])

  const salvarUsuario = async () =>{
    try {
      const idusuario = parseInt(await AsyncStorage.getItem('idusuario'), 10);
      setIdUsuario(idusuario);
    } catch (error) {
      alert("Não foi possivel recuperar o Id do Usuário!");
    }

  }

  const renderMedicos = async () => {

    try {
      setModalMedico(true)
      const response = await ProfissionalServices.getMedicos()
      setMedicos(response);
    } catch (error) {
      alert(error)
    }
  }

  const renderDia = async () => {
    try {
      setModalDia(true)
      const response = await ProfissionalServices.getAgenda()
      setDatasAgenda(response);
    } catch (error) {
      alert(error);
    } 
    }

    const handleMedicoSelect = (item) => {
      setMedico(item);
      setModalMedico(false);
    }

    const handleDataSelect = (item) => {
      setData(item);
      setModalDia(false);
    }

    const handleSubmit = async () => {

      console.log('handleSubmit foi chamado');
      console.log(dataSelected);

      if (!datasAgenda || !idusuario || !medicoSelected?.id || !descricao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const { title: data, subtitle: hora } = dataSelected;

      const [dia, mes, ano] = data.split('/'); // Divide a data em partes
      const dataFormatada = `${ano}-${mes}-${dia}`; // Rearranja as partes no formato ISO
      const horaFormatada = `${hora}:00`;

    // Combina a data formatada com o horário
      const dataHoraCompleta = `${dataFormatada}T${hora}:00`;

      const formattedData = {
        pacienteId: Number(idusuario), // Converte para número, caso seja string
        medico_id: Number(medicoSelected.id), // Converte para número, caso seja string
        descricao: descricao,
        data_hora: new Date(dataHoraCompleta).toISOString(), // Converte para o formato ISO 8601
      };

      try {
        setLoading(true);

        const response = await ProfissionalServices.MarcarConsulta(formattedData)
        
        setMedico('');
        setDescricao('');
        setData('')
        
        const criarAgenda = {
          consulta_id: response.id,
          data: dataFormatada,
          hora: horaFormatada
        }

        const responseAgenda = await ProfissionalServices.MarcarAgenda(criarAgenda)

      } catch (error) {
        alert(error)
      } finally{
        setLoading(false);
        setSuccess(true);
        
      }

    }



 return (
   <View style={styles.container}>
     
      <CustomModal dados={medicos} modalAbertura={modalMedico} onClose={()=> setModalMedico(false)} renderFields={{title: 'nomecompleto', subtitle: 'especializacao'}} onSelect={handleMedicoSelect}/>
      <CustomModal dados={datasAgenda} modalAbertura={modalDia} onClose={()=> setModalDia(false)} renderFields={{title: 'data', subtitle: 'hora', complemento: 'disponivel'}} onSelect={handleDataSelect}/>

      <LoadingScreen texto='Estamos agendando sua consulta' loading={loading}/>
      <TelaPersonalizavel texto='Consulta Agendada!' loading={success}/>

      <View style={{backgroundColor: Colors.azulPrincipal, paddingHorizontal: 15, paddingVertical: 24}}>
        <Text style={{fontSize: 24, marginVertical: 6, color: Colors.branco, fontWeight: 'bold'}}>Agendar Consulta </Text>
      </View>
      <View style={{gap: 4, paddingHorizontal: 15, marginTop: 15}}>
        <Text>Escolha o seu Médico: </Text>
        <TouchableOpacity style={styles.input} onPress={renderMedicos}>
          <Text style={{fontSize: 24, color: Colors.cinza, elevation: 16, paddingHorizontal: 8}}>{medicoSelected.title} </Text>
          <Icon name='arrow-down-bold-box' size={54} color={Colors.brancoFundo} />
        </TouchableOpacity>

        <Text>Escolha a data: </Text>
        <TouchableOpacity style={styles.input} onPress={renderDia}>
          {dataSelected ? <Text style={{fontSize: 24, color: Colors.cinza, elevation: 16, paddingHorizontal: 8}}>{dataSelected.title} ás {dataSelected.subtitle} </Text>
          : <Text/>
           }
          
          <Icon name='arrow-down-bold-box' size={54} color={Colors.brancoFundo} />
        </TouchableOpacity>

        <Text>Motivo da Consulta: </Text>
        <TextInput style={[styles.input, {fontSize: 24, color: Colors.cinza, elevation: 16, paddingHorizontal: 8}]} onChangeText={setDescricao} value={descricao}/>

      </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit} activeOpacity={0.7}>
          <Text style={{fontSize: 18, color: Colors.branco}}>Agendar </Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.brancoFundo,
  },
  input:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#FFF",
    elevation: 12,
    height: 70,
    borderRadius: 4,
    borderWidth: 0.2
},
btnSubmit:{
  backgroundColor: Colors.azulPrincipal,
  width: '90%',
  paddingVertical: 14,
  borderRadius: 4,
  alignItems: 'center',
  position: 'absolute',
  bottom: 12,
  alignSelf: 'center',
}
})