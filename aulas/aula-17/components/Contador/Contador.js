import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import ContadorDisplay from './ContadorDisplay'
import Parimpar from './Parimpar'
import ContadorMais from './ContadorMais'
import ContadorMenos from './ContadorMenos'

export default props => {
  const [num, setNum] =useState(0)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return(
    <>
      <Text style={Estilo.txtS}>
        Contador
      </Text>
      <Text>
        <ContadorMenos dec = {dec}/> 
        <ContadorDisplay num = {num}/>
        <ContadorMais inc = {inc}/>
      </Text>
      <Parimpar num = {num}/>
    </>
  )
}