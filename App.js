import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Boton from '.Boton';

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

export default class App extends React.Component {
  
  // Paso 8:
  function onPressBtn() {
    Alert.alert('Alert', 'You clicked this button!');
  }

  const MainApp  = () => (
    <View style={styles.container}>
      <Button style={styles.btn}> My first button </Button>
      <Button success style={styles.btn}> Success button </Button>
      <Button info style={styles.btn}> Info button </Button>
      <Button danger rounded style={styles.btn} onPress={onPressBtn}> Rounded button </Button>
    </View>
  );
  
  render() {
    return (

    );
  }
}

