import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import Colors from '../../Components/Colors';
import { useEffect, useRef } from 'react';


const { width } = Dimensions.get('window');
export default function Home() {
    const x = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(Animated.timing(x, {
            toValue:1,
            useNativeDriver: true,
            duration: 1000,
        })).start();
    }, [])


 return (
   <View style={styles.container}>
        <View style={styles.boxName}>
            <Animated.View style={[styles.line, {
                transform: [
                    {
                    translateX: x.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-200, width],
                    })
            }
            ]
            }]}/>
        </View>
        <View style={styles.imageHeader}>
            <Animated.View style={[styles.line, {
                transform: [
                    {
                    translateX: x.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-200, width],
                    })
            }
            ]
            }]}/>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.azulPrincipal,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    boxName: {
        height: 24,
        width: "70%",
        backgroundColor: Colors.cinza,
        borderRadius: 6,
        overflow: "hidden",
    },
    line: {
        height: "100%",
        width: 200,
        backgroundColor: '#90A4AE',
    },
    imageHeader:{
        height: 70,
        width: 70,
        backgroundColor: Colors.cinza,
        borderRadius: 60,
        overflow: "hidden",
    },
})