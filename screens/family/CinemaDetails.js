import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AirbnbRating, Rating } from 'react-native-ratings';

const CinemaDetails = () => {


  return (
    <LinearGradient
      colors={['#E1F6FF', '#91E0FF']}
      style={styles.family_container}
    >
      <View style={styles.card}>
        <Image source={require('../../assets/bhola.png')} style={styles.image} resizeMode='cover' />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: -5 }}>
          <Entypo name="dot-single" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Director:   </Text>
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'black' }}>Meher Ramesh</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: -5 }}>
          <Entypo name="dot-single" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Writers:    </Text>
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'black' }}>Adi Narayana Siva Mamidala Thirupathi</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 10 }}>
          <Entypo name="dot-single" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Stars:       </Text>
          <Text style={{ fontSize: 12, fontWeight: '600', color: 'black' }}>Chiranjeevi, Tamannaah, Keerthi Suresh</Text>
        </View>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.paragraph}>Shankar and his sister Maha embark on a journey to
          Kolkata, where they be friend Kaali and face
          unforeseenalliances with lawyer Lasya and cab company
          owner Vamsi. A twist in the story reveals Maha's secret
          love affair with Srikar. Shankar, now a cab driver, is
          entangled in a crime syndicate investigation, discovering
          his long-lost brother Bretlee. Charles, Bretlee's brother,
          allies with Shankar against a common enemy. Lasya
          grapples with her feelings for Shankar as his dual identityunfolds, leading to a moral dilemma. Flashbacks unveil
          Shankar and Maha's past as justice enforcers, and the
          present sees Shankar confronting a syndicate
          mastermind to protect his newfound family.</Text>
        <View style={styles.box} >
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/love.png')} style={styles.icon} />
            <Image source={require('../../assets/share.png')} style={styles.icon} />
            <Image source={require('../../assets/chat.png')} style={styles.icon} />
          </View>
        </View>
        <View style={styles.imagecontainer}>
          <Text style={styles.description}>Share: </Text>
          <Image source={require('../../assets/fb.png')} style={styles.icon} />
          <Image source={require('../../assets/youtube.png')} style={styles.icon} />
          <Image source={require('../../assets/twitter.png')} style={styles.icon} />
          <Image source={require('../../assets/insta.png')} style={styles.icon} />
          <Image source={require('../../assets/podcast.png')} style={styles.icon} />
          <Image source={require('../../assets/reels.png')} style={styles.icon} />
          <Image source={require('../../assets/thread.png')} style={styles.icon} />
          <Image source={require('../../assets/whatsapp.png')} style={styles.icon} />
        </View>
        <View style={styles.starcontainer}>
          <Text style={styles.description}>Rating: </Text>
          <AirbnbRating showRating={false} size={20} unSelectedColor={'rgba(255, 221, 85, 0.5)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.submitButton} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="keyboard-arrow-left" size={22} color="black" />
              <Text style={styles.submitButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.nextText}>Next</Text>
              <MaterialIcons name="keyboard-arrow-right" size={22} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default CinemaDetails;

const styles = StyleSheet.create({
  family_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: 360,
    height: 620,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 24
  },
  image: {
    width: '100%',
    height: '33%',
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    marginLeft: 15,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12
  },
  paragraph: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 15,
    marginRight: 15
  },
  box: {
    width: 170,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#005575',
    borderRadius: 10,
    marginLeft: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  imagecontainer: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 10,
    flexWrap: 'wrap',
    gap: 6
  },
  starcontainer: {
    flexDirection: 'row',
    paddingBottom: 5,
    flexWrap: 'wrap',
    gap: 6
  },
  submitButton: {
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignSelf: 'Center',
    width: 110,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: '#000000'
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15
  },
  nextButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 30,
    alignSelf: 'Center',
    width: 110,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: '#000000'
  },
  nextText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15
  },
});