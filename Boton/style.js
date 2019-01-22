// Paso 10: Declarando los estilos del botón, primero los queserán la Base.
import { StyleSheet } from 'react-native';

const BaseStyles = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: '#fff',
  },
  rounded: {
    borderRadius: 20,
  },
});

 // Paso 11: Definir los estilos que llamará la función para cada botón
 const Danger = StyleSheet.create({
    main: {
      backgroundColor: '#e74c3c',
    },
  });
  
  const Info = StyleSheet.create({
    main: {
      backgroundColor: '#3498db',
    },
  });
  
  const Success = StyleSheet.create({
    main: {
      backgroundColor: '#1abc9c',
    },
  });
  
  const Default = StyleSheet.create({
    main: {
      backgroundColor: 'rgba(0 ,0 ,0, 0)',
    },
    label: {
      color: '#333',
    },
  });

  // Paso 12: Exportando los estilos y plantillas creadas
export default BaseStyles;
export {
    Danger,
    Info,
    Success,
    Default,
};