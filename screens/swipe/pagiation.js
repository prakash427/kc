import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
const Pagination = ({data, x, size}) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [10, 50, 10],
            Extrapolate.CLAMP,
          );
          const opacityAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [1, 1, 1],
            Extrapolate.CLAMP,
          );
          const backgroundColor = widthAnimation >= 10 && widthAnimation <= 49 ? '#ffffff' : '#f16623';

          return {
            width: widthAnimation,
            opacity : opacityAnimation,
            backgroundColor,
          };
        });
        return (
          <Animated.View style={[styles.dots, animatedDotStyle,]} key={i} />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});