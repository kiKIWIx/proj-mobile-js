import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
  return(
    <View style = {style.Space}>
      <Button style = {style.Botao}
      title="-"
      onPress = {props.dec}
      />
    </View>
  )
}
const style = StyleSheet.create({
  Space:{
    flexDirection: 'row'
  },
  Botao:{
    display: 'flex',
    margin: 5,
    padding: 10
  }
})