import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    media_container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    //   wrapper: {
    //     marginBottom: 20,
    //   },
    slide: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 15
        //backgroundColor: '#9DD6EB',
    },
    row: {
        flexDirection: 'row',
        gap : 20,
        paddingBottom: 15,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 150,
        alignSelf: 'center',
    },
    paginationText: {
        color: '#000000',
        fontSize: 20,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        width: 30,
        textAlign: 'center',
        borderRadius: 5,
    },
    paginationTextActive: {
        color: '#005575',
        fontSize: 20,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#005575',
        width: 30,
        textAlign: 'center',
        borderRadius: 5,
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
    streamingtext: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 20
    },
    arrow: {
        color: '#000000',
        fontSize: 20,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        width: 30,
        textAlign: 'center',
        borderRadius: 5,
    },
    shareText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold'
    },
});

const images = [
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    require('../../assets/event1.png'),
    require('../../assets/event2.png'),
    require('../../assets/event3.png'),
    require('../../assets/event4.png'),
    require('../../assets/event5.png'),
    require('../../assets/event6.png'),
    require('../../assets/event7.png'),
    require('../../assets/event8.png'),
    require('../../assets/event9.png'),
    require('../../assets/event10.png'),
    require('../../assets/event11.png'),
    require('../../assets/event12.png'),
    
    // Add more image paths as needed
];

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

const EventScreen = ({ updateStreaming,updateDialogue,updateMovies,updateNews, updateEvents,updateGallery }) => {
    const handleClick = () => {
        updateStreaming(false);
        updateDialogue(false); 
        updateMovies(false);
        updateNews(false);
        updateEvents(false);
        updateGallery(false);
      };
    const swiperRef = useRef(null);

    // Function to split images into arrays for each slide
    const splitIntoSlides = (images, rows, columns) => {
        const slides = [];
        const imagesPerSlide = rows * columns;
        for (let i = 0; i < images.length; i += imagesPerSlide) {
            slides.push(images.slice(i, i + imagesPerSlide));
        }
        return slides;
    };

    const renderSocialItem = ({ item }) => (
        <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
                style={{ width: 20, height: 20, }}
                source={item.source}
            />
        </TouchableOpacity>
    );

    const renderPagination = (index, total) => {
        return (
            <>
                <View style={styles.pagination}>
                    <TouchableOpacity onPress={() => { index !== 0 ? swiperRef.current.scrollBy(-1) : null }}>
                        <Text style={[styles.arrow, { backgroundColor: index === 0 ? '#919EAB' : '#ffffff' }]}>{'<'}</Text>
                    </TouchableOpacity>
                    {Array.from(Array(total), (_, i) => {
                        if (i === 0 || i === 1 || i === total - 1 || i === total - 2 || i === index) {
                            return (
                                <Text
                                    key={i}
                                    style={index === i ? styles.paginationTextActive : styles.paginationText}>
                                    {i + 1}
                                </Text>
                            );
                        } else if (
                            (i === index - 2 && index > 2) ||
                            (i === index + 2 && index < total - 3) &&
                            (i === 2 && index > 3) ||
                            (i === total - 3 && index < total - 4)
                        ) {
                            return <Text key={i} style={styles.paginationText}>{'\u2026'}</Text>; // Render dots
                        }
                    })}
                    <TouchableOpacity onPress={() => { index !== total - 1 ? swiperRef.current.scrollBy(1) : null }}>
                        <Text style={[styles.arrow, { backgroundColor: index === total - 1 ? '#919EAB' : '#ffffff' }]}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', position : 'absolute', bottom : 100 }}>
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
            </>
        );
    };

    // Function to render 6 rows with 2 images in each row
    const renderRows = (images) => {
        const rows = [];
        for (let i = 0; i < images.length; i += 2) {
            rows.push(
                <View key={i} style={styles.row}>
                    <TouchableOpacity>
                        <Image source={images[i]} resizeMode='cover' style={{ width: 170, height: 75, borderRadius : 10 }} />
                        <FontAwesome5
                            name='play-circle'
                            size={25}
                            color='#ffffff'
                            style={{ position: 'absolute', bottom: 5, left: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {images[i + 1] && <Image source={images[i + 1]} resizeMode='cover' style={{ width: 170, height: 75, borderRadius : 10 }} />}
                        <FontAwesome5
                            name='play-circle'
                            size={25}
                            color='#ffffff'
                            style={{ position: 'absolute', bottom: 5, left: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
        return rows;
    };

    return (
        // <View style={styles.container}>
        <LinearGradient
            colors={['#E1F5FF', '#91E0FF']}
            style={styles.media_container}
        >
            <View style={styles.header}>
                <TouchableOpacity  onPress={handleClick}>
                    <FontAwesome5 name='arrow-left' size={24} color='#ffffff' />
                </TouchableOpacity>
                <Text style={styles.streamingtext}>Event Videos</Text>
            </View>
            <Swiper
                ref={swiperRef}
                style={styles.wrapper}
                showsButtons={false}
                autoplay={false}
                autoplayTimeout={3}
                renderPagination={renderPagination}>
                {splitIntoSlides(images, 6, 2).map((slideImages, index) => (
                    <View key={index} style={styles.slide}>
                        {renderRows(slideImages)}
                    </View>
                ))}
            </Swiper>
        </LinearGradient>
    );
};

export default EventScreen;