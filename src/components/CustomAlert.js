import React from 'react';
 
import {Modal, Text, View, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

import GenericButton from '../components/GenericButton';
 
const CustomAlert = ({mode,message,visibility,dismissAlert,}) => {
  return (
    <View>
      <Modal
        visible={visibility}
        animationType={'fade'}
        transparent={true}
        animationType="slide">
        <View style={styles.parent}>
          <View style={styles.view}>
						<View style={{alignItems: 'center', margin: 10}}>
							<Text style={{fontSize: 26, marginTop: 5}}>{mode}</Text>
              <Text style={{fontSize: 18, marginTop: 5}}>{message}</Text>
            </View>
            <GenericButton variant="fill" text="OK" handlePress={dismissAlert}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: 200,
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        elevation: 10,
    },

    parent: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

CustomAlert.propTypes = {
	mode: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	visibility: PropTypes.bool.isRequired,
	dismissAlert: PropTypes.func.isRequired
}

export default CustomAlert