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
                colors={['#290334', '#845257']}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.content}>
                    <Text style={styles.text}>Select Language</Text>
                    <View style={styles.imagecontainer}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/English.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/Telugu.png')}></Image>
                        </TouchableOpacity>
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