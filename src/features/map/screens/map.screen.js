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

// export const MapScreen = ({ navigation }) => {
// 	const [selectedLocation, setSelectedLocation] = useState();
// 	const [region, setRegion] = useState();
// 	const mapRef = useRef(null);

// 	const [searchKeyword, setSearchKeyword] = useState('');
// 	const [origin, setOrigin] = useState('');
// 	const [destination, setDestination] = useState('');
// 	const [showDirections, setShowDirections] = useState(false);
// 	const [distance, setDistance] = useState(0);
// 	const [duration, setDuration] = useState(0);

// 	const edgePaddingValue = 75;

// 	const edgePadding = {
// 		top: edgePaddingValue,
// 		right: edgePaddingValue,
// 		bottom: edgePaddingValue,
// 		left: edgePaddingValue,
// 	};

// 	const traceRouteOnReady = (args) => {
// 		if (args) {
// 			// args.distance
// 			// args.duration
// 			setDistance(args.distance);
// 			setDuration(args.duration);
// 		}
// 	};

// 	const traceRoute = async () => {
// 		const camera = await mapRef.current;
// 		if (origin && destination) {
// 			setShowDirections(true);
// 			mapRef.current.fitToCoordinates([origin, destination], { edgePadding });
// 		}
// 	};

// 	const moveTo = async (position) => {
// 		const camera = await mapRef.current.getCamera();
// 		if (camera) {
// 			console.log('POSITION IN MOVE TO: ', position);
// 			camera.center = position;
// 			mapRef.current.animateCamera(camera, { duration: 1000 });
// 		}
// 	};

// 	const onPlaceSelected = (data, details, label) => {
// 		// const details = GooglePlaceDetail;
// 		// flag = 'origin' | 'destination'
// 		// const set = flag === 'origin' ? setOrigin : setDestination;
// 		console.log('DETAILS ————— GEOMETRY', details.geometry.location);
// 		let position = {
// 			latitude: details.geometry.location.lat,
// 			longitude: details.geometry.location.lng,
// 		};
// 		if (label === 'origin') {
// 			console.log('POSITION PRE setOrigin — ');
// 			setOrigin(position);
// 			console.log('ORIGIN post setOrigin(position) — ', origin);
// 		}
// 		if (label === 'destination') {
// 			setDestination(position);
// 		}
// 		console.log('POSITION post set —————', position);
// 		moveTo(position);
// 		console.log('POSITION MOVE TO — ', position);
// 	};

// 	return (
// 		<>
// 			<Map
// 				ref={mapRef}
// 				provider={PROVIDER_GOOGLE}
// 				initialRegion={INITIAL_POSITION}>
// 				{/* {console.log('ORIGIN near marker render — ', origin)} */}
// 				{origin && <Map.Marker coordinate={origin} />}
// 				{destination && <Map.Marker coordinate={destination} />}
// 				{showDirections && origin && destination && (
// 					<MapViewDirections
// 						origin={origin}
// 						destination={destination}
// 						apikey={GOOGLE_API_KEY}
// 						strokeColor='#6644ff'
// 						strokeWidth={4}
// 						onReady={traceRouteOnReady}
// 					/>
// 				)}
// 			</Map>
// 			<SearchContainer>
// 				<GooglePlacesAutocomplete
// 					label='origin'
// 					placeholder={'Origin'}
// 					fetchDetails={true}
// 					onPress={(data, details) => {
// 						// 'details' is provided when fetchDetails = true
// 						console.log('DATA ———— ', data);
// 						console.log('DETAILS ——— ', details);
// 						onPlaceSelected(data, details, 'origin');
// 					}}
// 					query={{
// 						key: GOOGLE_API_KEY,
// 						language: 'en',
// 					}}
// 				/>
// 				<GooglePlacesAutocomplete
// 					label='destination'
// 					placeholder={'Destination'}
// 					fetchDetails={true}
// 					onPress={(data, details) => {
// 						// 'details' is provided when fetchDetails = true
// 						console.log(data, details);
// 						onPlaceSelected(data, details, 'destination');
// 					}}
// 					query={{
// 						key: GOOGLE_API_KEY,
// 						language: 'en',
// 					}}
// 				/>
// 				<View style={{ flexDirection: 'row' }}>
// 					<FormButton buttonTitle='Trace Route' onPress={traceRoute} />
// 					{distance && duration ? (
// 						<View>
// 							<Text h4>Distance: {distance.toFixed(2)}</Text>
// 							<Text h4>Distance: {Math.ceil(duration)} minutes</Text>
// 						</View>
// 					) : null}
// 				</View>
// 			</SearchContainer>
// 		</>
// 	);
// };

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
