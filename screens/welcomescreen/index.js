import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from './styles';

const WelcomeScreen = ({navigation}) => {

    return (
        <LinearGradient
            style={styles.container}
            colors={['#B8B0BB', '#171719']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ImageBackground source={require('../../assets/image.png')} style={styles.image}>
                <View style={styles.imageContainer}>

                    <Image source={require('../../assets/mega1(1).png')} style={styles.image1}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome to{'\n'}Chiru{'\n'}Universe</Text>
                    <LinearGradient
                        colors={['#F16623', '#F16623']}
                        style={styles.button}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <TouchableOpacity style={styles.buttonContent} onPress={()=>{navigation.navigate('Login')}}>
                            <Text style={styles.buttontext}>Get Started</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

export default WelcomeScreen;
