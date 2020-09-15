import React, {useEffect} from 'react';

import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos la libreria de degradaciones
import LinearGradient from 'react-native-linear-gradient';
//
//Importamos la libreria de HOOKS
import useDeviceOrientation from '@rnhooks/device-orientation';
//Importamos la orientacion de MOBILE
import Orientation from 'react-native-orientation-locker';
//-------------------------------
const QdShow = ({navigation}) => {
  //Se pone en escucha el formato de ORIENTATION
  const deviceOrientation = useDeviceOrientation();
  console.log('ddd QDSHOW');
  console.log(deviceOrientation);
  //Usamos los STATE LOCALES
  useEffect(() => {
    Orientation.lockToPortrait();
    //Fucion que se usa para el boton de atras
    const backAction = () => {
      navigation.navigate('selector');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#090909', '#090909', '#452f20']}
        style={styles.linearGradient}>
        <View style={styles.video}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: 'https://www.youtube.com/embed/WFxc-RARg3k',
            }}
          />
        </View>
        <View style={styles.video}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: 'https://www.youtube.com/embed/M_lkkSdBExM',
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  video: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
    backgroundColor: 'black',
  },
});
export default QdShow;
