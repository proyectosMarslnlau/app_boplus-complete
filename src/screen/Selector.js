import React, {useState} from 'react';

import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importmaos las libreria de BOTONES de REACT NATIVE ELEMENTS
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Importamos la libreria de degradaciones
import LinearGradient from 'react-native-linear-gradient';
//Importamos la libreria de modal
import Modal from 'react-native-modal';
//--------------------------------------------
//Inicio del programa
//--------------------------------------------
const Selector = ({navigation}) => {
  //-----------------------------
  //State LOCALES
  const [modal, guardarModal] = useState(false);
  //-------------------------------
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
  //Funcion CONTACTOS
  const onPressContact = () => {
    console.log('PRESIONO EL CONTACTO');
    guardarModal(true);
  };
  //--------------------------------------------------------
  // Cambios
  //----------------------------------------------------------
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
              buttonStyle={{
                borderColor: '#fff',
              }}
              titleStyle={{
                color: 'white',
                fontFamily: 'PFBeauSansPro-Regular',
                fontSize: 15,
              }}
              onPress={onPressContact}
            />
          </View>
        </View>
        <View style={styles.seccion_1}>
          <Button
            icon={
              <Icon name="tv" size={20} color="#FFB718" style={styles.icono} />
            }
            title="BoPlus TV"
            type="outline"
            buttonStyle={{
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: '#FFB718',
              borderWidth: 1,
            }}
            titleStyle={{
              color: '#FFB718',
              fontFamily: 'PFBeauSansPro-BlackItalic',
              fontSize: 22,
            }}
            onPress={onPressBoPlus}
          />
        </View>
        <View style={styles.seccion_2}>
          <Button
            icon={
              <Icon
                name="volume-up"
                size={20}
                color="#4E869F"
                style={styles.icono}
              />
            }
            title="Radio Bolivia Joven"
            type="outline"
            buttonStyle={{
              backgroundColor: 'black',
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: '#4E869F',
              borderWidth: 1,
            }}
            titleStyle={{
              color: '#4E869F',
              fontFamily: 'PFBeauSansPro-Regular',
              fontSize: 20,
            }}
            onPress={onPressRadio}
          />
        </View>
        <View style={styles.seccion_3}>
          <Button
            icon={
              <Icon
                name="youtube"
                size={20}
                color="#FEEE0D"
                style={styles.icono}
              />
            }
            title="QD SHOW"
            type="outline"
            buttonStyle={{
              backgroundColor: 'black',
              paddingHorizontal: DEVICE_WIDTH * 0.1,
              borderRadius: 10,
              borderColor: '#FEEE0D',
              borderWidth: 1,
            }}
            titleStyle={{
              color: '#FEEE0D',
              fontFamily: 'Smoolthan Regular',
              fontSize: 19,
            }}
            onPress={onPressQd}
          />
        </View>
        <Modal
          isVisible={modal}
          animationInTiming={800}
          animationOutTiming={1000}
          onBackdropPress={() => guardarModal(false)}>
          <View style={styles.modal}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
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
    marginLeft: DEVICE_WIDTH * 0.05,
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
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: DEVICE_HEIGHT * 0.7,
    borderRadius: 10,
  },
});
export default Selector;
