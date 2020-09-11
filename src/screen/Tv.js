import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
//Importamos la libreria de HOOKS
import useDeviceOrientation from '@rnhooks/device-orientation';
//Importamos la libreria de VIDEO
import VideoPlayer from 'react-native-video-controls';
//Importamos las medidas de RESOLUCION
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//-----------------------------------------------------------------
//Inicio de programa
//------------------------------------------------------------------
const Tv = ({navigation}) => {
  const deviceOrientation = useDeviceOrientation();
  //Creamos los STATE LOCALES
  //Importamos useState
  const [medidas, guardarMedidas] = useState({
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  });

  console.log(deviceOrientation);
  //-------------
  //Funciones
  //----------------------------------------------------
  const onprogress = () => {
    alert('BOPLUS no disponible Intente mas Tarde');
  };
  return (
    <View>
      <Text>Tv</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  },
  seccion_2: {
    backgroundColor: 'green',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  },
});
export default Tv;
