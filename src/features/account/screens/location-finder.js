import React, { useState, useCallback } from 'react';

import { View, Text } from 'react-native';

import LocationPicker from '../../map/components/location-picker';

const LocationFinderScreen = () => {
	const [pickedLocation, setPickedLocation] = useState();

	const pickLocationHandler = useCallback((location) => {
		setPickedLocation(location);
	}, []);

	return (
		<View>
			<Text>Location Finder Screen</Text>
			<LocationPicker onPickLocation={pickLocationHandler} />
		</View>
	);
};

export default LocationFinderScreen;
