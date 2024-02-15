import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;

const Signup = ({navigation}) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [anniversary, setAnniversary] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleLoginClick = () => {
       navigation.navigate('Login');
    }

    const handleSignupClick = () => {
       navigation.navigate('LanguageScreen');
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <Image source={require('../../assets/chiru_signup.png')} style={styles.signup_image} resizeMode='cover'/>
        <LinearGradient 
          colors={['#290334', '#845257']}
          style={styles.login_container}
        >
        <Text style={styles.chiru_text}>Create An Account</Text>
        <View style={styles.input_container}>
        <MaterialCommunityIcons name="account-outline" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#fff'
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
        <View style={styles.input_container}>
        <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Date of Birth'
          placeholderTextColor='#fff'
          onChangeText={(text) => setDob(text)}
          value={dob}
        />
      </View>
        <View style={styles.input_container}>
        <FontAwesome name="user-o" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Country'
          placeholderTextColor='#fff'
          onChangeText={(text) => setCountry(text)}
          value={country}
        />
      </View>
        <View style={styles.input_container}>
        <Feather name="phone" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          placeholderTextColor='#fff'
          onChangeText={(text) => setPhone(text)}
          value={phone}
          keyboardType='number-pad'
        />
      </View>
        <View style={styles.input_container}>
        <MaterialCommunityIcons name="gender-female" size={22} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Gender'
          placeholderTextColor='#fff'
          onChangeText={(text) => setGender(text)}
          value={gender}
        />
      </View>
        <View style={styles.input_container}>
        <Feather name="users" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Anniversary'
          placeholderTextColor='#fff'
          onChangeText={(text) => setAnniversary(text)}
          value={anniversary}
        />
      </View>
      <View style={styles.input_container}>
        <Icon name="lock-outline" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#fff'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signup_btn} onPress={handleSignupClick}>
        <Text style={styles.signup_text}>SIGN UP</Text>
      </TouchableOpacity>
      
      <View style={styles.already_container}>
        <Text style={styles.already_text}>
          Already have account? 
        </Text>
        <TouchableOpacity style={styles.login_btn} onPress={handleLoginClick}>
          <Text style={styles.login_text}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }
  
  export default Signup
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      position: 'relative'
    },
    signup_image: {
       width: width
    },
    login_container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '70%',
      bottom: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 40
    },
    chiru_text: {
      color: '#f16623',
      fontSize: 25,
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
      borderColor: '#fff',
      borderBottomWidth: 1
    },
    icon: {
      marginRight: 10,
    },
    signup_btn: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f16623',
      width: '70%',
      height: 45,
      borderRadius: 30,
      marginBottom: 10
    },
    signup_text: {
      fontSize: 16,
      color: '#fff'
    },
    already_container: {
      flexDirection: 'row'
    },
    already_text: {
      color: '#fff',
      fontSize: 14,
    },
    login_text: {
      color: '#f16623',
    },
    login_btn: {
      marginLeft: 5
    }
  })