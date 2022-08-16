import React from 'react';

import { View, Text } from 'react-native';

import LocationPicker from '../../map/components/location-picker';

const LocationFinderScreen = () => {
	return (
		<View>
			<Text>Location Finder Screen</Text>
			<LocationPicker />
		</View>
	);
};

export default LocationFinderScreen;
