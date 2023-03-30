import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';
import styles from './styles';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faWater } from "@fortawesome/free-solid-svg-icons/faWater";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";
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
import {REACT_APP_APIKEY} from "@env"


export default function App() {
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');
  const [locationConfirmed, setLocationConfirmed] = useState(true);
  const [temp, setTemp] = useState('0');
  const [weatherType, setWeatherType] = useState('Loading...');
  const [windSpeed, setWindSpeed] = useState('N/A');
  const [humidity, setHumidity] = useState('N/A');
  const API_KEY = process.env.REACT_APP_APIKEY!
  console.log(API_KEY)

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

  if(location != "") {
    setLocationConfirmed(true);
  }

  
// const HideKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );

  function handleChange(newText: string) {
    console.log(newText)
    const url = `https://api.openweathermap.org/data/2.5/weather?q={${newText}}&appid={${API_KEY}}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        ;
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
    
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.outer}>
      <View style={styles.container}>
      
      <View style={styles.searchBox}>
        <FontAwesomeIcon icon={faLocationDot} />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.textInputWrapper}>
          <TextInput
              style={styles.locationInput}
              placeholder="Enter your location"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              onSubmitEditing={(event) => handleChange( event.nativeEvent.text)}/>
        </KeyboardAvoidingView>
        <FontAwesomeIcon icon={faSearch}/>
      </View>
      

      {locationConfirmed? 
      <View style={styles.weather}>
        <View style={styles.weatherImage}>
          <Image source={clear} style={styles.weatherImage}/>
        </View>
        <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 40, alignContent: "center", justifyContent: "center", padding: 5, marginTop: 35}}>{temp} &deg;F</Text>
        <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 40, alignContent: "center", justifyContent: "center", padding: 5, margin: 5}}>{weatherType}</Text>
      </View>
      : <View style={styles.notFound}>
          <Image source={notFound} style={styles.weatherImage}/>
          <Text style={{ marginTop: 25, padding: 5, fontFamily: 'BebasNeue_400Regular', fontSize: 27 }}>Oops! Invalid location. Please try again.</Text>
        </View>
      }

      <View style={styles.weatherDetails}>
          <View style={styles.humidity}>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faWater} style={styles.iconLeft} size={38}/>
              <View style={styles.col}>
                <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 25, alignContent: "flex-start" }}>{humidity}%</Text>
                <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 14, alignContent: "flex-start"}}>Humidity</Text>
              </View>
            </View>
          </View>

          <View style={styles.wind}>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faWind} style={styles.iconLeft} size={38} />
              <View style={styles.col}>
                <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 25,
                alignContent: "flex-start" }}>{windSpeed} mph </Text>
                <Text style={{ fontFamily: 'BebasNeue_400Regular', fontSize: 14, 
                alignContent: "flex-start"}}>Wind Speed</Text>
              </View>
            </View>
            
          </View>
      </View>
      </View>
    </ScrollView>
  );
}

const stylesApp = StyleSheet.create({
 
});



