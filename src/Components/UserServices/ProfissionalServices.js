import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = "http://192.168.1.112:5175";

const getMedicos = async () => {

    const response = await axios.get(`${baseURL}/api/medico`)

    return response.data.dados
}

const getAgenda = async () => {

    const response = await axios.get(`${baseURL}/agenda`)

    return response.data.dados
}

const MarcarConsulta = async (dados) => {

    const token = await AsyncStorage.getItem("token");

    console.log(token)
    console.log(dados)
    try {
        const response = await axios.post(`${baseURL}/api/consulta`, dados, {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        return response.data.dados;
        
    } catch (error) {
        alert(error)
    }
}

const MarcarAgenda = async(dados) => {
    try {
        const response = await axios.post(`${baseURL}/agenda`, dados, {
            headers:{
                'Content-Type': 'application/json',
            }
        })

        return response.data.dados
    } catch (error) {
        
    }
}

export default { getMedicos, getAgenda, MarcarConsulta, MarcarAgenda }