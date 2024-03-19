import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const dwidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimage: {
       width: dwidth,
       resizeMode: 'cover',
       height: '70%'
    },
    welcometext: {
        fontFamily:'Poppins',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 30,
        lineHeight: 45
    },
    button: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        width: 210,
        borderRadius: 10,
    },
    buttontext: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#ffffff',
    }
});

export default styles;
