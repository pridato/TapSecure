import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { RootStackParamList } from './types/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

// creamos un stack de navegación con las rutas definidas en RootStackParamList
const stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
   <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        <stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
      </stack.Navigator>
   </NavigationContainer>
  );
}