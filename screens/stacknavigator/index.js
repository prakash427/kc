import React, {useState, useEffect, useReducer, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../welcomescreen';
import Login from '../login';
import Signup from '../signup';
import LanguageScreen from '../languagescreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackK from './stack.js';
import StreamingRecords from '../streamingrecordsscreen/index.js';
import { StyleSheet } from 'react-native';
import Newspage from '../newspage/index.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomScreen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name='LanguageScreen' component={LanguageScreen}/>
        {/* <Stack.Screen name='NewsPage' component={Newspage}/> */}
        {/* <Stack.Screen name='StreamingRecords' component={StreamingRecords}/> */}
        <Stack.Screen name="StackK" component={StackK}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#f16623',
    borderTopWidth: 0,
    bottom: 0,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 5
  },
  tabBarLabelStyle: {
    fontSize: 12
  },
  headerStyle: {
    backgroundColor: '#f16623',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  }
});