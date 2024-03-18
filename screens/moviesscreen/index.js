import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import Slides from '../swipe/com';

const styles = StyleSheet.create({
    media_container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    wrapper: {
        margin: 0,
    },
    slide: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 15,
        gap: 10
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 135,
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
        padding: 15,
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
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied1.png'),
    require('../../assets/movied2.png'),
    require('../../assets/movied3.png'),
    require('../../assets/movied4.png'),
    require('../../assets/movied5.png'),
    require('../../assets/movied6.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
    require('../../assets/movied9.png'),
    require('../../assets/movied7.png'),
    require('../../assets/movied8.png'),
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

const MoviesdisplayScreen = ({ updateStreaming,updateDialogue,updateMovies,updateNews, updateEvents, updateGallery }) => {
    const handleClick = () => {
        updateStreaming(false);
        updateDialogue(false);
        updateMovies(false);
        updateNews(false);
        updateEvents(false);
        updateGallery(false);
    };
    const swiperRef = useRef(null);

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
                <View style={{ alignSelf: 'center', position: 'absolute', bottom: 97 }}>
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

    const renderRows = (images) => {
        const rows = [];
        const numRows = Math.ceil(images.length / 5);

        for (let i = 0; i < numRows; i++) {
            const start = i * 3;
            rows.push(
                <View key={i} style={styles.row}>
                    <TouchableOpacity>
                        {images[start] && <Image source={images[start]} resizeMode='contain' style={{ width: 110, height: 110, }} />}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {images[start + 1] && <Image source={images[start + 1]} resizeMode='contain' style={{ width: 110, height: 110, }} />}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {images[start + 2] && <Image source={images[start + 2]} resizeMode='contain' style={{ width: 110, height: 110, }} />}
                    </TouchableOpacity>
                </View>
            );
        }
        return rows;
    };

    return (
        <LinearGradient
            colors={['#E1F5FF', '#91E0FF']}
            style={styles.media_container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={handleClick}>
                    <FontAwesome5 name='arrow-left' size={24} color='#ffffff' />
                </TouchableOpacity>
                <Text style={styles.streamingtext}>Chiru's Dialogues</Text>
            </View>
            <View style={{ height: 200 }}>
                <Slides style={{ margin: 0 }} />
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

export default MoviesdisplayScreen;