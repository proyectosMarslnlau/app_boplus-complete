import React, {useEffect, useContext, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {Card, ListItem, Button, Icon, Image} from 'react-native-elements';
//Importamos la MEDIDAS
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../resource/js/Device';
//
import boplusContext from '../context/boplus/boplusContext';
import axios from 'axios';
//
import CarouselAnuncio from '../item/CarouselAnuncio';
import CarouselTv from '../item/CarouselTv';
//----------------------------------------------
//Inicio de programa
//----------------------------------------------
const Programacion = ({navigation}) => {
  //uso de USECONTEXT
  const {imagenestv, funcionPeticionImagenTv} = useContext(boplusContext);
  const [imagen, guardarImagen] = useState([]);

  //Area de USEeFFECT
  useEffect(() => {
    //Invocamos las imagenes de programa

    //Fucion que se usa para el boton de atras
    const backAction = () => {
      navigation.navigate('selector');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const onPressView = () => {
    navigation.navigate('tv');
    /*
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });*/
  };
  return (
    <View style={styles.container}>
      <CarouselTv />
      <View>
        <Button title="Solid Button" onPress={onPressView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
  },
  tinyLogo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.25,
  },
});
export default Programacion;
