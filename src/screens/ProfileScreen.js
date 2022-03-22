import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setDetail} from '../store/actions/detail';
import PropTypes from 'prop-types';

import Button from '../components/Button';

const ProfileScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(null);

  const userDetails = useSelector(({detail}) => detail.data);
  const dispatch = useDispatch();
  console.log(userDetails);
  const handleSave = () => {
    if (fullName.trim() && age.trim()) {
      dispatch(setDetail({fullName, age}));
    } else {
      Alert.alert('Error', 'Please Enter Details');
    }
  };

  return (
    <View style={styles.view}>
      {userDetails?.fullName && userDetails?.age ? (
        <View style={styles.header}>
          <Text style={styles.greet}>Your name is {userDetails.fullName}</Text>
          <Text style={styles.greet}>Your age is {userDetails.age}</Text>
        </View>
      ) : (
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            onChangeText={setFullName}
            value={fullName}
            autoFocus
            placeholder="Enter your fullname ..."
          />
          <TextInput
            style={styles.input}
            onChangeText={setAge}
            value={age}
            placeholder="Enter your age ..."
            keyboardType="numeric"
          />
          <Button title="Save Detail" onPress={handleSave} />
        </View>
      )}
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    marginLeft: 50,
    marginTop: 30,
  },
  greet: {
    color: '#4C6E94',
    fontSize: 20,
    fontWeight: '700',
  },
  section: {
    marginTop: 40,
    width: '90%',
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#082c2c',
    padding: 10,
    fontSize: 20,
  },
});
