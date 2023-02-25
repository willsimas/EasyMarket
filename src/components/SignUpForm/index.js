import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function SignUpForm() {

  const navigation = useNavigation();

  return (
    <View>
        <Text style={styles.title}>Login</Text>
        <TextInput
        placeholder='Digite seu nome de Login'
        style={styles.input}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput
        placeholder='Digite sua Senha'
        style={styles.input}/>

        <Text style={styles.title}>Confirme sua Senha</Text>
        <TextInput
        placeholder='Digite sua senha novamente'
        style={styles.input}/>

        <Text style={styles.title}>E-mail</Text>
        <TextInput
        placeholder='Digite seu E-mail'
        style={styles.input}/>

        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}
        onPress={()=> navigation.navigate('SignIn')}
        >
          <Text style={styles.registerText}>Já possui uma conta?</Text>
        </TouchableOpacity>
    </View>

  )
}