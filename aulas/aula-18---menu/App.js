import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';

export default ()=>(
  <View style={style.App}>
    <Image style={style.Logo} source={require('./assets/X-tudo.jpg')}/>
    <Text style={style.Texto}>
    X-tudo 30$
    </Text>
  </View>
)

const style=StyleSheet.create({
  App:{
    flex: 1,
    alignItems: "left",
    backgroundColor: 'black'
  },
  Texto:{
    color:'white'
  },
  Logo: {
    height: 128,
    width: 128,
    borderRadius: 10,
    
  }
})