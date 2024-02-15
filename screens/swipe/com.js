import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import React from 'react';
import CustomImageCarousal from './customlandscape';

const Slides = () => {
  const data = [
    {
      image: require('../../assets/image-product-1.jpg'),
    },
    {
      image: require('../../assets/as.png'),
    },
    {
      image: require('../../assets/mega1.png'),
    },
    {
      image: require('../../assets/mega1(1).png'),
    },
  ];
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <CustomImageCarousal
          data={data}
          autoPlay={true}
          pagination={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'transparent',
  },
  text: {textAlign: 'center', color: 'black', marginBottom: 10},
  carouselContainer: {
    marginBottom: 20,
  },
});