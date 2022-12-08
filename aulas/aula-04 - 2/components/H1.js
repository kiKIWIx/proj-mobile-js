import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default() => (
  <View style={style.h1}>
    <Text style={style.resultado}>
     O resultado é:
    </Text>
  </View>
)

const style= StyleSheet.create(
  { 
  h1:{
      fontSize: 12,
      backgroundColor: '#404040',
      color:'white',
      display:'block',
      margin: '0.67em'
    },
      resultado:{
      color:'white'
    }
  } 
)   