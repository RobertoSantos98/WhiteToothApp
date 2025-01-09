import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const baseURL = "http://192.168.1.112:5175";



const Login = async (login) => {

    try {
        const response = await axios.post(`${baseURL}/api/login/auth`, login,{
            headers:{
                'Content-Type':'application/json'
            },
        });
        
        const dados = {
            token : response.data.mensagem,
            usuario : response.data.dados.login,
            idusuario: response.data.dados.idusuario
        };
        
        return dados;

        
    } catch(error) {
        if (error.response) {
            console.log("Erro na resposta:", error.response.data);
            console.log("Status:", error.response.status);
            console.log("Cabeçalhos:", error.response.headers);
        } else if (error.request) {
            console.log("Nenhuma resposta recebida:", error.request);
        } else {
            console.log("Erro ao configurar requisição:", error.message);
        }
        console.log(error.config);
        alert("Erro na requisição");
        console.log(error);
    }
}


export default { Login }