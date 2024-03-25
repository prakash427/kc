// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import Video from 'react-native-video';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';

// class AudioPlayer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       paused: true,
//       currentTime: 0,
//       duration: 0,
//     };
//   }

//   onPlayPausePressed = () => {
//     this.setState((prevState) => ({ paused: !prevState.paused }));
//   };

//   onSliderValueChanged = (value) => {
//     this.player.seek(value);
//   };

//   onProgress = (data) => {
//     this.setState({ currentTime: data.currentTime, duration: data.seekableDuration });
//   };

//   onForwardPressed = () => {
//     const { currentTime, duration } = this.state;
//     const newTime = currentTime + 10; // Forward 10 seconds
//     this.player.seek(newTime < duration ? newTime : duration);
//   };

//   onPreviousPressed = () => {
//     const { currentTime } = this.state;
//     const newTime = currentTime - 10; // Go back 10 seconds
//     this.player.seek(newTime > 0 ? newTime : 0);
//   };

//   render() {
//     return (
//       <View>
//         <Video
//           source={require('../../assets/kcaudio.mp3')}
//           ref={(ref) => {
//             this.player = ref;
//           }}
//           paused={this.state.paused}
//           onProgress={this.onProgress}
//           style={{ width: 300, height: 300 }}
//         />
//         <Slider
//             style={{ width: 250, height: 40, alignSelf : 'center' }}
//             value={this.state.currentTime}
//             minimumValue={0}
//             maximumValue={this.state.duration}
//             thumbTintColor='#005575'
//             thumbTouchSize = {50}
//             maximumTrackTintColor='#969696'
//             onValueChange={this.onSliderValueChanged}
//             minimumTrackTintColor="#969696"
//           />
//           <View style={styles.timeContainer}>
//             <Text style={styles.time}>
//               {new Date(this.state.currentTime * 1000).toISOString().substring(15, 19)}
//             </Text>
//             <Text style={styles.time}>
//               {new Date((this.state.duration - this.state.currentTime) * 1000).toISOString().substring(15, 19)}
//             </Text>
//           </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
//           <TouchableOpacity onPress={this.onPreviousPressed}>
//             <FontAwesomeIcon name="step-backward" size={30} color="#969696" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.onPlayPausePressed} style={{ backgroundColor: '#3F434c', width: 50, padding: 10, alignItems: 'center', borderRadius: 40 }}>
//             <FontAwesomeIcon name={this.state.paused ? 'play' : 'pause'} size={30} color="#ffffff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.onForwardPressed}>
//             <FontAwesomeIcon name="step-forward" size={30} color="#969696" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   timeContainer: {
//     width: 220,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf : 'center'
//   },
//   time: {
//     color: '#000000',
//     fontSize: 12,
//   },
// });

// export default AudioPlayer;

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

const AudioPlayer = () => {
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
    <View>
      <Video
        source={require('../../assets/kcaudio.mp3')}
        ref={(ref) => { this.player = ref; }}
        paused={paused}
        onProgress={onProgress}
        style={{ width: 300, height: 300 }}
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
  );
};

const styles = StyleSheet.create({
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

export default AudioPlayer;

