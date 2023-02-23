import React from 'react';
import { View, SafeAreaView, useState, Image, Text, TextInput , TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function ItemsMarket() {
  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
          <Animatable.View 
          style={styles.signInHeader}
          animation="fadeInDown"
          delay={500}
          >
                <View style={styles.headerBox}>
                    <TouchableOpacity style={styles.backButton}
                    onPress={()=> navigation.navigate('SignIn')}
                    >
                    <Text style={styles.textBackButton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userName}>
                      <Text style={styles.textUserName}> Olá</Text>
                    </TouchableOpacity>
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
                onPress={()=> navigation.navigate('')}
                >
                <Image 
                source={require('./itens.png')}
                />
                <Text style={styles.itemsTextButton}>Sem GLúten</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
            onPress={()=> navigation.navigate('Menu')}
            >
            <Image 
                source={require('./cart.png')}
                />
            <Text style={styles.itemsTextButton}>Zero Lactose</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
            <TouchableOpacity style={styles.itemsButton}
            onPress={()=> navigation.navigate('Menu')}
            >
            <Image 
                source={require('./localizador.png')}
                />
            <Text style={styles.itemsTextButton}>Integrais</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.screensButtons}>
              <TouchableOpacity style={styles.itemsButton}
              onPress={()=> navigation.navigate('Menu')}
              >
              <Image 
                source={require('./carteira.png')}
                />
                <Text style={styles.itemsTextButton}>Diets</Text>
              </TouchableOpacity>
             </View>
            
             <View style={styles.screensButtons}>
              <TouchableOpacity style={styles.itemsButton}
              onPress={()=> navigation.navigate('Menu')}
              >
              <Image 
                source={require('./promo.png')}
                />
                <Text style={styles.itemsTextButton}>Zero Álcool</Text>
                </TouchableOpacity>
             </View>
             
             <View style={styles.screensButtons}>
             <TouchableOpacity style={styles.itemsButton}
             onPress={()=> navigation.navigate('Menu')}
             >
             <Image 
                source={require('./contato.png')}
                />
             <Text style={styles.itemsTextButton}>Higiene</Text>
             </TouchableOpacity>
             </View>
             
             </View>
             </Animatable.View>
             
             </View>
    );
};