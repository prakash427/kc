import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const movieImages = [
  { id: '1', source: require('../../assets/Movies1.png') },
  { id: '2', source: require('../../assets/Movies6.png') },
  { id: '3', source: require('../../assets/Movies11.png') },
  { id: '4', source: require('../../assets/Movies2.png') },
  { id: '5', source: require('../../assets/Movies7.png') },
  { id: '6', source: require('../../assets/Movies12.png') },
  { id: '7', source: require('../../assets/Movies3.png') },
  { id: '8', source: require('../../assets/Movies8.png') },
  { id: '9', source: require('../../assets/Movies13.png') },
  { id: '10', source: require('../../assets/Movies4.png') },
  { id: '11', source: require('../../assets/Movies9.png') },
  { id: '12', source: require('../../assets/Movies14.png') },
  { id: '13', source: require('../../assets/Movies5.png') },
  { id: '14', source: require('../../assets/Movies10.png') },
  { id: '15', source: require('../../assets/Movies15.png') },
]

const socialMediaimages = [
  { id: '1', source: require('../../assets/facebooks.png') },
  { id: '2', source: require('../../assets/youtubes.png') },
  { id: '3', source: require('../../assets/twitters.png') },
  { id: '4', source: require('../../assets/instagrams.png') },
  { id: '5', source: require('../../assets/podcasts.png') },
  { id: '6', source: require('../../assets/reelss.png') },
  { id: '7', source: require('../../assets/threads.png') },
  { id: '8', source: require('../../assets/whatsapps.png') },
]

const width = Dimensions.get('window').width;
const image_width = width / 3;

const StreamingRecords = ({ updateStreaming,updateDialogue,updateMovies,updateNews, updateEvents, updateGallery }) => {
  const handleClick = () => {
    updateStreaming(false);
    updateDialogue(false); 
    updateMovies(false);
    updateNews(false);
    updateEvents(false);
    updateGallery(false);
  };
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ margin: -3 }}>
      <Image
        style={{ width: image_width, height: image_width }}
        source={item.source}
      />
      <FontAwesome5
        name='play-circle'
        size={30}
        color='#ffffff'
        style={{ position: 'absolute', bottom: 30, left: 20 }}
      />
    </TouchableOpacity>
  );

  const renderSocialItem = ({ item }) => (
    <TouchableOpacity style={{ marginRight: 5 }}>
      <Image
        style={{ width: 20, height: 20, }}
        source={item.source}
      />
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#E1F5FF', '#91E0FF']}
      style={styles.media_container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClick}>
          <FontAwesome5 name='arrow-left' size={24} color='#ffffff' />
        </TouchableOpacity>
        <Text style={styles.streamingtext}>Streaming Records</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{ maxHeight: 630, padding: 10 }}
          data={movieImages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
        <View style={{ alignSelf: 'center', paddingTop : 9 }}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.shareText}>Share:</Text>
            <FlatList
              style={{ maxHeight: 20 }}
              horizontal
              data={socialMediaimages}
              renderItem={renderSocialItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default StreamingRecords;

const styles = StyleSheet.create({
  media_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  container: {
    //alignItems: 'center',
  },
  shareText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#005575',
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    padding: 15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  streamingtext: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20
  }
})
