import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import styles from './styles';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import notFound from './assets/404.png';
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
        <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 27 }}>Oops! Invalid location. Please try again.</Text>
      </View>
      
    </View>
  );
}



