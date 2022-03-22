import React, {useState, useEffect} from 'react';

import {View, Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../components/Button';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {WEB_CLIENT_ID} from '@env';
console.log(WEB_CLIENT_ID);
GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('');
  const onGoogleButtonPress = async () => {
    try {
      console.log('onGoogle');
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log('idToken: ' + idToken);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('googleCred: ' + googleCredential);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      return err;
    }
  };

  const handleLogin = async () => {
    const data = await onGoogleButtonPress();
    console.log(data);
    // navigation.navigate('Profile');
  };

  const onNavigation = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={require('../assets/original_icon.png')}
      />
      <Button onPress={handleLogin} title="Login with Google" />
      <Button onPress={onNavigation} title="Go to Profile" />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#082c2c',
  },
  image: {
    height: '15%',
    width: '40%',
    marginBottom: 40,
  },
  error: {
    color: 'red',
    fontSize: 17,
    marginTop: 40,
    padding: 10,
  },
});
