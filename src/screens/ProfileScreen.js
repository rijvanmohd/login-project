////@ts-check

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import GenericButton from '../components/GenericButton'

const ProfileScreen = ({navigation}) => {
	const name = useSelector(({ detail }) => detail.name)
	const clickHandlerToHome = () => {
		navigation.navigate('Home')
	}

  return (
    <View style={styles.view}>
			<View style={styles.header}>
				<Text style={styles.greet}>Welcome, {name}</Text>
			</View>
			<View style={styles.section}>
				<GenericButton variant="fill" text="go back to home" handlePress={clickHandlerToHome}/>
			</View>
    </View>
  )
}

ProfileScreen.propTypes = {
	navigation: PropTypes.object
}

export default ProfileScreen

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
		}
})