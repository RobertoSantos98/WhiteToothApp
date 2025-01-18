import { ActivityIndicator, View, StyleSheet, Text, Modal } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function LoadingScreen({texto, loading}) {
 return (
   <Modal transparent visible={loading} animationType='slide'>
    <View style={styles.container}>
        <Icon name='emoticon-excited-outline' size={146} color={Colors.azulClaro}/>
        <Text style={{fontSize: 24, color: Colors.azulClaro, fontWeight: 'bold'}}>{texto}</Text>
    </View>
   </Modal>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        backgroundColor: Colors.azulPrincipal,
    },
})