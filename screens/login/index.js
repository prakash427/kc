import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignupClick = () => {
     navigation.navigate('Signup');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Image source={require('../../assets/chiru_login.png')} style={styles.login_image} resizeMode='cover'/>
      <LinearGradient 
        colors={['#E1F6FF', '#91E0FF']}
        style={styles.login_container}
      >
      <Text style={styles.chiru_text}>Chiru Universe</Text>
      <View style={styles.input_container}>
      <Icon name="mail-outline" size={24} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#000'
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none" 
      />
    </View>
    <View style={styles.input_container}>
      <Icon name="lock-outline" size={24} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#000'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <Ionicons
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color="#000"
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.forgot_password_text}>Forgot Password</Text>
    <TouchableOpacity style={styles.login_btn}>
      <Text style={styles.login_text}>LOG IN</Text>
    </TouchableOpacity>
    <Text style={styles.or_text}>Or Login By</Text>
    <View style={styles.social_container}>
      <TouchableOpacity style={styles.social_btn}>
      <Image source={require('../../assets/google.png')} style={styles.social_icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.social_btn}>
      <Image source={require('../../assets/facebook.png')} style={styles.social_icon}/>
      </TouchableOpacity>
    </View>
    <View style={styles.dont_container}>
      <Text style={styles.dont_text}>
        Don't have account? 
      </Text>
      <TouchableOpacity style={styles.signup_btn} onPress={handleSignupClick}>
        <Text style={styles.signup_text}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  login_image: {
    width: width
 },
  login_container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '65%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40
  },
  chiru_text: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 16,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#000',
    borderBottomWidth: 1
  },
  icon: {
    marginRight: 10,
  },
  forgot_password_text: {
    color: '#000',
    fontSize: 14,
    marginTop: 20
  },
  login_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '70%',
    height: 45,
    marginTop: 30,
    borderRadius: 30,
    marginBottom: 30
  },
  login_text: {
    fontSize: 16,
    color: '#fff'
  },
  or_text: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10
  },
  social_container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15
  },
  social_btn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12
  },
  social_icon: {
    width: 25,
    height: 25
  },
  dont_container: {
    flexDirection: 'row'
  },
  dont_text: {
    color: '#000',
    fontSize: 14,
  },
  signup_text: {
    color: '#000',
    fontWeight: 'bold'
  },
  signup_btn: {
    marginLeft: 5
  }
})