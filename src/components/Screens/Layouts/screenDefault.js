import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
export default function screenDefault(){
  return (
    <View>
      <SafeAreaView>
        <View style={styles.homeContainer}>
        </View>
        <View style={styles.container}>
        <Image
        source={require('./logo1.png')}
        style={styles.imgLogo}
        />
        </View> 
        <StatusBar 
        style='dark'
        />
    </SafeAreaView>
    </View>
  )
}
