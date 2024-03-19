import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomModal = ({ visible, onClose }) => {
    
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
                            <Text style={styles.heading}>Text Message</Text>
                            <AntDesign name="arrowright" size={24} color="black" />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.paragraph}>
                                “It so happens that after a certain stage,
                                we have to give in to the wishes of the people rather than
                                our own satisfaction.”“It so happens that after a certain
                                stage, we have to give in to the wishes of the people rather
                                than our own satisfaction.”“It so happens that after a
                                certain stage, we have to give in to the wishes
                                of the people rather than our own satisfaction.”
                            </Text>
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
        padding: 10,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff'
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
    }
});

export default CustomModal;