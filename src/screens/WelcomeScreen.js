///@ts-check
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';

import { setDetail } from '../store/actions/detail';

import DeviceInfo from 'react-native-device-info';

import Button from '../components/GenericButton';

function WelcomeScreen({navigation}) {
	const [name, setName] = useState('')
	const dispatch = useDispatch();

	useEffect(() => {
		DeviceInfo.isEmulator().then((isEmulator) => {
		  if (isEmulator) {
			Alert.alert('Attention', 'You are running this app on emulator!');
		  }
		});
	
	}, [])

	const clickHandler = () => {
		if(name.trim().length > 0){
			dispatch(setDetail(name))
			navigation.navigate('Button')
		}
		else{
			Alert.alert('Error','Please enter a name')
		}
	}

  return (
    <View style={styles.screen}>
        <Text style={styles.heading}>Welcome</Text>
				<TextInput 
					autoFocus={true} 
					style={styles.textInput} 
					defaultValue={name}
					onChangeText={newText => setName(newText)}
					placeholder="Enter your name here ..."
				/>

        {/* <Button variant="dark" text="Press Me"/> */}
        {/* <Button variant="light" text="Press Me"/> */}
        <Button variant="fill" text="Go to next" handlePress={clickHandler}/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    screen : {
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
    },

		heading : {
			color: "#4C6E94",
			fontSize: 20,
			fontWeight: "700",
			marginBottom: 30
		},

		textInput: {
			width: "80%",
			paddingTop: 15,
			paddingBottom: 15,
			fontSize: 15,
			marginBottom: 10,
			color: "#4C6E94",
			fontWeight: "500",
		}
})