import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
//Importamos las medidas de dispositivo
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos el Carousel
import Carousel, {Pagination} from 'react-native-x2-carousel';
//Importamos la lireria de degradados
import LinearGradient from 'react-native-linear-gradient';
//--------------------------------------------------------
const DATA = [{text: '#1'}, {text: '#2'}, {text: '#3'}];

const CasouselTv = () => {
  //Funcion que renderiza al objeto
  const renderItem = (data) => (
    <View key={data.text} style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={require('../resource/img/BoplusconSimbolo.jpg')}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#090909', '#332c1c', '#452f20']}
        style={styles.linearGradient}>
        <View style={styles.seccion_1}>
          <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            data={DATA}
            autoplay={true}
            loop={true}
            autoplayInterval={4000}
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
    backgroundColor: 'red',
  },
  seccion_1: {
    height: DEVICE_HEIGHT * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.45,
    borderRadius: 10,
  },
});
export default CasouselTv;
