import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import Slides from "../swipe/com";
import styles from "./style";
import StreamingRecords from "../streamingrecordsscreen";
import ChirusdialoguesScreen from "../chirudialogues";
import MoviesdisplayScreen from "../moviesscreen";
import NewsScreen from "../news";
import EventScreen from "../eventsscreen";
import GalleryScreen from "../gallery";
import CustomModal from "../../components/CustomModal";
import CustomAudio from "../../components/customAudio";
import Newspage from "../newspage";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const width = Dimensions.get('window').width;
const Homescreen = () => {
    const [visible, setVisible ] = useState(false);
    const [audio, setAudio] = useState(false);
    const [streaming, setStreaming] = useState(false)
    const[dialogues, setDialogues] = useState(false)
    const[moviesupdate,setMoviesupdate] = useState(false)
    const [news, setNews] = useState(false)
    const[event,setEvent] = useState(false)
    const [gallery, setGallery] = useState(false)
    console.log('dailogue',dialogues);
    console.log('streaming',streaming);
    console.log('movies',moviesupdate)
    const images = [
        { id: '1', image: require('../../assets/Rectangle17.png') },
        { id: '2', image: require('../../assets/Rectangle124.png') },
        { id: '3', image: require('../../assets/Rectangle17.png') },
        { id: '4', image: require('../../assets/Rectangle124.png') },
        { id: '5', image: require('../../assets/Rectangle17.png') },
    ];
    const movies = [
        { id: '1', image: require('../../assets/Rectangle17(1).png') },
        { id: '2', image: require('../../assets/Rectangle124(1).png') },
        { id: '3', image: require('../../assets/Rectangle17(1).png') },
        { id: '4', image: require('../../assets/Rectangle124(1).png') },
        { id: '5', image: require('../../assets/Rectangle17(1).png') },
    ]
    const News = [
        { id: '1', image: require('../../assets/Rectangle19.png'), text: 'Venkatesh expresses desire to collaborate with Mega Star....' },
        { id: '2', image: require('../../assets/Rectangle19(1).png'), text: 'Mega Star Chiranjeevi’s Next Project With UV Creations' },
        { id: '3', image: require('../../assets/Rectangle19.png'), text: 'Venkatesh expresses desire to collaborate with Mega Star....' },
        { id: '4', image: require('../../assets/Rectangle19(1).png'), text: 'Mega Star Chiranjeevi’s Next Project With UV Creations' },
        { id: '5', image: require('../../assets/Rectangle19.png'), text: 'Venkatesh expresses desire to collaborate with Mega Star....' },
    ]
    const renderItem = ({ item }) => (
        <View style={{ borderRadius: 5, height: 190 }}>
            <TouchableOpacity>
                <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
            </TouchableOpacity>
        </View>
    );
    const movieItem = ({ item }) => (
        <View style={{ borderRadius: 5, height: 200 }}>
            <TouchableOpacity>
                <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
            </TouchableOpacity>
        </View>
    );
    const newsItem = ({ item }) => (
        <View style={{ borderRadius: 5, height: 180 }}>
            <TouchableOpacity>
                <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.newsTextContainer}>
                <Text style={styles.newstext}>{item.text}</Text>
            </View>
        </View>
    );
    if (!streaming && !dialogues && !moviesupdate && !news && !event && !gallery) {
        return (
            <LinearGradient
                style={styles.container}
                colors={['#E1F6FF', '#91E0FF']}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.content}>
                    <ScrollView>
                        <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.searchbar}>
                                <View style={styles.searchbarcontent}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/Ellipse1.png')}></Image>
                                    </TouchableOpacity>
                                    <View style={styles.icon}>
                                        <TouchableOpacity>
                                            <Feather name="search" size={26} color='black' />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <MaterialCommunityIcons name="message-text-outline" size={22} color='#005575' />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Ionicons name="notifications-outline" size={22} color='#005575' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.categories}>
                                <TouchableOpacity style={styles.category}>
                                    <Text style={styles.text}>Reels</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.category}>
                                    <Text style={styles.text}>Movie Trailers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.category}>
                                    <Text style={styles.text}>Threads</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.category}>
                                    <Text style={styles.text}>Latest News</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.stories}>
                                <View style={styles.story}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/Ellipse2.png')} style={styles.storyimage}></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.storytext}>Attend Hanuman's Pre-release</Text>
                                </View>
                                <View style={styles.story}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/Ellipse3.png')} style={styles.storyimage}></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.storytext}>Chiranjeevi and Ram charan</Text>
                                </View>
                                <View style={styles.story}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/Ellipse4.png')} style={styles.storyimage}></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.storytext}>Chiranjeevi and his family</Text>
                                </View>
                                <View style={styles.story}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/Ellipse5.png')} style={styles.storyimage}></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.storytext}>Chiranjeevi at hanuman Pre-release</Text>
                                </View>
                            </View>
                            <View style={styles.message}>
                                <Text style={styles.messagetext}>Chiru's Message</Text>
                                <LinearGradient
                                    style={styles.line}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <View style={styles.messages}>
                                <TouchableOpacity onPress={() => setVisible(true)} style={[styles.st, { borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }]}>
                                    <View>
                                        <Text style={styles.messagetype}>Text</Text>
                                        <View style={{ flexDirection: 'row', gap: 4 }}>
                                            <Text style={{ fontSize: 7, fontWeight: 'normal', color: '#000000' }}>“It so happens{'\n'} that after a  than{'\n'} our...</Text>
                                            <View style={{ flexDirection: 'column', gap: 4 }}>
                                                <Image source={require('../../assets/message-dots-square.png')}></Image>
                                                <Text style={[styles.messagetype, { fontSize: 7 }]}>Read More</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setAudio(true)} style={styles.st}>
                                    <View>
                                        <Text style={styles.messagetype}>Audio</Text>
                                        <View style={{ flexDirection: 'row', gap: 4 }}>
                                            <Text style={{ fontSize: 7, fontWeight: 'normal', color: '#000000' }}>“It so happens{'\n'} that after a{'\n'}  than our...</Text>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Image source={require('../../assets/play-circle.png')}></Image>
                                                <Text style={[styles.messagetype, { fontSize: 7 }]}>Listen Now</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.st, { borderTopRightRadius: 15, borderBottomRightRadius: 15 }]}>
                                    <View>
                                        <Text style={styles.messagetype}>Video</Text>
                                        <View style={{ flexDirection: 'row', gap: 4 }}>
                                            <Text style={{ fontSize: 7, fontWeight: 'normal', color: '#000000' }}>“It so happens{'\n'} that after a{'\n'}  than our...</Text>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Image source={require('../../assets/video-recorder.png')}></Image>
                                                <Text style={[styles.messagetype, { fontSize: 7 }]}>Watch Now</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <CustomModal visible={visible} onClose={()=> setVisible(false)}/>
                            <CustomAudio visible={audio} onClose={()=> setAudio(false)}/>
                            <View style={styles.message}>
                                <Text style={styles.messagetext}>Live Stream</Text>
                                <LinearGradient
                                    style={styles.line}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/live.png')} resizeMode='contain' style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={styles.messagetext}>Streaming Records</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={() => { setStreaming(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <FlatList
                                data={images}
                                renderItem={renderItem}
                                horizontal
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                                showsVerticalScrollIndicator={false}
                                bounces
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={styles.messagetext}>Chiru's Dialogues</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={()=>{setDialogues(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginLeft: 15, marginRight: 15 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/Rectangle14.png')} resizeMode="contain" style={{ height: 100, width: 170 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/Rectangle16.png')} resizeMode="contain" style={{ height: 100, width: 170 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/Rectangle15.png')} resizeMode="contain" style={{ height: 100, width: 170 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/Rectangle13.png')} resizeMode="contain" style={{ height: 100, width: 170 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Movies</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={()=>{setMoviesupdate(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <FlatList
                                data={movies}
                                renderItem={movieItem}
                                horizontal
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                                showsVerticalScrollIndicator={false}
                                bounces
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>News</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={()=>{setNews(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <FlatList
                                data={News}
                                renderItem={newsItem}
                                horizontal
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                                showsVerticalScrollIndicator={false}
                                bounces
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Event Videos</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={()=>{setEvent(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ margin: 0 }}>
                            <Slides style={{ margin: 0 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <View style={styles.message}>
                                <Text style={[styles.messagetext, { alignSelf: 'flex-start' }]}>Gallery</Text>
                                <LinearGradient
                                    style={[styles.line, { alignSelf: 'flex-start' }]}
                                    colors={['#F16623', 'rgba(241, 102, 35, 0.29)', 'rgba(241, 102, 35, 0)']}
                                    start={{ x: 0, y: 0, z: 0 }}
                                    end={{ x: 1, y: 1, z: 1 }}
                                ></LinearGradient>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }} onPress={()=>{setGallery(true)}}>
                                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>View More</Text>
                                <AntDesign name={'right'} color={'#000000'} style={{ paddingTop: 6 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10, marginRight: 10, gap: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={require('../../assets/gallery1.png')} />
                                <Image source={require('../../assets/gallery2.png')} />
                                <Image source={require('../../assets/gallery3.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={require('../../assets/gallery4.png')} />
                                <Image source={require('../../assets/gallery5.png')} />
                                <Image source={require('../../assets/gallery6.png')} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        );
     } 
    else if(streaming){
        return (
            <StreamingRecords updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    } 
    else if(dialogues){
        return(
            <ChirusdialoguesScreen updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    }
    else if(moviesupdate){
        return(
            <MoviesdisplayScreen updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    }
    else if(news){
        return(
            <NewsScreen updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    }
    else if(event){
        return(
            <EventScreen updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    }
    else if(gallery){
        return(
            <GalleryScreen updateStreaming={setStreaming} updateDialogue={setDialogues} updateMovies={setMoviesupdate} updateNews={setNews} updateEvents={setEvent} updateGallery={setGallery}/>
        )
    }
}
export default Homescreen;