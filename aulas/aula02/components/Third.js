import { View, StyleSheet } from 'react-native'

export default()=>(
  <View style={style.paragrafo}>
  O resultado é: {
   soma()
  }

  </View>
)

function soma(){
  x = 6
y = 2
res = x + y
return res

}

const style = StyleSheet.create(
  {
    paragrafo: {
      paddingTop: 5,
      color: 'red',
      fontSize:20,
      backgroundColor: 'black',
      fontFamily: 'Arial'
    }
  }
)