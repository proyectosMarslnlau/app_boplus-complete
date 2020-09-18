import React, {useState, useContext, useEffect} from 'react';
//Importaciones de REACT NATIVE
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importmaos las libreria de BOTONES de REACT NATIVE ELEMENTS
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Context Alert
import alertContext from '../context/alert/alertContext';
//Carousel de Anuncio CAMBIAR
import CarouselAnuncio from '../item/CarouselAnuncio';
//Importamos la libreria de modal
import Modal from 'react-native-modal';
//Importamos Componente de ALERT
import AlertError from '../item/AlertError';
//Importamos libreria de INTERNET
import {useNetInfo} from '@react-native-community/netinfo';
//--------------------------------------------
//Inicio del programa
//--------------------------------------------
const Selector = ({navigation}) => {
  //Declaracion del STATE CONTEXT
  const {funcionAlertError} = useContext(alertContext);
  //---- Verificacion de INTERNET
  const netInfo = useNetInfo();
  //State LOCALES
  const [modal, guardarModal] = useState(false);
  //------------------------------
  // USE EFFECT DE INICIO
  //-----------------------------
  useEffect(() => {
    //Funcion del boton de atras BACK
    const backAction = () => {
      Alert.alert('Salir', 'Esta seguro de Salir', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  //-------------------------------
  //Funcion direccion TV
  const onPressBoPlus = () => {
    if (netInfo.isConnected) {
      navigation.navigate('programacion');
    } else {
      let valorError = {
        estado: true,
        mensaje: 'Sin acceso a Internet, Verifique su Conexion',
      };
      funcionAlertError(valorError);
    }
  };
  //-------------------------------
  //Funcion direccion Radio
  const onPressRadio = () => {
    if (netInfo.isConnected) {
      navigation.navigate('radio');
    } else {
      let valorError = {
        estado: true,
        mensaje: 'Sin acceso a Internet, Verifique su Conexion',
      };
      funcionAlertError(valorError);
    }
  };
  //-------------------------------
  //Funcion Direccion QD
  const onPressQd = () => {
    if (netInfo.isConnected) {
      navigation.navigate('qdshow');
    } else {
      let valorError = {
        estado: true,
        mensaje: 'Sin acceso a Internet, Verifique su Conexion',
      };
      funcionAlertError(valorError);
    }
  };
  //-------------------------------
  //Funcion CONTACTOS
  const onPressContact = () => {
    console.log('PRESIONO EL CONTACTO');
    guardarModal(true);
  };
  //--------------------------------------------------------
  // Programa SELECTOR
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
          <View style={styles.seccion_0_2}></View>
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
            title="BoPlus Radio"
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
              fontFamily: 'PFBeauSansPro-Black',
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
        <View style={styles.seccion_4}>
          <CarouselAnuncio />
        </View>
        <Modal
          isVisible={modal}
          animationInTiming={800}
          animationOutTiming={1000}
          onBackdropPress={() => guardarModal(false)}>
          <View style={styles.modal}>
            <Text>MARSLNLAU</Text>
          </View>
        </Modal>
      </ImageBackground>
      <AlertError />
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
  logo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
    marginLeft: DEVICE_WIDTH * 0.05,
  },
  //------------------------------------
  seccion_1: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: DEVICE_HEIGHT * 0.2,
  },
  //-------------------------------------
  seccion_2: {
    alignItems: 'center',
    justifyContent: 'center',

    height: DEVICE_HEIGHT * 0.2,
  },
  //--------------------------------------
  seccion_3: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: DEVICE_HEIGHT * 0.2,
  },
  //----------------------------------------
  seccion_4: {
    alignItems: 'center',
    justifyContent: 'center',
    height: DEVICE_HEIGHT * 0.25,
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
