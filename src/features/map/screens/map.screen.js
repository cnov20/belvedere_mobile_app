import React, {
	useContext,
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
	useRef,
} from 'react';
import { Alert, View, Dimensions, StyleSheet } from 'react-native';
import MapView, {
	Marker,
	PROVIDER_DEFAULT,
	PROVIDER_GOOGLE,
	getCamera,
	animateCamera,
	LatLng,
} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import { IconButton } from 'react-native-paper';

import FormButton from '../../../components/UI/FormButton';
import { BelvedereMobileBarInfoCard } from '../../mobile-bars/components/belvedere-mobile-bar-info-card';
import { MapSearch } from '../components/map-search.component';
import styled from 'styled-components/native';
import { Text } from 'react-native-elements';

// import { Search } from '../components/search.component';
// import InputAutoComple
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LocationContext } from '../../../services/location/location.context';
import { MobileBarsContext } from '../../../services/mobile-bars/mobile-bars.context';
import { MapCallout } from '../components/map-callout.component';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
	position: absolute;
	z-index: 999;
	top: ${Constants.statusBarHeight}px;
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

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

export const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { bars = [] } = useContext(MobileBarsContext);

	const [latDelta, setLatDelta] = useState(0);

	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;

		setLatDelta(northeastLat - southwestLat);
	}, [location, viewport]);

	return (
		<>
			<MapSearch />
			<Map
				provider={PROVIDER_GOOGLE}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}>
				{bars.map((bar) => {
					return (
						<MapView.Marker
							key={bar.name}
							title={bar.name}
							coordinate={{
								latitude: bar.geometry.location.lat,
								longitude: bar.geometry.location.lng,
							}}>
							<MapView.Callout
								onPress={() =>
									navigation.navigate('MobileBarDetailsScreen', {
										bar,
									})
								}>
								<MapCallout bar={bar} />
							</MapView.Callout>
						</MapView.Marker>
					);
				})}
			</Map>
		</>
	);
};

// const InputAutoComplete = (label, placeholder, onPlaceSelected) => {
// 	return (
// 		<>
// 			{/* <Text>{label}</Text> */}
// 			<View>
// 				<
// 			</View>
// 		</>
// 	);
// };

// region={region}
// onRegionChange={setRegion}
// onPress={selectLocationHandler}>
// {selectedLocation && (
// 	<Marker
// 		title='Picked Location'
// 		coordinate={{
// 			latitude: selectedLocation.lat,
// 			longitude: selectedLocation.lng,
// 		}}
// />

// const mapRef =

// useEffect(() => {
// 	setSearchKeyword(keyword);
// }, [keyword]);
// useCallback(, [navigation, selectedLocation])

// function onRegionChange(region) {
// 	setRegion(region);
// }

// function selectLocationHandler(event) {
// 	const lat = event.nativeEvent.coordinate.latitude;
// 	const lng = event.nativeEvent.coordinate.longitude;

// 	setSelectedLocation({ lat: lat, lng: lng });
// }

// const savePickedLocationHandler = useCallback(() => {
// 	if (!selectedLocation) {
// 		Alert.alert(
// 			'No location picked!',
// 			'You have to pick a location (by tapping on the map) first!'
// 		);
// 		return;
// 	}
// 	navigation.navigate('Location Finder', {
// 		pickedLat: selectedLocation.lat,
// 		pickedLng: selectedLocation.lng,
// 	});
// }, [navigation, selectedLocation]);

// useLayoutEffect(() => {
// 	navigation.setOptions({
// 		headerRight: ({ tintColor }) => (
// 			<IconButton
// 				icon='save'
// 				size={24}
// 				color={tintColor}
// 				onPress={savePickedLocationHandler}
// 			/>
// 		),
// 	});
// }, [navigation, savePickedLocationHandler]);

{
	/* <InputAutoComplete
					label='Origin'
					placeholder='Origin'
					onPlaceSelected={(details) => {
						onPlaceSelected(details, 'origin');
					}}
				/> */
}
{
	/* <InputAutoComplete
					label='Destination'
					placeholder='Destination'
					onPlaceSelected={function (details) {
						onPlaceSelected(details, 'destination');
					}}
				/> */
}
