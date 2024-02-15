import React, {useState, useEffect, useReducer, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../welcomescreen';
import Login from '../login';
import Signup from '../signup';
import LanguageScreen from '../languagescreen.js';
import Homescreen from '../homescreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fans from '../fans';
import Charity from '../charity';
import Media from '../media';
import Family from '../family';
import StackK from './stack.js';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#290334',
      tabBarStyle: styles.tabBarStyle,
      tabBarIcon: ({color}) => {

        if (route.name === "Homescreen") {
          return <Octicons name='home' size={23} color={color} />;
        } else if (route.name === "Fans") {
          return <MaterialCommunityIcons name='account-group' size={23} color={color} />;
        } else if (route.name === "Charity") {
          return <MaterialCommunityIcons name='hand-heart-outline' size={23} color={color} />;
        } else if (route.name === "Media") {
          return <MaterialCommunityIcons name='movie-outline' size={23} color={color} />;
        } else if (route.name === "Family") {
          return <MaterialIcons name='family-restroom' size={23} color={color} />;
        }
        
      },
    })}>
      <Tab.Screen 
        name="Homescreen" 
        component={Homescreen} 
        options={{
            headerShown: false
          }} 
      />
      <Tab.Screen
        name="Fans" 
        component={Fans}
        options={{
          headerStyle: styles.headerStyle,
          title: 'My Messages',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerBackgroundContainerStyle: {backgroundColor: '#290334'}
        }} 
      />
      <Tab.Screen 
        name="Charity" 
        component={Charity} 
        options={{
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="Media" 
        component={Media}
        options={{
          headerStyle: styles.headerStyle,
          title: 'Media',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerBackgroundContainerStyle: {backgroundColor: '#290334'}
        }}  
      />
      <Tab.Screen 
        name="Family" 
        component={Family} 
        options={{
          headerStyle: styles.headerStyle,
          title: 'Family',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerBackgroundContainerStyle: {backgroundColor: '#290334'}
        }} 
      />
    </Tab.Navigator>
  )
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomScreen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name='LanguageScreen' component={LanguageScreen}/>
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