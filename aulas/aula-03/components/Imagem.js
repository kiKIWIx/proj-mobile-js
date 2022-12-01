import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default()=>{
  <View>
    <Image style={style.logo} source={require('../assets/logo.jpg')}/>
  </View>  
}

const style = StyleSheet.create(
  {
    logo:{
      width: 128,
      height:'auto',
      borderRadius: 20,
    }
  }
)