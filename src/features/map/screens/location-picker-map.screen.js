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
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormButton from '../../../components/UI/FormButton';

import { Text } from '../../../components/typography/text.component';

import styled from 'styled-components';

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

export const LocationPickerMapScreen = ({ navigation }) => {
	const [selectedLocation, setSelectedLocation] = useState();
	const [region, setRegion] = useState();
	const mapRef = useRef(null);

	const [searchKeyword, setSearchKeyword] = useState('');
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [showDirections, setShowDirections] = useState(false);
	const [distance, setDistance] = useState(0);
	const [duration, setDuration] = useState(0);

	const edgePaddingValue = 75;

	const edgePadding = {
		top: edgePaddingValue,
		right: edgePaddingValue,
		bottom: edgePaddingValue,
		left: edgePaddingValue,
	};

	const traceRouteOnReady = (args) => {
		if (args) {
			// args.distance
			// args.duration
			setDistance(args.distance);
			setDuration(args.duration);
		}
	};

	const traceRoute = async () => {
		const camera = await mapRef.current;
		if (origin && destination) {
			setShowDirections(true);
			mapRef.current.fitToCoordinates([origin, destination], { edgePadding });
		}
	};

	const moveTo = async (position) => {
		const camera = await mapRef.current.getCamera();
		if (camera) {
			console.log('POSITION IN MOVE TO: ', position);
			camera.center = position;
			mapRef.current.animateCamera(camera, { duration: 1000 });
		}
	};

	const onPlaceSelected = (data, details, label) => {
		// const details = GooglePlaceDetail;
		// flag = 'origin' | 'destination'
		// const set = flag === 'origin' ? setOrigin : setDestination;
		console.log('DETAILS ————— GEOMETRY', details.geometry.location);
		let position = {
			latitude: details.geometry.location.lat,
			longitude: details.geometry.location.lng,
		};
		if (label === 'origin') {
			console.log('POSITION PRE setOrigin — ');
			setOrigin(position);
			console.log('ORIGIN post setOrigin(position) — ', origin);
		}
		if (label === 'destination') {
			setDestination(position);
		}
		console.log('POSITION post set —————', position);
		moveTo(position);
		console.log('POSITION MOVE TO — ', position);
	};

	return (
		<>
			<Map
				ref={mapRef}
				provider={PROVIDER_GOOGLE}
				initialRegion={INITIAL_POSITION}>
				{/* {console.log('ORIGIN near marker render — ', origin)} */}
				{origin && <Map.Marker coordinate={origin} />}
				{destination && <Map.Marker coordinate={destination} />}
				{showDirections && origin && destination && (
					<MapViewDirections
						origin={origin}
						destination={destination}
						apikey={GOOGLE_API_KEY}
						strokeColor='#6644ff'
						strokeWidth={4}
						onReady={traceRouteOnReady}
					/>
				)}
			</Map>
			<SearchContainer>
				<GooglePlacesAutocomplete
					label='origin'
					placeholder={'Origin'}
					fetchDetails={true}
					onPress={(data, details) => {
						// 'details' is provided when fetchDetails = true
						console.log('DATA ———— ', data);
						console.log('DETAILS ——— ', details);
						onPlaceSelected(data, details, 'origin');
					}}
					query={{
						key: GOOGLE_API_KEY,
						language: 'en',
					}}
				/>
				<GooglePlacesAutocomplete
					label='destination'
					placeholder={'Destination'}
					fetchDetails={true}
					onPress={(data, details) => {
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
						onPlaceSelected(data, details, 'destination');
					}}
					query={{
						key: GOOGLE_API_KEY,
						language: 'en',
					}}
				/>
				<View
					style={{
						flexDirection: 'row',
						alignContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						justifyContent: 'space-between',
					}}>
					<FormButton buttonTitle='Trace Route' onPress={traceRoute} />
					{distance && duration ? (
						<View>
							<Text h3>Distance: {distance.toFixed(2)}</Text>
							<Text h3>Distance: {Math.ceil(duration)} minutes</Text>
						</View>
					) : null}
				</View>
			</SearchContainer>
		</>
	);
};
