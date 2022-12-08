import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import H1 from './H1'
import Valor from './Valor'

export default() => (
  <View>
   <Text style={style.conta}>Multiplicação</Text> 
    <Text style={style.conta}> 4*5 </Text>
  </View>
)

const style= StyleSheet.create(
  {
   conta:{
      color:'white',
      color:'white',
      fontWeight:'bold'
   }
  }
)