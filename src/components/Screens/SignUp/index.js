import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import SignUpForm from '../../SignUpForm';

export default function SignUp() {

  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
          <Animatable.View 
          style={styles.signInHeader}
          animation="fadeInDown"
          delay={500}

          >
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
              <SignUpForm />

            </Animatable.View>
          </View>
    );
};