import Login from './src/Pages/Login';
import { StatusBar } from 'react-native';
import Colors from './src/Components/Colors';
import Routes from './src/Components/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const [logado, setLogado] = useState(false);

  const handleLogin = async (userData) => {
    
    try{

      if (!userData) {
        throw new Error("Não foi possível logar.");
      } else {
        console.log(userData);
        await AsyncStorage.setItem('usuario', userData.usuario);
        await AsyncStorage.setItem('token', userData.token);

      }


    } catch (error) {
      console.log("Erro ao logar: ", error);
      
    } finally {
      setLogado(true);
    }

  }

  

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.azulPrincipal}/>
      {logado ? <Routes/> : <Login onLogin={handleLogin}/>} 
    </NavigationContainer>
  );
} 