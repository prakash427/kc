import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: '45%',
        overflow: 'hidden',
        borderRadius: 200,
    },
    image1: {
        width: 250,
        height: 250,
    },
    textContainer: {
        top: 30,
    },
    text: {
        fontFamily:'Poppins',
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 50,
        lineHeight: 56,
        textAlign: 'center',
        padding: 15
    },
    button: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        width: 210,
        margin: 20,
        borderRadius: 10
    },
    buttonContent: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#ffffff',
    }
});

export default styles;
