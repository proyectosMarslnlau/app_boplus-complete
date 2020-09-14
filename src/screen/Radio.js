import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
//Importamos la medidas del dispositivo
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//Importamos la libreria de la RADIO
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';
//Importamos la libreria de AUDIO VOLUMEN
import {SliderVolumeController} from 'react-native-volume-controller';
//Importamos la libreria de CARROUSEL
import Carousel, {Pagination} from 'react-native-x2-carousel';
//Importamos la libreria de GRADIENTES
import LinearGradient from 'react-native-linear-gradient';

//------------------------------------------------------------
//Inicio del programa
//------------------------------------------------------------
const Radio = () => {
  const DATA = [
    {
      text: '#1',
      id: '1',
      ima: 'https://boplus.tv/img_apk/despiertos.png',
      type: 'require("../resource/img/ddm.png")',
    },
    {
      text: '#2',
      id: '2',
      ima: 'https://boplus.tv/img_apk/face.jpg',
      type: 'require("../resource/img/geek.jpg")',
    },
    {
      text: '#3',
      id: '3',
      ima: 'https://boplus.tv/img_apk/geek.jpg',
      type: 'require("../resource/img/tdl.png")',
    },
    {
      text: '#4',
      id: '4',
      ima: 'https://boplus.tv/img_apk/tdl2.png',
      type: 'require("../resource/img/tdl.png")',
    },
  ];
  const renderItem = (data) => (
    <View key={data.ima} style={styles.item}>
      <Image style={styles.tinyLogo} source={{uri: data.ima}} />
    </View>
  );
  //-----------------------------------------------------------
  //INSTANCIAMOS LA RADIO
  //---------------------------------------------------------
  const playbackState = usePlaybackState();
  const [estado, guardarEstado] = useState('stop');
  //---------------------------------------------
  const config = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    TrackPlayer.addEventListener('remote-play', (event) => {
      guardarEstado('play');
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', (event) => {
      guardarEstado('pause');
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-stop', () => {
      guardarEstado('stop');
      TrackPlayer.destroy();
    });
  };
  //---------------------------------------------------------------
  const toglePlay = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: 'local-track',
        url: 'http://streamingv2.shoutcast.com/japanimradio-fm',
        title: 'BOLIVIA JOVEN',
        artist: 'Radio',
        artwork: 'https://picsum.photos/id/500/200/300',
        duration: 28,
      });
      guardarEstado('play');
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        guardarEstado('play');

        await TrackPlayer.play();
      } else {
        guardarEstado('pause');
        await TrackPlayer.pause();
      }
    }
  };
  //----------------------------------------------------------
  const onPress = async () => {
    try {
      guardarEstado('stop');
      await TrackPlayer.stop();
      config();
      /*
      Linking.openURL('whatsapp://send?phone=59171562642')
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });*/
    } catch (_) {}
  };
  //------------------------------------------
  const onPress2 = async () => {
    toglePlay();
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#090909', '#090909', '#452f20']}
        style={styles.linearGradient}>
        <View style={styles.seccion_1}>
          <View style={styles.seccion_1_1}>
            <Image
              style={styles.logo}
              source={require('../resource/img/logoFondoNegro.png')}
            />
          </View>
          <View style={styles.seccion_1_2}></View>
          <View style={styles.seccion_1_3}></View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['#452f20', '#090909', '#090909']}
        style={styles.linearGradient}>
        <View style={styles.seccion_2}>
          <View style={styles.seccion_2_1}>
            <Image
              style={styles.logo}
              source={require('../resource/img/qdshow2.png')}
            />
          </View>
          <View style={styles.seccion_2_2}>
            <Image
              style={styles.logo}
              source={require('../resource/img/whatsapp.png')}
            />
          </View>
          <View style={styles.seccion_2_3}>
            <Image
              style={styles.logo}
              source={require('../resource/img/facebook.png')}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.seccion_3}>
        <View style={styles.seccion_3_1}>
          <Text>{estado}</Text>
          {estado !== 'play' ? (
            <TouchableOpacity onPress={onPress2} activeOpacity={0.9}>
              <Image
                source={require('../resource/img/play.png')}
                style={styles.boton_reproduccion}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onPress2} activeOpacity={0.1}>
              <Image
                style={styles.boton_reproduccion}
                source={require('../resource/img/stop.png')}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.seccion_3_2}>
          <SliderVolumeController
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={0.2}
          />
        </View>
      </View>
      <View style={styles.seccion_4}>
        <Image
          style={styles.bolivia_joven_logo}
          source={require('../resource/img/boliviajovenlog.jpg')}
        />
      </View>
      <View style={styles.seccion_5}>
        <Carousel
          pagination={Pagination}
          renderItem={renderItem}
          data={DATA}
          autoplay={true}
          autoplayInterval={7000}
        />
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
  //----------------------------------------
  seccion_1: {
    height: DEVICE_HEIGHT * 0.08,

    flexDirection: 'row',
  },
  seccion_1_1: {
    width: DEVICE_WIDTH * 0.4,
  },
  seccion_1_2: {
    width: DEVICE_WIDTH * 0.3,
  },
  seccion_1_3: {
    width: DEVICE_WIDTH * 0.3,
  },
  logo: {
    width: null,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
    marginLeft: DEVICE_WIDTH * 0.05,
  },
  //----------------------------------------
  seccion_2: {
    height: DEVICE_HEIGHT * 0.17,
    flexDirection: 'row',
  },
  seccion_2_1: {
    width: DEVICE_WIDTH * 0.3,
    justifyContent: 'center',
  },
  seccion_2_2: {
    width: DEVICE_WIDTH * 0.3,
    justifyContent: 'center',
  },
  seccion_2_3: {
    width: DEVICE_WIDTH * 0.3,
    justifyContent: 'center',
  },

  //----------------------------------------
  seccion_3: {
    height: DEVICE_HEIGHT * 0.25,
    backgroundColor: 'yellow',
  },
  seccion_3_1: {
    height: DEVICE_HEIGHT * 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boton_reproduccion: {
    width: DEVICE_WIDTH * 0.4,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.1,
    marginLeft: DEVICE_WIDTH * 0.05,
  },
  seccion_3_2: {
    height: DEVICE_HEIGHT * 0.05,
    backgroundColor: 'black',
  },
  //------------------------------------------
  seccion_4: {
    height: DEVICE_HEIGHT * 0.25,
    backgroundColor: '#044c74',
  },
  bolivia_joven_logo: {
    width: DEVICE_WIDTH,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.25,
  },
  //------------------------------------------
  seccion_5: {
    flex: 1,
    height: DEVICE_HEIGHT * 0.25,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
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
export default Radio;
