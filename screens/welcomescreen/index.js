import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from './styles';

const WelcomeScreen = ({navigation}) => {

    return (
        <LinearGradient
            style={styles.container}
            colors={['#E1F6FF', '#91E0FF']}
        >
        <StatusBar hidden/>
        <Image source={require('../../assets/welcombg.png')} style={styles.bgimage}></Image>
        <Text style={styles.welcometext}>WELCOME TO CHIRU{'\n'}UNIVERSE</Text>           
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.buttontext}>Get Started</Text>
        </TouchableOpacity>   
        </LinearGradient>
    );
};

export default WelcomeScreen;
