import { SafeAreaView, Text,View } from 'react-native'

import Aleatorio from './components/Aleatorio'
import Estilo from './components/Estilo'
import Aleatorio2 from './components/Aleatorio2'

export default()=>(
  <SafeAreaView style={Estilo.App}>
  <Text style={Estilo.txtS}><b>Mostrando valor aleatório</b></Text>
  <View style={Estilo.box}>
  <Aleatorio min={5} max={10}/>
  </View>
  <View style={Estilo.box}>
  <Aleatorio min={1} max={20}/>
  </View>
  </SafeAreaView>
)