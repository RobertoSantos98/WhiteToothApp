import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal as RNModal } from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../Colors';

export default function CustomModal({dados, modalAbertura, onClose, renderFields, onSelect}){

    const mappedData = Array.isArray(dados)
    ? dados.map((item) => ({
        id: item.id,
        title: item[renderFields.title], // Nome do campo passado em renderFields
        subtitle: item[renderFields.subtitle], // Nome do campo passado em renderFields
        complemento: item[renderFields.complemento] ?? true
      }))
    : []; // Caso 'dados' não seja um array, retorna um array vazio


    return(
        <RNModal transparent visible={modalAbertura}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <View style={styles.modalContainer}>
                <View style={{ flexDirection:'row', justifyContent: 'space-between', paddingVertical: 12}}>
                  <Text>Selecione uma opção:  </Text>
                  <TouchableOpacity onPress={onClose}  >
                    <Icon name='close' size={24} color={Colors.cinza} />
                  </TouchableOpacity>
                </View>
                  <FlatList 
                    data={mappedData}
                    key={(item) => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity onPress={() =>{
                        if(item.complemento){
                          onSelect(item)
                        }
                      }} 
                         style={{
                                backgroundColor: item.complemento ? Colors.cinza : Colors.brancoFundo, 
                                borderRadius: 4, 
                                marginVertical: 4, 
                                paddingHorizontal: 8, 
                                paddingVertical: 4
                                }}>
                        <Text style={{fontSize: 18,
                             fontWeight: 'bold',
                             color: item.complemento ? "#000" : Colors.cinza
                             }}>{item.title}</Text>
                        <Text style={{fontSize: 12, color: item.complemento ? "#000" : Colors.cinza }}>{item.subtitle}</Text>
                      </TouchableOpacity>
                    )}
                  />
              </View>

            </View>
        </RNModal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        width: '90%',
        maxHeight: '80%',
        elevation: 8,
        backgroundColor: Colors.branco,
        borderRadius: 8,
        paddingHorizontal: 4,
        
      }
})