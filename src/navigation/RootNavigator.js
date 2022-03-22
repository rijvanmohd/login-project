import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {Provider} from 'react-redux';
import store from '../store';

import {useColorScheme, StatusBar} from 'react-native';

import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const isDarkMode = useColorScheme() === 'dark';

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            {/* {!user ? ( */}
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            {/* ) : ( */}
            <Stack.Screen name="Profile" component={ProfileScreen} />
            {/* )} */}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
