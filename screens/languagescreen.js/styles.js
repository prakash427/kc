import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        position: 'absolute'
    },
    container: {
        flex: 1,
        top: 300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    content: {
        alignItems: 'center',
        margin: 30,
        flexDirection: 'column',
        gap: 100
    },
    text: {
        color: '#F16623',
        fontWeight: '500',
        fontSize: 25
    },
    imagecontainer: {
        flexDirection: 'row',
        gap: 70
    },
    button: {
        backgroundColor: '#F16623',
        width: 315,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    nexttext: {
        fontWeight: '500',
        fontSize: 16
    }
})

export default styles;