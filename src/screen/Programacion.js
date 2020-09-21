import React, {useEffect, useContext, useState, useRef} from 'react';

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
//Importamos el CARD
import CardPublicidad from '../item/CardPublicidad';
//
//Importamos la lireria de degradados
import LinearGradient from 'react-native-linear-gradient';
//----------------------------------------------
//Inicio de programa
//----------------------------------------------
const Programacion = ({navigation}) => {
  //--------------------------------------------
  const scrollRef = useRef();
  //uso de USECONTEXT
  const {
    imagenestv,
    imagenpublicidadprincipal,
    funcionPeticionImagenTv,
    funcionPeticionPublicidadPrincipal,
  } = useContext(boplusContext);
  //--------------------------------------------
  //Area de USEeFFECT
  useEffect(() => {
    //Invocamos las imagenes de programa
    funcionPeticionImagenTv();
    funcionPeticionPublicidadPrincipal();
    //Fucion que se usa para el boton de atras
    const backAction = () => {
      navigation.navigate('selector');
      return true;
    };
    console.log('DETOIR');
    console.log(imagenpublicidadprincipal[0].direccion);
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  //
  const onPressTv = () => {
    navigation.navigate('tv');
  };
  //
  const onPressReturn = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#090909', '#452f20', '#090909']}
        style={styles.linearGradient}>
        <ScrollView ref={scrollRef}>
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
            <Button
              title="Ver BoPlus Online"
              type="outline"
              icon={
                <Icon name="play" type="evilicon" color="#ff1e27" size={30} />
              }
              buttonStyle={{
                borderColor: '#B21E27',
                borderWidth: 2,
                margin: DEVICE_WIDTH * 0.02,
              }}
              titleStyle={{
                color: '#ff1e27',
                fontFamily: 'PFBeauSansPro-Regular',
                fontSize: 18,
              }}
              onPress={onPressTv}
            />
          </View>
          <View style={styles.seccion_2}>
            {/** */}
            <Text style={styles.texto_programacion}>Auspicio de:</Text>
            <Image
              style={styles.logo}
              source={{uri: imagenpublicidadprincipal[0].direccion}}
            />
          </View>
          <View style={styles.seccion_3}>
            <Text style={styles.texto_programacion}>Nuestra Programación</Text>
          </View>
          {imagenestv.map((item) => (
            <LinearGradient
              colors={['#090909', '#452f20', '#090909']}
              style={styles.linearGradient}>
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
            </LinearGradient>
          ))}
          <View>
            <Button
              title="Volver al Principio"
              buttonStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
              }}
              titleStyle={{
                color: '#DAD8D6',
                fontFamily: 'PFBeauSansPro-Regular',
              }}
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#FFB718', '#D3441C'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={onPressReturn}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
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

  tinyLogo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.25,
  },
  logo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.4,
  },
  texto_card: {
    color: '#000000',
    fontFamily: 'PFBeauSansPro-BlackItalic',
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
export default Programacion;
