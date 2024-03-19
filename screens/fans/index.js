import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AskChiruModal from '../../components/AskChiruModal';

const data = [
  {
    id: '1', name: 'Text Message',
    lastMessage: '“It so happens that after a certain stage, we have to give in to the wishes of the people rather than our',
    time: '10 Hrs ago',
    avatar: require('../../assets/Chiru_chat.png')
  },
  {
    id: '2',
    name: 'Listen Song',
    lastMessage: 'Jam Jam Jajjanaka Listen Now',
    time: '8 Hrs ago',
    avatar: require('../../assets/spotify_chat.png')
  },
  {
    id: '3', name: 'Text Message',
    lastMessage: '“It so happens that after a certain stage, we have to give in to the wishes of the people rather than our',
    time: '10 Hrs ago',
    avatar: require('../../assets/Chiru_chat.png')
  },
  {
    id: '4',
    name: 'Listen Song',
    lastMessage: 'Jam Jam Jajjanaka Listen Now',
    time: '8 Hrs ago',
    avatar: require('../../assets/spotify_chat.png')
  },
  {
    id: '5', name: 'Text Message',
    lastMessage: '“It so happens that after a certain stage, we have to give in to the wishes of the people rather than our',
    time: '10 Hrs ago',
    avatar: require('../../assets/Chiru_chat.png')
  },
  {
    id: '6',
    name: 'Listen Song',
    lastMessage: 'Jam Jam Jajjanaka Listen Now',
    time: '8 Hrs ago',
    avatar: require('../../assets/spotify_chat.png')
  },

];

const Fans = () => {
  const [isVisible, setIsVisible] = useState(false);

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item)}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <Text style={styles.read}>Read More</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setIsVisible(false)
  }

  const handleChatPress = (chat) => {
    // Handle chat item press
    console.log('Chat pressed:', chat);
  };

  return (
    <LinearGradient
      colors={['#E1F6FF', '#91E0FF']}
      style={styles.fans_container}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={styles.container}
      />
      <TouchableOpacity style={styles.ask_button} onPress={() => setIsVisible(true)}>
        <Text style={styles.ask_text}>Ask</Text>
        <Text style={styles.ask_text}>Chiru?</Text>
      </TouchableOpacity>
      <AskChiruModal closeModal={closeModal} setIsVisible={setIsVisible} isVisible={isVisible}/>
    </LinearGradient>
  )
}

export default Fans

const styles = StyleSheet.create({
  fans_container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  container: {
    padding: 16,
    paddingBottom: 70
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  lastMessage: {
    fontSize: 12,
    color: '#000000',
  },
  read: {
    fontSize: 10,
    color: '#005575',
  },
  time: {
    fontSize: 10,
    color: '#000000',
  },
  ask_button: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: '#005575',
    borderRadius: 40,
    bottom: 100,
    right: 20,
  },
  ask_text: {
    fontSize: 14,
    color: '#fff',
  }
})