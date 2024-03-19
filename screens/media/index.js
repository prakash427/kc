import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const fb_images = [
  { id: '1', source: require('../../assets/fb_chiru1.png'), title: 'Stunning Look' },
  { id: '2', source: require('../../assets/fb_chiru2.png'), title: 'Klin Kaara Ceremony' },
  { id: '3', source: require('../../assets/fb_chiru3.png'), title: `Sye Raa \n 1st poster` },
]
const twitter_images = [
  { id: '1', source: require('../../assets/twitter_chiru1.png'), title: `Naatu Nattu Winning \n Celebrations` },
  { id: '2', source: require('../../assets/twitter_chiru2.png'), title: 'Mega Tigers' },
  { id: '3', source: require('../../assets/twitter_chiru3.png'), title: "Happy Mother's day " },
]
const insta_images = [
  { id: '1', source: require('../../assets/insta_chiru1.png'), title: "Happy Women's Day" },
  { id: '2', source: require('../../assets/insta_chiru2.png'), title: `Khaidi 150 first \n poster` },
  { id: '3', source: require('../../assets/insta_chiru3.png'), title: 'Pawan Emotional' },
]

const width = Dimensions.get('window').width;
const image_width = width / 3;

const Media = () => {

  // const renderItem = ({ item }) => (
  //   <Image source={item.source} style={styles.fb_image} resizeMode='contain' />
  // );
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.fb_image} resizeMode='contain' />
      <Text style={styles.imageTitle}>{item.title}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#E1F6FF', '#91E0FF']}
      style={styles.media_container}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome_text}>Welcome to</Text>
          <Text style={styles.chiru_text}>CHIRU UNIVERSE</Text>
          <Text style={styles.follow_text}>Follow Me on</Text>
          <View style={styles.social_container}>
            <Image source={require('../../assets/fb.png')} resizeMode='cover' />
            <Image source={require('../../assets/youtube.png')} resizeMode='cover' />
            <Image source={require('../../assets/insta.png')} resizeMode='cover' />
            <Image source={require('../../assets/twitter.png')} resizeMode='cover' />
          </View>
          <View style={styles.social_container}>
            <Image source={require('../../assets/podcast.png')} resizeMode='cover' />
            <Image source={require('../../assets/reels.png')} resizeMode='cover' />
            <Image source={require('../../assets/thread.png')} resizeMode='cover' />
          </View>
          <View style={styles.head_container}>
            <View>
              <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Facebook</Text>
              <LinearGradient
                style={[styles.line, { alignSelf: 'flex-start' }]}
                colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                start={{ x: 0, y: 0, z: 0 }}
                end={{ x: 1, y: 1, z: 1 }}
              ></LinearGradient>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }}>
              <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={fb_images}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.fbimages_container}
            horizontal
          />
          <View style={styles.head_container}>
            <View>
              <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Twitter</Text>
              <LinearGradient
                style={[styles.line, { alignSelf: 'flex-start' }]}
                colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                start={{ x: 0, y: 0, z: 0 }}
                end={{ x: 1, y: 1, z: 1 }}
              ></LinearGradient>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }}>
              <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={twitter_images}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.fbimages_container}
            horizontal
          />
          <View style={styles.head_container}>
            <View>
              <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Instagram</Text>
              <LinearGradient
                style={[styles.line, { alignSelf: 'flex-start' }]}
                colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                start={{ x: 0, y: 0, z: 0 }}
                end={{ x: 1, y: 1, z: 1 }}
              ></LinearGradient>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }}>
              <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={insta_images}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.fbimages_container}
            horizontal
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Media

const styles = StyleSheet.create({
  media_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    marginBottom: 80
  },
  welcome_text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  chiru_text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  follow_text: {
    color: '#000000',
    marginBottom: 15
  },
  social_container: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 15,
  },
  head_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10
  },
  messagetext: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#000000',
    fontSize: 16,
    paddingBottom: 3
  },
  line: {
    width: 91,
    height: 3,
    marginBottom: 6
  },
  fbimages_container: {
    paddingHorizontal: 10,
  },
  fb_image: {
    width: image_width - 20,
    marginHorizontal: 5
  },
  imageTitle: {
    fontSize: 11,
    // marginTop: 5,
    color: '#000000',
    fontWeight: '500',
    // paddingStart: 10,
    textAlign: 'center'

  }
})