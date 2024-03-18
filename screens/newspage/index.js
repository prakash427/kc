import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList, TextInput, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
//import { Rating,RatingProps } from '@rneui/themed';
import { AirbnbRating, Rating } from 'react-native-ratings';
import Entypo from 'react-native-vector-icons/Entypo';
//import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    media_container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'flex-start',
    },
    header: {
        backgroundColor: '#005575',
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        padding: 12,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    content: {
        flexDirection: 'column',
        gap: 7,
        padding: 20,
        alignSelf: 'center'
    },
    boldtext: {
        fontWeight: 'bold',
        color: '#000000'
    },
    normaltext: {
        color: '#000000',
        fontSize: 12
    },
    imagecontainer: {
        width: 345,
        height: 200,
    },
    image: {
        width: 345,
        height: 200,
        resizeMode: 'contain'
    },
    newscontainer: {
        width: 350,
        height: 153,
        alignItem: 'flex-start',
        gap: 5
    },
    text: {
        textAlign: 'left',
        fontSize: 10,
        color: '#000000'
    },
    likecontainer: {
        width: 35,
        height: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#005575',
        // marginBottom : 10,
        // marginTop : 5
    },
    commentBox: {
        width: 350,
        height: 160,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#005575'
    },
    input: {
        borderWidth: 1,
        borderColor: '#696767',
        height: 63,
        width: 320,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    submmitButton: {
        backgroundColor: '#000000',
        height: 30,
        width: 90,
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navButton : {
        flexDirection : 'row',
        backgroundColor: '#000000',
        height: 30,
        width: 75,
        alignItems : 'center',
        justifyContent  :'center',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#000000'
    }
});

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

const Newspage = () => {
    //const navigation = useNavigation();
    const [comment, setComment] = useState('')
    const handleClick = () => {
        updateStreaming(false);
        updateDialogue(false);
        updateMovies(false);
        updateNews(true);
        updateEvents(false);
        updateGallery(false);
    };

    const renderSocialItem = ({ item }) => (
        <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
                style={{ width: 20, height: 20, }}
                source={item.source}
            />
        </TouchableOpacity>
    );

    const SeparatorComponent = () => {
        return <View style={{ width: 8 }} />; 
    };


    return (
        <LinearGradient
            colors={['#E1F5FF', '#91E0FF']}
            style={styles.media_container}
        >
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome5 name='arrow-left' size={24} color='#ffffff' />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.boldtext}>Venkatesh Express Desire To Collaborate With Mega Star....</Text>
                    </View>
                    <View>
                        <Text style={[styles.normaltext, { fontWeight: '500' }]}>January 13, 2024</Text>
                    </View>
                    <View style={styles.imagecontainer}>
                        <Image source={require('../../assets/newspage.png')} style={styles.image}></Image>
                    </View>
                    <View style={styles.newscontainer}>
                        <Text style={styles.text}>Veteran actor Victory Venkatesh, currently immersed in the promotions of his upcoming film “ ,” directed by Sailesh Kolanu of the HIT franchise, expressed his eagerness to collaborate with Megastar Chiranjeevi. During the theatrical trailer launch event, Venkatesh shared his enthusiasm, stating, “I am looking forward to collaborating with him.</Text>
                        <Text style={styles.text}>We always wanted to work together. But for that to happen, we need a good story. If writers can come up with some nice stories, we will definitely collaborate. I always imagine him (Chiranjeevi) playing an authoritative person who would order me to do things.” The prospect of a collaboration between Venky and Chiru holds tremendous excitement, given their massive fan base among family audiences.</Text>
                    </View>
                    <TouchableOpacity style={styles.likecontainer}>
                        <Image source={require('../../assets/Vector.png')} />
                    </TouchableOpacity>
                    <View>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={styles.boldtext}>Share:</Text>
                            <FlatList
                                style={{ maxHeight: 20 }}
                                horizontal
                                data={socialMediaimages}
                                renderItem={renderSocialItem}
                                keyExtractor={(item) => item.id}   
                                ItemSeparatorComponent={SeparatorComponent}      
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Text style={styles.boldtext}>Rating:</Text>
                        <AirbnbRating showRating={false} size={15} unSelectedColor={'rgba(255, 221, 85, 0.5)'} />
                    </View>
                    <View style={styles.commentBox}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={[styles.boldtext, { fontSize: 14 }]}>Comments</Text>
                            <Image source={require('../../assets/ant-design_comment-outlined.png')}></Image>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='Type Here...'
                            placeholderTextColor='#696767'
                            onChangeText={(text) => setComment(text)}
                            value={comment}
                        />
                        <TouchableOpacity style={styles.submmitButton}>
                            <Text style={{ color: '#ffffff' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 40, alignSelf: 'center', padding : 40 }}>
                        <TouchableOpacity style={[styles.navButton,{backgroundColor : '#ffffff'}]}>
                            <Entypo name='chevron-small-left' color={'#000000'} size={20}/>
                            <Text style={{ color: '#000000' }}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton}>
                            <Text style={{ color: '#ffffff' }}>Next</Text>
                            <Entypo name='chevron-small-right' color={'#ffffff'} size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Newspage;