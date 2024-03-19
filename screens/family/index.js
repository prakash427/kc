import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const family_images = [
  { id: '1', source: require('../../assets/pk.png'), title: 'Pawan Kalyan' },
  { id: '2', source: require('../../assets/nb.png'), title: 'Naga Babu' },
  { id: '3', source: require('../../assets/rc.png'), title: 'Ram Charan' },
  { id: '4', source: require('../../assets/aa.png'), title: 'Allu Arjun' },
  { id: '5', source: require('../../assets/as.png'), title: 'Allu Sirish' },
  { id: '6', source: require('../../assets/sdt.png'), title: `Panja Sai \n  Dharma Tej` },
  { id: '7', source: require('../../assets/niha.png'), title: 'Niharika' },
  { id: '8', source: require('../../assets/pvt.png'), title: `Panja \n Vaisshnav Tej` },
  { id: '9', source: require('../../assets/vt.png'), title: 'Varun Tej' },
]

const width = Dimensions.get('window').width;
const image_width = width / 3;

const Family = ({navigation}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={item.source} style={styles.family_image} resizeMode='contain' />
      <Text style={styles.imageTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#E1F6FF', '#91E0FF']}
      style={styles.family_container}
    >
      <View>
        <View style={styles.container}>
          <Text style={styles.know_text}>Know your <Text style={styles.mega_text}>{' '}Mega{' '}</Text> Family</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/family_chiru.png')} resizeMode='cover' />
          </TouchableOpacity>
          <Text style={styles.chiru_text}>Konidela Chiranjeevi</Text>
          <FlatList
            data={family_images}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.family_images_container}
            numColumns={3}
            showsVerticalScrollIndicator
          />
          <TouchableOpacity style={styles.nxt_btn} onPress={() => navigation.navigate('FamilyDetails')}>
            <Text style={styles.nxt_text}>Next</Text>
          </TouchableOpacity>


        </View>
      </View>
    </LinearGradient>
  )
}

export default Family

const styles = StyleSheet.create({
  family_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  imageContainer: {
    marginBottom: 20
  },
  container: {
    alignItems: 'center',
    marginBottom: 90
  },
  know_text: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },
  mega_text: {
    color: '#005575',
  },
  chiru_text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  family_image: {
    width: image_width - 20,
    margin: 5
  },
  // family_images_container: {
  //   paddingHorizontal: 10,
  //   marginBottom: 20
  // },
  nxt_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '35%',
    height: 45,
    borderRadius: 30,
  },
  nxt_text: {
    fontSize: 16,
    color: '#fff',

  },
  imageTitle: {
    fontSize: 12,
    // marginTop: 5,
    color: '#000000',
    fontWeight: '500',
    // paddingStart: 10,
    textAlign: 'center'

  }

})