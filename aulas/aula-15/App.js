import * as React from 'react';
import {SafeareaView, StyleSheet } from 'react-native';
import Diferenciar from './components/Diferenciar'

export default () =>(
    <SafeareaView style={styles.App}>
      <Diferenciar/>
    </SafeareaView>
  );

const styles = StyleSheet.create({
  App:{
   flex:1,
   justifyContent:"center",
   alignItems:'center',
   backgroundColor:"#000"
 }
});