import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../Pages/Home';
import MeuPlano from '../../Pages/MeuPlano';
import Profissionais from '../../Pages/Profissionais';
import Agendar from '../../Pages/Agendar';

import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigation() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Routes} />
        <Stack.Screen name="Agendar" component={Agendar} />
      </Stack.Navigator>
    );
  }


function Routes() {
  return (
    <Tab.Navigator screenOptions={{
        animation: 'shift',
        headerShown: false,
        tabBarStyle:{
            position: 'absolute', 
            backgroundColor: Colors.azulPrincipal, 
            height: 60,
            borderRadius: 12,
            marginBottom: 10,
            marginHorizontal: 10
        },
        
    }} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused, color, size}) => {
            return(
                <Icon 
                    name={focused? 'home' : 'home-outline'}
                    size={30}
                    color={focused? Colors.branco : Colors.azulClaro}
                />
            )},
        tabBarLabelStyle:{
            fontSize: 14,
            color: Colors.branco
        }
      }}
      />
      <Tab.Screen name="MeuPlano" component={MeuPlano} options={{
        tabBarIcon: ({focused, color, size}) => {
            return(
                <Icon 
                    name={focused? 'account' : 'account-outline'}
                    size={30}
                    color={focused? Colors.branco : Colors.azulClaro}
                />
            )},
        tabBarLabelStyle:{
            fontSize: 14,
            color: Colors.branco
        }
      }}/>
      <Tab.Screen name="Profissionais" component={Profissionais} options={{
        tabBarIcon: ({focused, color, size}) => {
            return(
                <Icon 
                    name={focused? 'account-group' : 'account-group-outline'}
                    size={30}
                    color={focused? Colors.branco : Colors.azulClaro}
                />
            )},
        tabBarLabelStyle:{
            fontSize: 14,
            color: Colors.branco
        }
      }}/>

    </Tab.Navigator>
  );
}

export default StackNavigation;