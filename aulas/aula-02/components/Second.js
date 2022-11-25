import { Text, StyleSheet } from 'react-native';

export default ()=>(
  <Text style={style.paragrafo}>
  O resultado é: {4+ 4}
  </Text>
);

const style =StyleSheet.create(
  {
    paragrafo: {
      paddingTop: 5,
      color: 'white',
      fontSize:20,
      backgroundColor: 'black',
      fontFamily: 'Arial'
    }
  }
)