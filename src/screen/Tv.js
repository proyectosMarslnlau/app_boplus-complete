import React, {useState, useEffect, useContext} from 'react';

import {View, Text, StyleSheet} from 'react-native';
//--------------------
import alertContext from '../context/alert/alertContext';
//Importamos la libreria de HOOKS
import useDeviceOrientation from '@rnhooks/device-orientation';
//Importamos la libreria de VIDEO
import VideoPlayer from 'react-native-video-controls';
//Importamos las medidas de RESOLUCION
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos el Carousel
import CarouselTv from '../item/CarouselTv';

//-----------------------------------------------------------------
//Inicio de programa
//------------------------------------------------------------------
const Tv = ({navigation}) => {
  //---------------------------------------------------------------
  const {funcionAlertError} = useContext(alertContext);
  //Se pone en escucha
  const deviceOrientation = useDeviceOrientation();
  //Creamos los STATE LOCALES
  //Importamos useState estas son las medidas iniciales del VIDEO
  const [medidas, guardarMedidas] = useState({
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  });
  //-------------------------------------------------------
  //Creasmos la funcion que se incluira en el video
  //-------------------------------------------------------
  const style_video = () => {
    return {
      width: medidas.width,
      height: medidas.height,
    };
  };
  //------------------------------------------------------
  //Creamos el USE EFFECT para la situacion de estados
  //------------------------------------------------------
  useEffect(() => {
    if (deviceOrientation === 'portrait') {
      guardarMedidas({
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.5,
      });
    } else {
      guardarMedidas({
        width: DEVICE_HEIGHT,
        height: DEVICE_WIDTH * 0.95,
      });
    }
  }, [deviceOrientation]);

  console.log(deviceOrientation);
  //-------------
  //Funciones
  //----------------------------------------------------
  const loadErrorCarga = () => {
    let valorError = {
      estado: true,
      mensaje: 'BoPlus no Disponible. Intente mas Tarde',
    };
    funcionAlertError(valorError);
    navigation.navigate('selector');
  };
  return (
    <View>
      <View style={style_video()}>
        <VideoPlayer
          source={{
            uri:
              'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
          }}
          //https://livestreamingperu.com:8081/boliviajoven/tracks-v1a1/mono.m3u8
          //https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4
          onError={loadErrorCarga}
          disableBack
          disableFullscreen
          disableVolume
          disableSeekbar
          repeat={true}
        />
      </View>
      <View style={styles.seccion_2}>
        <CarouselTv />
      </View>
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
