import React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();


  return (
    <SafeAreaView
    >
      <View style={styles.homeContainer}>
        <Animatable.Image
        animation="fadeInDown"
        delay={500}
        source={require('./logo.png')}
        style={styles.imgLogo} 
        resizeMode='contain'
        />

        <Animatable.View
        delay={700}
        animation="fadeInDown"
        >
          <TouchableOpacity
          style={styles.buttonContent}
          onPress={()=> navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View> 
      <StatusBar
        backgroundColor="#006830"
        barStyle="dark-content"
        translucent
      />
    </SafeAreaView>
  );
};