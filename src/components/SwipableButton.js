////@ts-check

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Slider from 'react-native-slide-to-unlock';

import PropTypes from 'prop-types';

const SwipableButton = ({text,handlePress}) => {
  return (
    <View style={styles.view}>
      <Slider
        onEndReached={handlePress}
        containerStyle={{
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 5,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%'
        }}
        sliderElement={
          <Image
            style={{
              width: 30,
              borderRadius: 5,
              height: 30,
              backgroundColor: '#4C6E94'
            }}
            source={require("../assets/icons/diamond.png")}
          />
        }
      >
        <Text >{text}</Text>
      </Slider>
    </View>
  )
}

SwipableButton.propTypes = {
	text: PropTypes.string.isRequired,
	handlePress: PropTypes.func.isRequired
}

export default SwipableButton

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    width: '100%', 
    height: '100%',
    alignItems: 'center',
  }
})