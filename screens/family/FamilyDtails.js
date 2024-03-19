// ##################individual family screen###############
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const FamilyDetails = ({navigation}) => {

  const images = [
    { id: '1', source: require('../../assets/cinema1.png'), title: 'Bhola Shankar' },
    { id: '2', source: require('../../assets/cinema2.png'), title: 'Waltair Veerayya' },
    { id: '3', source: require('../../assets/cinema3.png'), title: 'God Father' },
    { id: '4', source: require('../../assets/cinema4.png'), title: 'Acharya' },
  ];

  const renderImages = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity style={styles.imageWrapper} onPress={() => navigation.navigate('CinemaDetails')}>
        <Image style={styles.image} source={item.source} resizeMode='cover' />
        <View style={styles.newsTextContainer}>
          <Text style={styles.imageTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>

    </View >
  );

  return (
    <LinearGradient
      colors={['#E1F6FF', '#91E0FF']}
      style={styles.family_container}
    >

      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.chiruImage} source={require('../../assets/family_chiru.png')} resizeMode='cover' />
        </TouchableOpacity>
        <Text style={styles.chiru_text}>Konidela Chiranjeevi</Text>
        <Text style={styles.paragraph}> Konidela Chiranjeevi (born Konidela Sivasankara
          Varaprasad; 22 August 1955) is an Indian actor, film
          producer and former politician. He is regarded as one of the most successful and influential actors in the
          history of Indian cinema.</Text>
        <View style={styles.head_container}>
          <View>
            <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Connect</Text>
            <LinearGradient
              style={[styles.line, { alignSelf: 'flex-start' }]}
              colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
              start={{ x: 0, y: 0, z: 0 }}
              end={{ x: 1, y: 1, z: 1 }}
            ></LinearGradient>
            <View style={styles.iconBox}>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/insta.png')} style={styles.iconImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/youtube.png')} style={{ height: 35, width: 35 }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/twitter.png')} style={styles.iconImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/fb.png')} style={styles.iconImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/instagram.png')} style={styles.iconImage} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Movie List</Text>
            <LinearGradient
              style={[styles.line, { alignSelf: 'flex-start' }]}
              colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
              start={{ x: 0, y: 0, z: 0 }}
              end={{ x: 1, y: 1, z: 1 }}
            ></LinearGradient>
            <FlatList
              data={images}
              renderItem={renderImages}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default FamilyDetails;

const styles = StyleSheet.create({
  family_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
  },
  chiruImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10
  },
  chiru_text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  paragraph: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  head_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  messagetext: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#000000',
    fontSize: 18,
  },
  line: {
    width: 91,
    height: 3,
  },
  iconBox: {
    borderWidth: 1,
    borderColor: '#005575',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 55,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    paddingHorizontal: 15,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 5,
    // paddingHorizontal: 20,
    marginTop: 10,
  },
  imageWrapper: {
    width: '45%',
    marginBottom: 10,
    elevation: 5
  },
  image: {
    width: 150,
    height: 85,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  imageTitle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
    fontWeight: '700'
  },
  newsTextContainer: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  flatListContainer: {
    // paddingHorizontal: 10, // Adjust horizontal padding for spacing between columns
  },
});