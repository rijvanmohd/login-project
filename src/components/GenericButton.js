///@ts-check

import { 	
	StyleSheet, 
	Text, 
	View, 
	TouchableOpacity,
	useColorScheme
} from 'react-native'
import React from 'react'

import { Colors } from 'react-native/Libraries/NewAppScreen';

const GenericButton = ({ variant, text, handlePress }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity 
			onPress={handlePress}
			style={[
			styles.button,
				{
					backgroundColor: variant === "dark" ? Colors.white : variant === "light" ? "#34424A" : "#4C6E94"
				}
			]
		}>
        <View>
            <Text style={{color: variant === "dark" || variant === "light" ? "#4C6E94" : Colors.white, fontWeight: "700",}}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default GenericButton

const styles = StyleSheet.create({
    button : {
			margin: 10,
			padding: 10,
			width: "90%",
			borderRadius:5,
			alignItems: "center",
			borderColor: Colors.black,
			borderWidth: 1
    },

		text: {
			color: Colors.white,
		}
})