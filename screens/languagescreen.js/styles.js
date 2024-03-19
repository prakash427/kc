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
    langbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 20
    },
    flagContainer: {
        alignItems: 'center'
    },
    langname: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 25
    },
    langcontainer: {
        flexDirection: 'row',
        gap: 70
    },
    button: {
        backgroundColor: '#000000',
        width: 315,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    nexttext: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff'
    }
})

export default styles;