import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";


const LanguageScreen = ({navigation}) => {
    return (
        <>
            <Image source={require('../../assets/mega21.png')} style={styles.image}></Image>
            <LinearGradient
                style={styles.container}
                colors={['#E1F6FF', '#91E0FF']}
            >
                <View style={styles.content}>
                    <Text style={styles.text}>Select Language</Text>
                    <View style={styles.langcontainer}>
                      <View style={styles.flagContainer}>
                        <TouchableOpacity style={styles.langbtn}>
                            <Image source={require('../../assets/United_States.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={styles.langname}>English</Text>
                      </View>
                      <View style={styles.flagContainer}>
                        <TouchableOpacity style={styles.langbtn}>
                            <Image source={require('../../assets/icon_India.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={styles.langname}>Telugu</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('StackK')}}>
                        <Text style={styles.nexttext}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}

export default LanguageScreen;