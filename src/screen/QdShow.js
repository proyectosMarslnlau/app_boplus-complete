import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
//Importamos las medidas del APP
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/Device';
//
const QdShow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri: 'https://www.youtube.com/embed/WFxc-RARg3k',
          }}
        />
      </View>
      <View style={styles.video}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri: 'https://www.youtube.com/embed/WFxc-RARg3k',
          }}
        />
      </View>
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
  },
});
export default QdShow;
