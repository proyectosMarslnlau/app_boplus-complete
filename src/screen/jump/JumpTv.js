import React, {useEffect, useState, useContext} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
//Importamos TV
import Tv from '../Tv';
//Importa Carousel
import CarouselTv from '../../item/CarouselTv';
//import
import boplusContext from '../../context/boplus/boplusContext';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../resource/js/Device';
const JumpTv = ({navigation}) => {
  //----------------------------------
  const {imagenestv, funcionPeticionImagenTv} = useContext(boplusContext);
  useEffect(() => {
    funcionPeticionImagenTv();
  }, []);
  return (
    <View>
      {imagenestv.map((item) => (
        <View style={styles.seccion_2} key={item.id}>
          <Image style={styles.tinyLogo} source={{uri: item.direccion}} />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: DEVICE_WIDTH,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.23,
  },
});
export default JumpTv;
