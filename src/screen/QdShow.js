import React, {useEffect} from 'react';

import {View, Text, StyleSheet, BackHandler, Image} from 'react-native';
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
//
import YoutubePlayer from 'react-native-youtube-iframe';
import {ScrollView} from 'react-native-gesture-handler';
//-------------------------------
const QdShow = ({navigation}) => {
  //Se pone en escucha el formato de ORIENTATION
  const deviceOrientation = useDeviceOrientation();
  console.log('ddd QDSHOW');
  console.log(deviceOrientation);
  //Usamos los STATE LOCALES
  //
  const videosYoutube = [
    {id: 1, direccion: 'PRiEobBbjuo', titulo: 'uno'},
    {id: 2, direccion: '5r05NlTj4TE', titulo: 'uno'},
    {id: 3, direccion: 'P-LZgLUMF-g', titulo: 'uno'},
    {id: 4, direccion: '5bue-9ci3rM', titulo: 'uno'},
    {id: 5, direccion: 'YjfFq7EzTn4', titulo: 'uno'},
    {id: 6, direccion: '09L_rBYJnEM', titulo: 'uno'},
    {id: 7, direccion: '7MbKKyU23g8', titulo: 'uno'},
    {id: 8, direccion: '5r05NlTj4TE', titulo: 'uno'},
    {id: 9, direccion: 'i8F_eLny200', titulo: 'uno'},
    {id: 10, direccion: 'rUjp3qCqQ5I', titulo: 'uno'},
  ];
  //
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
        <ScrollView>
          <View style={styles.seccion_0}>
            <View style={styles.seccion_0_1}>
              <Image
                style={styles.logo_boplus}
                source={require('../resource/img/logoFondoNegro.png')}
              />
            </View>
            <View style={styles.seccion_0_2}></View>
            <View style={styles.seccion_0_3}></View>
          </View>

          {videosYoutube.map((item) => (
            <YoutubePlayer
              key={item.id}
              height={DEVICE_HEIGHT * 0.3}
              play={false}
              videoId={item.direccion}
              showinfo={false}
            />
          ))}
        </ScrollView>
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
  //---------------------------------- SECCION BANNER DE ENTRADA
  seccion_0: {
    height: DEVICE_HEIGHT * 0.15,
    flex: 1,
    flexDirection: 'row',
  },
  seccion_0_1: {
    width: DEVICE_WIDTH * 0.4,
    justifyContent: 'center',
  },
  seccion_0_2: {
    width: DEVICE_WIDTH * 0.3,
  },
  seccion_0_3: {
    width: DEVICE_WIDTH * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_boplus: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
    marginLeft: DEVICE_WIDTH * 0.05,
  },
});
export default QdShow;
