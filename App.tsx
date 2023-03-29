import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styles from './styles';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import notFound from './assets/404.png';
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import rain from './assets/rain.png'
import snow from './assets/snow.avif'
import thunderstorm from './assets/thunderstorm.png'

import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


export default function App() {
  const [text, setText] = useState('');
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <FontAwesomeIcon icon={faLocationDot} />
          <TextInput
            style={styles.locationInput}
            placeholder="Enter your location"
            onChangeText={newText => setText(newText)}
            defaultValue={text}/>
          <FontAwesomeIcon icon={faSearch} style={styles.search}/>
      </View>
      <View style={styles.notFound}>
        <Image source={notFound}/>
        <Text style={{ marginTop: 25, padding: 5, fontFamily: 'BebasNeue_400Regular', fontSize: 27 }}>Oops! Invalid location. Please try again.</Text>
      </View>

      <View style={stylesApp.weather}>
        <Image source={rain}/>
        <Text style={stylesApp.temp}>60 degrees</Text>
        <Text style={stylesApp.desc}>Raining</Text>
      </View>
      
    </View>
  );
}

const stylesApp = StyleSheet.create({
  weather: {
  }, 
  temp: {

  },
  desc: {

  }
});



