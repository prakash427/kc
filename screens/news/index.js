import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    media_container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    //   wrapper: {
    //     margin :10
    //   },
    slide: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap : 20,
        paddingBottom: 10,
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
    imageContainer: { 
        marginHorizontal: 0, 
        borderRadius: 10,
        paddingTop : 15,
        width: 180, // Adjust the width here
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 112,
        resizeMode : 'cover',
    },
    textbox : {
        backgroundColor : '#ffffff',
        width : 180,
        height : 38,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        fontSize : 9,
        fontWeight : '500'
    }
});

const images = [
   {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
    {image : require('../../assets/news1.png'),text: '“Megastar Chiranjeevi and Sensational Trisha Unite for a Cinematic Marvel?”'},
   {image : require('../../assets/news2.png'),text : 'The Megastar’s Top 8 Socially Impactful Films That Changed Perspectives'},
   {image : require('../../assets/news3.png'),text : 'Mega Star Chiranjeevi’s new film #Bholashankar team started dubbing work.'},
    {image : require('../../assets/news4.png'), text : 'Megastar’s vacation sparks excitement for his upcoming family entertainer '},
    {image : require('../../assets/news5.png'), text : 'Megastar Chiranjeevi Extends Heartfelt Wishes to Telangana’s New Leadership'},
    {image : require('../../assets/news6.png'),text : 'Mega Star Chiranjeevi Imitating Hero Rajasekhar'},
    {image : require('../../assets/news7.png'),text : 'Buzz: Aishwarya Rai Bachchan Joins Megastar Chiranjeevi’s Next Project'},
    {image : require('../../assets/news8.png'),text : 'Salaar: Megastar Chiranjeevi Praises Prabhas And Team For Box Office Brilliance'},
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

// const navigation = useNavigation();

const NewsScreen = ({ updateStreaming,updateDialogue,updateMovies,updateNews,updateEvents,updateGallery }) => {
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
    const renderRows = (images) => {
        const rows = [];
        for (let i = 0; i < images.length; i += 2) {
            rows.push(
                <View key={i} style={styles.row}>
                    <TouchableOpacity style={styles.imageContainer}>
                        <Image source={images[i].image} resizeMode='contain' style={styles.image} />
                        <View style={styles.textbox}>
                        <Text style={styles.text}>{images[i].text}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageContainer}>
                        {images[i + 1] && <Image source={images[i + 1].image} resizeMode='contain' style={styles.image} />}
                        <View style={styles.textbox}>
                        {images[i + 1] && <Text style={styles.text}>{images[i + 1].text}</Text>}
                        </View>
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
                <Text style={styles.streamingtext}>News</Text>
            </View>
            <Swiper
                ref={swiperRef}
                style={styles.wrapper}
                showsButtons={false}
                autoplay={false}
                autoplayTimeout={3}
                renderPagination={renderPagination}>
                {splitIntoSlides(images, 3, 2).map((slideImages, index) => (
                    <View key={index} style={styles.slide}>
                        {renderRows(slideImages)}
                    </View>
                ))}
            </Swiper>
        </LinearGradient>
    );
};

export default NewsScreen;