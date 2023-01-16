import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Parimpar from './components/Parimpar'


export default()=>{
  <SafeAreaView style={style.App}>
    <View>
      <Parimpar num={13}/>
    </View>
  </SafeAreaView>
}

const style=StyleSheet.create({
  App:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: 'white'
  }
})