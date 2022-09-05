import React, { useState, useEffect } from 'react';
import { Alert, View, StyleSheet, Image, Text } from 'react-native';
import { AuthButton } from '../../account/components/account.styles';
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from 'expo-location';

import {
	useNavigation,
	useRoute,
	useIsFocused,
} from '@react-navigation/native';

import { Colors } from '../../../constants/colors';
import { getMapPreview } from './location';
import AccountInfoCard from '../../account/components/account-info-card.component';
import { BelvedereMobileBarInfoCard } from '../../mobile-bars/components/belvedere-mobile-bar-info-card';

import { Spacer } from '../../../components/spacer/spacer.component';

function LocationPicker({ onPickLocation }) {
	const [pickedLocation, setPickedLocation] = useState();

	const isFocused = useIsFocused();

	const navigation = useNavigation();
	const route = useRoute();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	useEffect(() => {
		if (isFocused && route.params) {
			const mapPickedLocation = {
				lat: route.params.pickedLat,
				lng: route.params.pickedLng,
			};
			console.log('MAP PICKED LOCATION: ', mapPickedLocation);
			setPickedLocation(mapPickedLocation);
		}
	}, [route, isFocused]);

	async function verifyPermissions() {
		if (
			locationPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions!',
				'You need to grant location permissions to use this app.'
			);
			return false;
		}

		return true;
	}

	async function getLocationHandler() {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		console.log(location);
	}

	function pickOnMapHandler() {
		navigation.navigate('Map');
	}

	let locationPreview = <Text>No location picked yet.</Text>;

	if (pickedLocation) {
		locationPreview = (
			// <AccountInfoCard>
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
				}}
			/>
			// </AccountInfoCard>
		);
	}

	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>
			<View style={styles.actions}>
				<Spacer size='large'>
					<AuthButton
						title='location'
						mode='outlined'
						onPress={getLocationHandler}>
						Locate User
					</AuthButton>
				</Spacer>
				<Spacer size='large'>
					<AuthButton title='map' mode='contained' onPress={pickOnMapHandler}>
						Pick on Map
					</AuthButton>
				</Spacer>
			</View>
		</View>
	);
}

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},
	actions: {
		// flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 4,
	},
});
