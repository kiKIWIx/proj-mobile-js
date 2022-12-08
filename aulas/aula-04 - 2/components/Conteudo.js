import * as React from 'react';
import { View, StyleSheet } from 'react-native'

import H1 from './H1'
import Valor from './Valor'
import Conta from './Conta'

export default() => (
  <View style={style.conteudo}>
    <View>
      <Conta/>
      <H1/>
      <Valor/>
    </View>
  </View>
)

const style= StyleSheet.create(
  {
    conteudo:{
      width:'80%',
      padding: 15,
      textAlign: 'center',
      marginTop: '40%',
      backgroundColor: '#606060',
      borderRadius: 20
    }
  }
)