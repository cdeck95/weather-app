import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import styles from './styles';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import notFound from './assets/404.png';


export default function App() {
  const [text, setText] = useState('');

  // const [loaded] = useFonts({
  //   Montserrat: require('./assets/fonts/BebasNeue-Regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

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
        <Text style={{ fontSize: 27 }}>Oops! Invalid location. Please try again.</Text>
      </View>
      
    </View>
  );
}

function useFonts(arg0: { Montserrat: any; }): [any] {
  throw new Error('Function not implemented.');
}

