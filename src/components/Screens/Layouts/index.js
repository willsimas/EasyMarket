import React from 'react';
import { View, SafeAreaView, useState, Text, TextInput , TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function ScreenStyleDefault() {
  const navigation = useNavigation();

  return (

      <View style={styles.container}>
      
      <Animatable.View 
      style={styles.signInHeader}
      animation="fadeInDown"
      delay={500}
      >

            <TouchableOpacity style={styles.backButton}
            onPress={()=> navigation.navigate('Menu')}
            >
            <Text style={styles.textBackButton}>Voltar</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.userButton}>
                <Text style={styles.textUserMsg}> Olá</Text>
                <Text style={styles.textUserName}>Usuário!</Text>
              </TouchableOpacity>

      </Animatable.View>
  
      <Animatable.View 
      animation="fadeInUp"
      style={styles.formContainer}>
      <Animatable.Image 
          animation="fadeInUp"
          delay={300}
          source={require('./logo1.png')}
          style={styles.imgLogo}
          resizeMode="contain"
          />
      
         </Animatable.View>
       </View>
    );
};
