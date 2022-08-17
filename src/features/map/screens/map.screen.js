import React, {
	useContext,
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
} from 'react';
import MapView, { Marker } from 'react-native-maps';

import styled from 'styled-components/native';

import { Search } from '../components/search.component';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

// useCallback(, [navigation, selectedLocation])
// {navigation}
// useLayoutEffect(() => {
// navigation.setOptions({

// 	})
// }, [navigation, savePickedLocationHandler])
// navigation.navigate('', {
// 	selectedLat: selectedLocation.lat,
// 	selectedLng: selectedLocation.lng,
// });
export const MapScreen = () => {
	const [selectedLocation, setSelectedLocation] = useState();

	const region = {
		latitude: 40.754932,
		longitude: -73.984016,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.021,
	};

	function selectLocationHandler(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({ lat: lat, lng: lng });
	}

	return (
		<>
			<Search />
			<Map region={region} onPress={selectLocationHandler}>
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
