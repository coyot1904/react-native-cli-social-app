import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../Types/RootStackParamList';

import AuthScreen from './Auth';
import ReigsterScreen from './Register';
import HomeScreen from './Home';

const MainStack = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthPage" component={AuthScreen} />
      <Stack.Screen name="RegisterPage" component={ReigsterScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
