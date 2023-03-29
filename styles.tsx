import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBox: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        height: 100
    },
    locationInput: {
        padding: 5,
        margin: 10,
        height: 40, 
        width: "80%",
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    search: {
        
        borderRadius: 5,
        height: 100
    },
    notFound: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    }, 
    notFoundText: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
  });

export default styles;