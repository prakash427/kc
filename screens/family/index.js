import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const family_images = [
  { id: '1', source: require('../../assets/pk.png') },
  { id: '2', source: require('../../assets/nb.png') },
  { id: '3', source: require('../../assets/rc.png') },
  { id: '4', source: require('../../assets/aa.png') },
  { id: '5', source: require('../../assets/as.png') },
  { id: '6', source: require('../../assets/sdt.png') },
  { id: '7', source: require('../../assets/niha.png') },
  { id: '8', source: require('../../assets/pvt.png') },
  { id: '9', source: require('../../assets/vt.png') },
]

const width = Dimensions.get('window').width;
const image_width = width/3;

const Family = () => {

  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.family_image} resizeMode='contain'/>
  ); 

  return (
    <LinearGradient 
      colors={['#290334', '#845257']}
      style={styles.family_container}
    >
     <View>
      <View style={styles.container}>
      <Text style={styles.know_text}>Know your <Text style={styles.mega_text}>{' '}Mega{' '}</Text> Family</Text>
      <Image source={require('../../assets/family_chiru.png')}  resizeMode='cover'/>
      <Text style={styles.chiru_text}>Konidela Chiranjeevi</Text>
      <FlatList
            data={family_images}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.family_images_container}
            numColumns={3}
            showsVerticalScrollIndicator
          />
      <TouchableOpacity style={styles.nxt_btn}>
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
  container: {
    alignItems: 'center',
    marginBottom: 120
  },
  know_text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },
  mega_text: {
    color: '#f16623',
  },
  chiru_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  family_image: {
    width: image_width - 20,
    margin: 5
  },
  family_images_container: {
    paddingHorizontal: 10,
  },
  nxt_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f16623',
    width: '70%',
    height: 45,
    marginTop: 0,
    borderRadius: 30,
  },
  nxt_text: {
    fontSize: 16,
    color: '#fff',
    
  },
})