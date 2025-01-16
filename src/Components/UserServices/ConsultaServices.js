import axios from "axios";



const baseURL = "http://192.168.1.112:5175";

const ConsultaPorPaciente = async (idusuario, token) => {
    
    try {
        const response = await axios.get(`${baseURL}/api/consulta/paciente/${idusuario}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        console.log(response.data.dados)

        return response.data.dados;

    } catch (error) {
        console.log(error)
    }
}

export default { ConsultaPorPaciente }