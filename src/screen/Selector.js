import React from 'react';

import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importmaos las libreria de BOTONES de REACT NATIVE ELEMENTS
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Importamos la libreria de degradaciones
import LinearGradient from 'react-native-linear-gradient';
//--------------------------------------------
//Inicio del programa
//--------------------------------------------
const Selector = ({navigation}) => {
  //Funcion direccion TV
  const onPressBoPlus = () => {
    console.log('BOPLUS');
    navigation.navigate('tv');
  };
  //Funcion direccion Radio
  const onPressRadio = () => {
    console.log('RADIO');
    navigation.navigate('radio');
  };
  //Funcion Direccion QD
  const onPressQd = () => {
    console.log('QD');
    navigation.navigate('qdshow');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/fondoBo.png')}
        style={styles.image}>
        <View style={styles.seccion_0}>
          <View style={styles.seccion_0_1}>
            <Image
              style={styles.logo}
              source={require('../resource/img/logoFondoNegro.png')}
            />
          </View>
          <View style={styles.seccion_0_2}>
            <Text>12</Text>
          </View>
          <View style={styles.seccion_0_3}>
            <Button
              title="Contactos"
              type="outline"
              titleStyle={{
                fontFamily: 'PFBeauSansPro-Regular',
                fontSize: 15,
              }}
              onPress={onPressRadio}
            />
          </View>
        </View>
        <View style={styles.seccion_1}>
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={12}
                color="white"
                style={styles.icono}
              />
            }
            title="BoPlus TV"
            buttonStyle={{
              backgroundColor: '#D3441C',
              color: '',
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: 'PFBeauSansPro-BlackItalic',
              fontSize: 20,
            }}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#FFB718', '#D3441C'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={onPressBoPlus}
          />
        </View>
        <View style={styles.seccion_2}>
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={12}
                color="white"
                style={styles.icono}
              />
            }
            title="Radio Bolivia Joven"
            buttonStyle={{
              backgroundColor: '#D3441C',
              color: '',
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: 'PFBeauSansPro-Regular',
              fontSize: 20,
            }}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#1C5A7C', '#4E869F'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={onPressRadio}
          />
        </View>
        <View style={styles.seccion_3}>
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={12}
                color="white"
                style={styles.icono}
              />
            }
            title="QdShow"
            buttonStyle={{
              backgroundColor: '#D3441C',
              color: '',
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.5,
            }}
            titleStyle={{
              fontFamily: 'PFBeauSansPro-Black',
              fontSize: 20,
            }}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#2FFFE8', '#07040F'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={onPressQd}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  //----------------------------------
  seccion_0: {
    height: DEVICE_HEIGHT * 0.1,
    flex: 1,
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

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
  },
  //------------------------------------
  seccion_1: {
    alignItems: 'center',
    justifyContent: 'center',

    height: DEVICE_HEIGHT * 0.3,
  },
  //-------------------------------------
  seccion_2: {
    alignItems: 'center',
    justifyContent: 'center',

    height: DEVICE_HEIGHT * 0.3,
  },
  //--------------------------------------
  seccion_3: {
    alignItems: 'center',
    justifyContent: 'center',

    height: DEVICE_HEIGHT * 0.3,
  },
  //----------------------------------------
  button: {},
  icono: {
    marginHorizontal: 5,
  },
});
export default Selector;
