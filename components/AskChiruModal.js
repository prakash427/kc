import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const AskChiruModal = ({isVisible, setIsVisible, closeModal}) => {
    
    const [textInputValue, setTextInputValue] = useState('');

    const handleSubmit = () => {
        console.log('Submitted value:', textInputValue);
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                            <Entypo name="cross" size={26} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Ask Chiru</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type Here ......."
                            placeholderTextColor="#6E6E6E"
                            onChangeText={(value) => setTextInputValue(value)}
                            value={textInputValue}
                            multiline={true}
                            numberOfLines={4} // Adjust as needed
                        />
                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            {/* <Icon name="check" size={24} color="white" /> */}
                            <Text style={styles.submitButtonText}>SUBMIT</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default AskChiruModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000'
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000000',
        fontWeight: '600'
    },
    textInput: {
        textAlignVertical: 'top',
        width: '100%',
        borderWidth: 1,
        borderColor: '#C2C2C2',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        height: 150, // Adjust as needed
        backgroundColor: '#F4F4F4',


    },
    submitButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 45,
        alignSelf: 'Center'
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
});

