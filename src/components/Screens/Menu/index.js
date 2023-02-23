import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TextInput , TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
          <Animatable.View 
          style={styles.signInHeader}
          animation="fadeInDown"
          delay={500}
          >
                <View style={styles.headerBox}>
                  <Animatable.View
                  animation="fadeInDown"
                  style={styles.backButtonBox}>
                  
                  <TouchableOpacity style={styles.backButton}
                  onPress={()=> navigation.navigate('SignIn')}
                  >
                  <Text style={styles.textBackButton}>Voltar</Text>
                  </TouchableOpacity>
                  </Animatable.View>
                    <View style={styles.userButtonBox}>
                    <TouchableOpacity style={styles.userButton}>
                      <Text style={styles.textUserMsg}> Olá</Text>
                      <Text style={styles.textUserName}>Usuário!</Text>
                    </TouchableOpacity>
                    </View>
                </View>
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
          
          <View style={styles.containerBoxes}>

            <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
                onPress={()=> navigation.navigate('ItemsMarket')}
                >
                <Image 
                source={require('./itens.png')}
                />
                <Text style={styles.itemsTextButton}>Itens</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
            onPress={()=> navigation.navigate('Menu')}
            >
            <Image 
                source={require('./cart.png')}
                />
            <Text style={styles.itemsTextButton}>Carrinho</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
            onPress={()=> navigation.navigate('Menu')}
            >
            <Image 
                source={require('./localizador.png')}
                />
            <Text style={styles.itemsTextButton}>Localizador</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
              <TouchableOpacity style={styles.itemsButton}
              onPress={()=> navigation.navigate('Menu')}
              >
              <Image 
                source={require('./carteira.png')}
                />
                <Text style={styles.itemsTextButton}>Carteira</Text>
              </TouchableOpacity>
             </View>
            
             <View style={styles.screensButtons}>
              <TouchableOpacity style={styles.itemsButton}
              onPress={()=> navigation.navigate('Menu')}
              >
              <Image 
                source={require('./promo.png')}
                />
                <Text style={styles.itemsTextButton}>Promoções</Text>
                </TouchableOpacity>
             </View>
             
             <View style={styles.screensButtons}>
             <TouchableOpacity style={styles.itemsButton}
             onPress={()=> navigation.navigate('Menu')}
             >
             <Image 
                source={require('./contato.png')}
                />
             <Text style={styles.itemsTextButton}>Contato</Text>
             </TouchableOpacity>
             </View>
             
             </View>
             </Animatable.View>
             
             </View>
    );
};