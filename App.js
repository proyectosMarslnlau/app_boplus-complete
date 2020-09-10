/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//--------------------------------------------
//Importamos el Navigation de la app
import Navigation from './src/navigation/Navigation';
//-------------------------------------------------
//Inicio de PROGRAMA
//------------------------------------------------
const App = () => {
  return <Navigation />;
};

const styles = StyleSheet.create({});

export default App;
