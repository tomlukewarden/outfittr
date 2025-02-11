import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Signup from './screens/signup';
import Profile from './screens/profile';
import Swipe from './screens/swipe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Swipe' component={Swipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
