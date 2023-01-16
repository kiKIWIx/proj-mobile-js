import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Diferenciar from './components/Diferenciar'

//Difenciando Android de IOS
export default()=>(
  <SafeAreaView style={styles.App}>
    <Diferenciar/>
  </SafeAreaView>

);

const styles = StyleSheet.create({
App:{
  flex:1,
  justifyContent:"center",
  alignItems:'center',
  backgroundColor:"#000"
}
})