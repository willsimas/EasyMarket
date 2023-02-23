import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TextInput , TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function ButtonMercadoria() {
  const navigation = useNavigation();
  return (
  

        <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
                onPress={()=> navigation.navigate('')}
                >
                <Image 
                source={require('./itens.png')}
                />
                <Text style={styles.itemsTextButton}>Sem GLúten</Text>
                </TouchableOpacity>
        </View>

);