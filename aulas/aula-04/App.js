import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

//Organizando Componentes
export default()=>(
  <SafeAreaView style={style.body}>
    <View style={style.container}>
      <View style={style.conteudo}>
        <View style={style.h1}>
          <Text style={style.resultado}>O resultado é:</Text>
        </View>
        <Text style={style.valor}>{2548+1536}</Text>
      </View>
    </View>
  </SafeAreaView>    
)

const style = StyleSheet.create(
  {
    container:{
      justifyContent:'center',
      display:'flex',
      alignItems:'center'
    }, 
    conteudo:{
      width:'80%',
      padding: 15,
      textAlign: 'center',
      marginTop: '40%',
      backgroundColor: '#606060',
      borderRadius: 20
    },
    h1:{
      fontSize: 8,
      backgroundColor: '#404040',
      color:'white',
      display:'block',
      margin: '0.67em'
    },
    resultado:{
      color:'white'
    },
    valor:{
      color:'white',
      fontSize:'1.2em',
      fontWeight:'bold'
    }
  }
)
