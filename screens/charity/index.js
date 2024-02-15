import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const width = Dimensions.get('window').width;

const Charity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/charity1.png')} style={styles.charity1_image} resizeMode='cover'/>
      <LinearGradient 
        colors={['#290334', '#845257']}
        style={styles.charity_container}
      >
      <Text style={styles.charity_text}>CHIRANJEEVI CHARITABLE TRUST</Text>
      
    <Text style={styles.charity_desc}>
    Chiranjeevi Charitable Trust (CCT) was started by Megastar of Telugu cinema Chiranjeevi
     on 2nd October 1998. In the beginning the two major wings of CCT have been blood bank and
      eye bank. Over the years CCT has collected over 9,30,000 units of blood.  CCT in this period
       had collected 4,580 pairs of eyes and 9,060 blind people were benefited through cornea
        transplant at CCT. CCT also won the prestigious “Best Voluntary Blood Bank’ award by 
        State Government of AP for five years in a row from 2002. In the wake of Covid19 pandemic
         Chiranjeevi took the initiative to start oxygen banks across the worst effected districts
          in the Telugu states to provide people with oxygen to enable them to battle the pandemic. 
    </Text>
    <Text style={styles.register_text}>Register to</Text>
    <TouchableOpacity style={styles.donate_btn}>
      <Text style={styles.donate_text}>Donate Blood</Text>
    </TouchableOpacity>
    
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Charity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  charity1_image: {
    width: width
 },
 charity_container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '70%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30
  },
  charity_text: {
    color: '#f16623',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: 20
  },
  charity_desc: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20
  },
  donate_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f16623',
    width: '70%',
    height: 45,
    marginTop: 30,
    borderRadius: 30,
    marginBottom: 30
  },
  donate_text: {
    fontSize: 16,
    color: '#fff',
    
  },
  register_text: {
    fontSize: 20,
    color: '#fff'
  }
})