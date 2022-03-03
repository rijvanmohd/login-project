/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

///@ts-check

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import store from './src/store';

// Screen Imports
import WelcomeScreen from './src/screens/WelcomeScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{ title: 'My home' }}
          />
          <Stack.Screen 
            name="Button" 
            component={ButtonScreen} 
            options={{ title: 'Button Screen' }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'My Profile' }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
