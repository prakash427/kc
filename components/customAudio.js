import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import AudioPlayer from '../screens/audio';

const CustomAudio = ({ visible, onClose }) => {

    const [paused, setPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const onPlayPausePressed = () => {
        setPaused((prevPaused) => !prevPaused);
    };

    const onSliderValueChanged = (value) => {
        this.player.seek(value);
    };

    const onProgress = (data) => {
        setCurrentTime(data.currentTime);
        setDuration(data.seekableDuration);
    };

    const onForwardPressed = () => {
        const newTime = currentTime + 10; // Forward 10 seconds
        this.player.seek(newTime < duration ? newTime : duration);
    };

    const onPreviousPressed = () => {
        const newTime = currentTime - 10; // Go back 10 seconds
        this.player.seek(newTime > 0 ? newTime : 0);
    };


    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.header}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                            <Text style={styles.heading}>Audio Message</Text>
                            <AntDesign name="arrowright" size={24} color="black" />
                        </View>
                        <View style={styles.box}>
                            <Text style={{fontWeight : 'bold', color : '#000000', fontSize : 16}}>It so happens that after a certain stage</Text>
                            <Video
                                source={require('../assets/kcaudio.mp3')}
                                ref={(ref) => { this.player = ref; }}
                                paused={paused}
                                onProgress={onProgress}
                                style={{ width: 300, height: 20 }}
                            />
                            <Slider
                                style={{ width: 250, height: 40, alignSelf: 'center' }}
                                value={currentTime}
                                minimumValue={0}
                                maximumValue={duration}
                                thumbTintColor='#005575'
                                thumbTouchSize={50}
                                maximumTrackTintColor='#969696'
                                onValueChange={onSliderValueChanged}
                                minimumTrackTintColor="#969696"
                            />
                            <View style={styles.timeContainer}>
                                <Text style={styles.time}>
                                    {new Date(currentTime * 1000).toISOString().substring(15, 19)}
                                </Text>
                                <Text style={styles.time}>
                                    {new Date((duration - currentTime) * 1000).toISOString().substring(15, 19)}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                                <TouchableOpacity onPress={onPreviousPressed}>
                                    <FontAwesomeIcon name="step-backward" size={30} color="#969696" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onPlayPausePressed} style={{ backgroundColor: '#3F434c', width: 50, padding: 10, alignItems: 'center', borderRadius: 40 }}>
                                    <FontAwesomeIcon name={paused ? 'play' : 'pause'} size={30} color="#ffffff" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onForwardPressed}>
                                    <FontAwesomeIcon name="step-forward" size={30} color="#969696" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.iconsContainer}>
                            <Text style={styles.shareText}>Share: </Text>
                            <Image source={require('../assets/fb.png')} style={styles.icon} />
                            <Image source={require('../assets/youtube.png')} style={styles.icon} />
                            <Image source={require('../assets/twitter.png')} style={styles.icon} />
                            <Image source={require('../assets/insta.png')} style={styles.icon} />
                            <Image source={require('../assets/podcast.png')} style={styles.icon} />
                            <Image source={require('../assets/reels.png')} style={styles.icon} />
                            <Image source={require('../assets/thread.png')} style={styles.icon} />
                            <Image source={require('../assets/whatsapp.png')} style={styles.icon} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <Entypo name="cross" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#F5F5F5',
        paddingTop: 20,
        borderColor: '#005575',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 25,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginHorizontal: 30
    },
    box: {
        borderWidth: 1,
        borderColor: '#005575',
        padding: 14,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        alignItems : 'center'
    },
    paragraph: {
        fontSize: 13,
    },
    shareText: {
        fontSize: 15,
        //marginBottom: 10,
        fontWeight: '900',
        color: '#000000'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 12,
        paddingBottom: 16,
        flexWrap: 'wrap',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    timeContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    time: {
        color: '#000000',
        fontSize: 12,
    },
});

export default CustomAudio;