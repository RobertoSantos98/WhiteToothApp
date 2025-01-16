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

export default { getMedicos, getAgenda }