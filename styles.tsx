import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        fontFamily: 'BebasNeue_400Regular',
        paddingLeft: 28,
        paddingRight: 28,
        paddingBottom: 32,
        paddingTop: 32
    }, outer: {
        flex: 1,
    },
    searchBox: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-between",
    },
    locationInput: {
        padding: 5,
        margin: 10,
        height: 40, 
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    search: {
        
    },
    notFound: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    notFoundText: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },  weather: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
    
      }, textInputWrapper: {
        width: "100%",
        margin: 0,
        padding: 0,
      }, weatherImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1, 
        resizeMode: 'contain',
      }, row: {
        display: "flex",
        flexDirection: "row",
    
      }, col: {
        display: "flex",
        flexDirection: "column",
      }, temp: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    
      }, desc: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    
      }, weatherDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 25
        
      }, humidity: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "space-around",
    
      }, wind: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        
      }, iconLeft: {
        margin: 5,
        padding: 5
      }, textRight: {
        flexDirection: "column",
        width: "50%"
      }
  });

export default styles;