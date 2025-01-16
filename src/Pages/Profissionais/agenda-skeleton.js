import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

import Colors from '../../Components/Colors';

const { width } = Dimensions.get('window');


export default function Profissionais() {

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
        <View style={styles.content}>
                        <View style={{width: '90%', gap: 8, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={{gap: 8}}>

                                <View style={styles.boxSubtitle}>
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
                                <View style={styles.boxSubtitle}>
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
                            

                            

                            <View style={styles.imgDisponivel}>
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
        
                        
        </View>
        
        <View style={styles.content}>
                        <View style={{width: '90%', gap: 8, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={{gap: 8}}>

                                <View style={styles.boxSubtitle}>
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
                                <View style={styles.boxSubtitle}>
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
                            

                            

                            <View style={styles.imgDisponivel}>
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
        
                        
        </View>
        
        <View style={styles.content}>
                        <View style={{width: '90%', gap: 8, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={{gap: 8}}>

                                <View style={styles.boxSubtitle}>
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
                                <View style={styles.boxSubtitle}>
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
                            

                            

                            <View style={styles.imgDisponivel}>
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
        
                        
        </View>

        <View style={styles.content}>
                        <View style={{width: '90%', gap: 8, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={{gap: 8}}>

                                <View style={styles.boxSubtitle}>
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
                                <View style={styles.boxSubtitle}>
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
                            

                            

                            <View style={styles.imgDisponivel}>
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
        
                        
        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        gap: 8,
        marginVertical: 8,
    },
    content: {
        backgroundColor: Colors.branco,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 8,
        width: '100%',
        borderRadius: 8
    },
    boxName: {
        height: 24,
        width: "70%",
        backgroundColor: Colors.cinza,
        borderRadius: 6,
        overflow: "hidden",
    },
    boxSubtitle: {
        height: 14,
        width: "100%",
        backgroundColor: Colors.cinza,
        borderRadius: 6,
        overflow: "hidden",
    },
    line: {
        height: "100%",
        width: 200,
        backgroundColor: '#90A4AE',
    },
    imgDisponivel:{
        height: 40,
        width: 40,
        backgroundColor: Colors.cinza,
        borderRadius: 60,
        overflow: "hidden",
    }
})