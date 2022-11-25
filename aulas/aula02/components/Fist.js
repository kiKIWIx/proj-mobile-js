import { Text, StyleSheet } from 'react-native';

export default ()=>(
  <Text style={style.paragrafo}>
  Olá
  </Text>
);

const style =StyleSheet. create(
  {
    paragrafo: {
      padding: '5px, 42px',
      color: 'black',
      fontSize: 20,
      backgroundColor: 'white',
    }
  }
)


