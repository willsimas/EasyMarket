import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function SignInForm(){
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.title}>E-mail ou Login</Text>
            <TextInput
            placeholder='Digite seu E-mail ou Login'
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
        </View>
    )
}