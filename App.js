import Login from './src/Pages/Login';
import { StatusBar } from 'react-native';
import Colors from './src/Components/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StackNavigation from './src/Components/Routes';
import Routes from './src/Components/Routes';



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
        await AsyncStorage.setItem('idusuario', JSON.stringify(userData.idusuario));
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
      {logado ? <StackNavigation/> : <Login onLogin={handleLogin}/>} 
    </NavigationContainer>
  );
} 