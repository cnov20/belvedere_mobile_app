import React, {
	useContext,
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
} from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconButton } from 'react-native-paper';

import styled from 'styled-components/native';

import { Search } from '../components/search.component';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

// useCallback(, [navigation, selectedLocation])

export const MapScreen = ({ navigation }) => {
	const [selectedLocation, setSelectedLocation] = useState();
	const [region, setRegion] = useState();

	const initialRegion = {
		latitude: 40.754932,
		longitude: -73.984016,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.021,
	};

	function onRegionChange(region) {
		setRegion(region);
	}

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
				initialRegion={initialRegion}
				region={region}
				onRegionChange={setRegion}
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
