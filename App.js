import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealNavigator from './navigation/MealNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();
const getFonts = () => {
  return Font.loadAsync({
    'sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return <AppLoading
      startAsync={getFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)}
    />;
  }
  return <MealNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
