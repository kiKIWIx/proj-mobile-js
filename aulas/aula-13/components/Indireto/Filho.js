import Reat from 'react'
import { Button, View } from "react-native"
import Estilo from '../Estilo'

export default props => {
  function gerarNumero(min,max)
  {
    const fator = max - min + 1
    return parseInt(Math.random()*fator) + min
  }
  return(
    <View>
    <Button
      title="Executar"
      onPress={
        function(){
          const n = gerarNumero(props.min, props.max)
          props.funcao(n)
        }
      }
    />
    </View>  
  )
}
