import React, {useState, useEffect, useContext, useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  BackHandler,
  ScrollView,
  Dimensions,
} from 'react-native';
//--------------------
import alertContext from '../context/alert/alertContext';
//Importamos la libreria de HOOKS
import useDeviceOrientation from '@rnhooks/device-orientation';
//Importamos la libreria de VIDEO
import VideoPlayer from 'react-native-video-controls';
//Importamos las medidas de RESOLUCION
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos la libreria de GRADIENTES
import LinearGradient from 'react-native-linear-gradient';
//Importamos los ICONOS
import {Icon} from 'react-native-elements';
//Importamos la orientacion de MOBILE
import Orientation from 'react-native-orientation-locker';
//import
import boplusContext from '../context/boplus/boplusContext';
//
import {Button} from 'react-native-elements';

//-----------------------------------------------------------------
//Inicio de programa
//------------------------------------------------------------------
const Tv = ({navigation}) => {
  //State Locales
  const [imagetv, guardarImageTv] = useState([]);

  //----------------------------------
  const {imagenestv, funcionPeticionImagenTv} = useContext(boplusContext);
  //-----------------------------------
  const scrollRef = useRef();
  //----------
  //Se pone en escucha el formato de ORIENTATION
  const deviceOrientation = useDeviceOrientation();

  //Usamos los STATE LOCALES
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
  //-----------------------------------------------------------
  useEffect(() => {
    //
    funcionPeticionImagenTv();
    //Funcion de Habilitacion de ORIENTACION segun el VIEW
    Orientation.unlockAllOrientations();
    //Fucion que se usa para el boton de atras
    const backAction = () => {
      Orientation.lockToPortrait();
      navigation.navigate('selector');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  //---------------------------------------------------------------
  const {funcionAlertError} = useContext(alertContext);

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
  //
  const onPressView = () => {
    navigation.navigate('jumptv');
    /*
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });*/
  };
  return (
    <View>
      <ScrollView ref={scrollRef}>
        {deviceOrientation !== 'portrait' ? null : (
          <LinearGradient
            colors={['#090909', '#090909', '#452f20']}
            style={styles.linearGradient}>
            <View style={styles.seccion_0}>
              <View style={styles.seccion_0_1}>
                <Image
                  style={styles.logo}
                  source={require('../resource/img/logoFondoNegro.png')}
                />
              </View>
              <View style={styles.seccion_0_2}></View>
              <View style={styles.seccion_0_3}></View>
            </View>
          </LinearGradient>
        )}

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
        <View style={styles.seccion_texto}>
          <Text style={styles.texto_programacion}>
            <Icon
              name="description"
              type="material"
              color="#fff"
              containerStyle={styles.icono}
              size={18}
              repeat={true}
            />
            Nuestra Programación
          </Text>
        </View>

        <View>
          <Button title="Solid Button" onPress={onPressView} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  //---------------------
  seccion_0: {
    height: DEVICE_HEIGHT * 0.1,
    flexDirection: 'row',
  },
  seccion_0_1: {
    width: DEVICE_WIDTH * 0.4,
  },
  seccion_0_2: {
    width: DEVICE_WIDTH * 0.3,
  },
  seccion_0_3: {
    width: DEVICE_WIDTH * 0.3,
  },
  logo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
    marginLeft: DEVICE_WIDTH * 0.05,
  },
  //--------------------------
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  },
  //----------------------------------
  seccion_texto: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.05,
    backgroundColor: 'black',
  },
  texto_programacion: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'PFBeauSansPro-Thin',
    marginLeft: DEVICE_WIDTH * 0.08,
    paddingBottom: 10,
  },
  icono: {},
  //-----------------------------------
  seccion_2: {
    backgroundColor: 'black',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.35,
  },
  tinyLogo: {
    width: DEVICE_WIDTH,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.35,
  },
});
export default Tv;
