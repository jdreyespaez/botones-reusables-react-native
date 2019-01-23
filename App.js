// Paso 7: Importando los componentes que se necesitarán
import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Boton from './Boton';

// Paso 8: Un componente sin estado que muestra el mensaje según el tipo de botón
function onPressBtn() {
  Alert.alert('Alerta', '¡Has hecho tap en el botón!');
}

const MainApp  = () => (
  <View style={styles.container}>
    <Boton style={styles.btn}> Botón estándar </Boton>
    <Boton success style={styles.btn}> Botón de éxito </Boton>
    <Boton info style={styles.btn}> Botón de información </Boton>
    <Boton danger rounded style={styles.btn} onPress={onPressBtn}> Botón redondo de Emergencia </Boton>
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

