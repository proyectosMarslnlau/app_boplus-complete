import React, {useEffect, useContext, useState, useRef} from 'react';

import {View, Text, StyleSheet, BackHandler, Image} from 'react-native';
import {WebView} from 'react-native-webview';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos la libreria de degradaciones
import LinearGradient from 'react-native-linear-gradient';
//Importamos la libreria de HOOKS
import useDeviceOrientation from '@rnhooks/device-orientation';
//Importamos la orientacion de MOBILE
import Orientation from 'react-native-orientation-locker';
///
import {ScrollView} from 'react-native-gesture-handler';
//
//
import boplusContext from '../context/boplus/boplusContext';
//
import Tv from './Tv';
import CarouselAnuncio from '../item/CarouselAnuncio';
//-------------------------------
const TvBoplus = ({navigation}) => {
  //--------------------------------------------
  const scrollRef = useRef();
  //uso de USECONTEXT
  const {
    imagenestv,
    imagenpublicidadprincipal,
    funcionPeticionImagenTv,
    funcionPeticionPublicidadPrincipal,
  } = useContext(boplusContext);
  //
  useEffect(() => {
    //Invocamos las imagenes de programa
    funcionPeticionImagenTv();
    funcionPeticionPublicidadPrincipal();
    //
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
          <View style={styles.seccion_1}>
            <Tv />
          </View>
          <View style={styles.seccion_2}>
            <Text style={styles.texto_programacion}>Auspicio de:</Text>
            <CarouselAnuncio />
          </View>
          <View style={styles.seccion_3}>
            <Text style={styles.texto_programacion}>Nuestra Programación</Text>
          </View>
          {imagenestv.map((item) => (
            <Card
              containerStyle={{backgroundColor: '#DAD8D6', borderRadius: 10}}
              wrapperStyle={{backgroundColor: '#DAD8DF'}}>
              <Card.Title>
                <Text style={styles.texto_card}>{item.titulo}</Text>
              </Card.Title>
              <Card.Divider />
              <Card.Image
                source={{uri: item.direccion}}
                style={styles.tinyLogo}></Card.Image>
            </Card>
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
  //-------------------------
  seccion_2: {
    height: DEVICE_HEIGHT * 0.35,
  },
  texto_programacion: {
    marginTop: 10,
    color: 'white',
    fontFamily: 'PFBeauSansPro-Regular',
    fontSize: 15,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
});

export default TvBoplus;
