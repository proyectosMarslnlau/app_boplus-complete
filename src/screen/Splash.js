import React, {useEffect} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
//Importar libreria de VIDEO
import Video from 'react-native-video';
//Importamos la libreria de MEDIDAS
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
const Splash = ({navigation}) => {
  //------------------------
  //USE EFECT DE INCIO
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('selector');
    }, 9000);
  }, []);
  const onPressSalir = () => {
    navigation.navigate('selector');
  };
  return (
    <View style={styles.container}>
      <Video
        source={require('../resource/video/boplus2.mp4')} // Can be a URL or a local file.
        //source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        style={styles.video}
        repeat={false}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
});
export default Splash;
