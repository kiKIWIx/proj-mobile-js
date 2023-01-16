import React from 'react'
import {Text, Platform} from 'react-native'
import Estilo from './Estilo'

export default _ =>{
    if (Platform.OS ==='android'){
    return <Text style={Estilo.txtG}>Android</Text>
  }else if(Platform.OS ==='ios'){
    return <Text style={Estilo.txtG}t>iOS</Text>
  }else{
    return <Text style={Estilo.txtG}>Outro gato</Text>
  }
}