import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import { StatusBar } from 'react-native';
import Colors from './src/Components/Colors';
import Routes from './src/Components/Routes';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.azulPrincipal}/>
      <Routes/>
    </NavigationContainer>
  );
}

