import { Text } from 'react-native'

import Estilo from './Estilo'

function Comp1(){
  return <Text>Componente Oficial</Text>
}
function Comp2(){
  return <Text style={Estilo.txtG}>First Component</Text>
}
function Comp3(){
  return <Text style={Estilo.txtS}>First Component</Text>
}


export default Comp1
export {Comp2, Comp3}