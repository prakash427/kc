import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Family from '../family/index';
import FamilyDetails from '../family/FamilyDtails';
import CinemaDetails from '../family/CinemaDetails';

const Stack = createNativeStackNavigator();

export const FamilyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Family" component={Family} />
      <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
      <Stack.Screen name="CinemaDetails" component={CinemaDetails} />
    </Stack.Navigator>
  );
};
