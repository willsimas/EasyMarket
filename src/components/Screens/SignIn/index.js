import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SignInForm from '../../SignInForm';

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
            <SignInForm />  

            </Animatable.View>
          </View>
    );
};