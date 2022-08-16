import React from 'react';
import { Alert, View, StyleSheet, Button } from 'react-native';
import { AuthButton } from '../../account/components/account.styles';
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from 'expo-location';

import { Colors } from '../../../constants/colors';
// import OutlinedButton from '../../../components/UI/OutlinedButton';

function LocationPicker() {
	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

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
		console.log(location);
	}

	function pickOnMapHandler() {}

	return (
		<View>
			<View style={styles.mapPreview}></View>
			<View style={styles.actions}>
				<AuthButton
					title='location'
					mode='contained'
					onPress={getLocationHandler}>
					Locate User
				</AuthButton>
				<AuthButton title='map' mode='contained' onPress={pickOnMapHandler}>
					Pick on Map
				</AuthButton>
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
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
