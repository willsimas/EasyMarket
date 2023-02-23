import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
          <Animatable.View 
          style={styles.signInHeader}
          animation="fadeInDown"
          delay={500}
          >
            <Text></Text>
          </Animatable.View>
          
          <Animatable.View 
          animation="fadeInUp"
          style={styles.formContainer}>
              <Animatable.Image 
              animation="fadeInUp"
              delay={800}
              source={require('./logo1.png')}
              style={styles.imgLogo}
              resizeMode="contain"
              />
              <Text style={styles.title}>E-mail</Text>
              <TextInput
              placeholder='Digite seu E-mail'
              style={styles.input}/>

              <Text style={styles.title}>Senha</Text>
              <TextInput
              placeholder='Digite sua Senha'
              style={styles.input}/>

              <TouchableOpacity style={styles.button}
              onPress={()=> navigation.navigate('Menu')}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonRegister}
              onPress={()=> navigation.navigate('SignUp')}
              >
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se!</Text>
              </TouchableOpacity>

            </Animatable.View>
          </View>
    );
};