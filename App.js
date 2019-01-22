import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Boton from './Boton';

// Paso 8:
function onPressBtn() {
  Alert.alert('Alert', 'You clicked this Boton!');
}

const MainApp  = () => (
  <View style={styles.container}>
    <Boton style={styles.btn}> My first Boton </Boton>
    <Boton success style={styles.btn}> Success Boton </Boton>
    <Boton info style={styles.btn}> Info Boton </Boton>
    <Boton danger rounded style={styles.btn} onPress={onPressBtn}> Rounded Boton </Boton>
  </View>
);

const styles = StyleSheet.create({
  // Paso 9: Agregando estilo a los botones
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 10,
  },
});

export default MainApp;

// export default class App extends React.Component {  
//   render() {
//     return (

//     );
//   }
// }

