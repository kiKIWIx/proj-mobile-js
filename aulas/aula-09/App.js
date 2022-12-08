import { SafeAreaView, Text,View } from 'react-native'

import Aleatorio from './components/Aleatorio'
import Estilo from './components/Estilo'
import Aleatorio2 from './components/Aleatorio2'

export default()=>(
  <SafeAreaView style={Estilo.App}>
  <Text style={Estilo.txtS}><b>Mostrando valor aleatório</b></Text>
  <View style={Estilo.box}>
  <Aleatorio min={12} max={45}/>
  </View>
  <View style={Estilo.box}>
  <Aleatorio min={15} max={17}/>
  </View>
  </SafeAreaView>
)