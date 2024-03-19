import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, ImageBackground, Pressable } from 'react-native'
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;



const RegistrationSuccess = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Image source={require('../../assets/success_register.png')} style={styles.donate_image} resizeMode='cover' />
            <LinearGradient
                colors={['#E1F6FF', '#91E0FF']}
                style={styles.login_container}
            >
            <Pressable style={styles.back_arrow} onPress={() => navigation.navigate('RegisterToDonate')}>
               <AntDesign name="left" size={20} color='black'/>
            </Pressable>
            <View style={styles.animation_container}>
               <LottieView 
               source={require('../../assets/success_animation.json')} 
               autoPlay
               style={{width: "100%", height: "100%"}}
               />
            </View>
                <Text style={styles.chiru_text}>Congrats! Your Registration is Successful</Text>
                <TouchableOpacity style={styles.submit_btn} onPress={() => navigation.navigate('AddFamilyMember')}>
                    <Text style={styles.submit_text}>ADD FAMILY MEMBERS</Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default RegistrationSuccess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    donate_image: {
        width: width,
        height: '33%'
    },
    back_arrow: {
       height: 30,
       width: 30,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 15,
       alignSelf: 'flex-start'
    },
    login_container: {
        flex: 1,
        alignItems: 'center',
        marginTop: -70,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    animation_container: {
       width: '100%',
       height: '60%'
    },
    chiru_text: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    submit_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: '90%',
        height: 45,
        borderRadius: 30,
        marginTop: 10
    },
    submit_text: {
        fontSize: 16,
        color: '#fff'
    },

})

