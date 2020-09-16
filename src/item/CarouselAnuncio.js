import React, {useState, useContext, useEffect} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
//Importamos las medidas de dispositivo
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos el Carousel
import Carousel, {Pagination} from 'react-native-x2-carousel';
//Importamos la lireria de degradados
import LinearGradient from 'react-native-linear-gradient';
//Importamos el Context
import boplusContext from '../context/boplus/boplusContext';
//--------------------------------------------------------
const DATA = [{text: '#1'}, {text: '#2'}, {text: '#3'}];

const CasouselAnuncio = () => {
  const [imageanuncio, guardarImageAnuncio] = useState();

  //Creamo slos STATE DE consultas
  const {funcionPeticionImagenRadio} = useContext(boplusContext);
  useEffect(() => {
    funcionPeticionImagenRadio().then((item) => {
      if (item !== false) {
        console.log(item);
        guardarImageAnuncio(item);
      }
    });
  }, []);
  //Funcion que renderiza al objeto
  const renderItem = (data) => (
    <View key={data.id} style={styles.item}>
      <Image style={styles.tinyLogo} source={{uri: data.direccion}} />
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
            data={imageanuncio}
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
  },
  seccion_1: {
    height: DEVICE_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  tinyLogo: {
    width: DEVICE_WIDTH,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.23,
  },
});
export default CasouselAnuncio;
