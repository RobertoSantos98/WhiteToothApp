import { ActivityIndicator, View, StyleSheet, Text, Modal } from 'react-native';
import Colors from '../Colors';

export default function LoadingScreen({texto, loading}) {
 return (
   <Modal transparent visible={loading}>
    <View style={styles.container}>
        <ActivityIndicator size={150} color={Colors.azulPrincipal}/>
        <Text>{texto}</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
})