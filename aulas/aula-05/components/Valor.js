import * as React from 'react';
import { View, Text,  StyleSheet,} from 'react-native';

export default() => (
  <View>
    <Text style={style.valor}>{4*5}</Text>
  </View>
)

const style= StyleSheet.create(
  {
    valor:{
      color:'white',
      fontSize:'1.2em',
      fontWeight:'bold'
    }
  }
)