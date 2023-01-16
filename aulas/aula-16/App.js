import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import Parimpar from './components/Parimpar'


export default()=>{
  <SafeAreaView style={style.App}>
    <Parimpar num={13}/>
  </SafeAreaView>
  
}

const style=StyleSheet.create({
  App:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
})