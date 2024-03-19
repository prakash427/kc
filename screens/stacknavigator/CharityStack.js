import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Charity from '../charity/index';
import RegistrationSuccess from '../charity/RegistrationSuccess';
import RegisterToDonate from '../charity/RegisterToDonate';
import AddFamilyMember from '../charity/AddFamilyMember';


const Stack = createNativeStackNavigator();

export const CharityStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Charity" component={Charity} />
      <Stack.Screen name="RegisterToDonate" component={RegisterToDonate} />
      <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccess} />
      <Stack.Screen name="AddFamilyMember" component={AddFamilyMember} />
    </Stack.Navigator>
  );
};
