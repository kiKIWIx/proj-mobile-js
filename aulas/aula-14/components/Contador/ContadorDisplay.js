import React from 'react'
import { SafeAreaView, Text, StyleSheet} from 'react-native'
import Estilo from  '../Estilo'


export default props =>{
  return (
    <SafeAreaView>
      <Text style = {Estilo.txtG}>
        {props.num}
      </Text>
    </SafeAreaView>   
  )
}