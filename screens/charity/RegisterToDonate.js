import { Image, KeyboardAvoidingView,Platform, StatusBar, StyleSheet, Text, TextInput, View, Pressable, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker from 'react-native-country-picker-modal';

const width = Dimensions.get('window').width;


const RegisterToDonate = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodgroup, setBloodgroup] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('IN');

    const handleCountrySelect = (country) => {
        setSelectedCountry(country.cca2);
    };


    return (
        <KeyboardAvoidingView
           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
           style={styles.container}>
            
            <StatusBar hidden />
            <Image source={require('../../assets/register_blood_chiru.png')} style={styles.donate_image} resizeMode='cover' />
            <LinearGradient
                colors={['#E1F6FF', '#91E0FF']}
                style={styles.login_container}
            >
                <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.chiru_text}>Register To Donate Blood</Text>
                <View style={styles.input_container}>
                    <MaterialCommunityIcons name="account-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                </View>
                <View style={styles.input_container}>
                    <Feather name="calendar" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Age'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setAge(text)}
                        value={age}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={styles.input_container}>
                    <MaterialCommunityIcons name="water-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Blood Group'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setBloodgroup(text)}
                        value={bloodgroup}
                    />
                </View>
                <View style={styles.input_container}>
                    <MaterialCommunityIcons name="city" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='City'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setCity(text)}
                        value={city}
                    />
                </View>
                <View style={styles.input_container}>
                    <Ionicons name="golf-outline" size={22} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='State'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setState(text)}
                        value={state}
                    />
                </View>
                <View style={styles.input_container}>
                    <MaterialCommunityIcons name="map-marker-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Pin Code'
                        placeholderTextColor='#000'
                        onChangeText={(text) => setPincode(text)}
                        value={pincode}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={[styles.input_container, styles.countryInput]}>
                    <CountryPicker
                        countryCode={selectedCountry}
                        onSelect={handleCountrySelect}
                        withFilter={true}
                        withFlagButton={true}
                        withCountryNameButton
                        withAlphaFilter
                        withModal={true}
                    />
                </View>

                <Pressable style={styles.submit_btn} onPress={() => navigation.navigate('RegistrationSuccess')}>
                    <Text style={styles.submit_text}>SUBMIT</Text>
                </Pressable>
                </ScrollView>
            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default RegisterToDonate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    donate_image: {
        width: width,
        height: '32%'
    },
    login_container: {
        flex: 1,
        marginTop: -20,
       
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        
    },
    scroll: {
        paddingBottom: 100,
        width: '100%',
        padding: 40,
        alignItems: 'center',
    },

    chiru_text: {
        color: '#005575',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        flex: 1,
        width: '100%',
        fontSize: 14,
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#000',
        borderBottomWidth: 1,
        width: '100%',
        
    },
    countryInput: {
        paddingVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    submit_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: '70%',
        height: 45,
        borderRadius: 30,
        marginBottom: 10
    },
    submit_text: {
        fontSize: 16,
        color: '#fff'
    },

})