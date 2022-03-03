////@ts-check

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import GenericButton from '../components/GenericButton';
import SwipableButton from '../components/SwipableButton';

const ButtonScreen = ({navigation}) => {
	const name = useSelector(({ detail }) => detail.name)
	const clickHandlerToHome = () => {
		navigation.navigate('Home')
	}

	const clickHandlerToProfile = () => {
		navigation.navigate('Profile')
	}
  return (
    <View style={styles.view}>
			<View style={styles.header}>
				<Text style={styles.greet}>Welcome, {name}</Text>
			</View>
			<View style={styles.section}>
				<Text style={styles.text}>4 variations of a button</Text>
				<GenericButton variant="dark" text="go back to home" handlePress={clickHandlerToHome}/>
				<GenericButton variant="light" text="go back to home" handlePress={clickHandlerToHome}/>
				<GenericButton variant="fill" text="go to profile" handlePress={clickHandlerToProfile}/>
				<SwipableButton text="slide for profile" handlePress={clickHandlerToProfile}/>
			</View>
    </View>
  )
}

GenericButton.propTypes = {
	navigation: PropTypes.object
}

export default ButtonScreen

const styles = StyleSheet.create({
    view: {
			height: '100%',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'flex-end',
			// marginBottom: 30
    },
		header: {
			flex: 1,
			width: '100%',
			alignItems: 'flex-end',
			marginRight: 20
		},
		greet: {
			color: '#4C6E94',
			fontSize: 20,
			fontWeight: '900',
			position: 'absolute'
		},
		section: {
			flex:1,
			width:"100%",
			alignItems: 'center',
		},
		text: {
			color: '#6B721C',
			fontSize: 16,
			fontWeight: '700'
		}
})