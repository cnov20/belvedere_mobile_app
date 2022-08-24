import React, {
	useContext,
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
} from 'react';
import { Alert, View, Dimensions, StyleSheet } from 'react-native';
import MapView, {
	Marker,
	PROVIDER_DEFAULT,
	PROVIDER_GOOGLE,
} from 'react-native-maps';
import { IconButton } from 'react-native-paper';

import styled from 'styled-components/native';

import { Search } from '../components/search.component';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUTE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
	latitude: 40.754932,
	longitude: -73.984016,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUTE_DELTA,
};

export const MapScreen = ({ navigation }) => {
	const [selectedLocation, setSelectedLocation] = useState();
	const [region, setRegion] = useState();
	// useCallback(, [navigation, selectedLocation])

	// function onRegionChange(region) {
	// 	setRegion(region);
	// }

	function selectLocationHandler(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({ lat: lat, lng: lng });
	}

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				'No location picked!',
				'You have to pick a location (by tapping on the map) first!'
			);
			return;
		}
		navigation.navigate('Location Finder', {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon='save'
					size={24}
					color={tintColor}
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<>
			<Search />
			<Map
				provider={PROVIDER_GOOGLE}
				initialRegion={INITIAL_POSITION}
				region={region}
				// onRegionChange={setRegion}
				onPress={selectLocationHandler}>
				{selectedLocation && (
					<Marker
						title='Picked Location'
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng,
						}}
					/>
				)}
			</Map>
		</>
	);
};
