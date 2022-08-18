import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

// Notifications.getPermissionsAsync({
// 	ios: {
// 		settings.granted ||
// 			settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
// 	}
// });

export default function AppNotifications() {
	const isFocused = useIsFocused();

	useFocusEffect(
		React.useCallback(() => {
			Notifications.requestPermissionsAsync({
				ios: {
					allowAlert: true,
					allowBadge: true,
					allowSound: true,
					allowAnnouncements: true,
				},
			});

			Notifications.setNotificationHandler({
				handleNotification: async () => {
					return {
						shouldPlaySound: false,
						shouldSetBadge: false,
						shouldShowAlert: true,
					};
				},
			});
		}, [isFocused])
	);

	useEffect(() => {
		const subscription1 = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log('NOTIFICATION RECEIVED');
				console.log(notification);
				const userName = notification.request.content.data.userName;
				console.log(userName);
			}
		);

		const subscription2 = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				console.log('NOTIFICATION RESPONSE RECEIVED');
				console.log(response);
				const userName = response.notification.request.content.data.userName;
				console.log(userName);
			}
		);

		return () => {
			subscription1.remove();
			subscription2.remove();
		};
	}, []);

	function scheduleNotificationHandler() {
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first local notification',
				body: 'This is the body of the notification.',
				data: { userName: 'Chris' },
			},
			trigger: {
				seconds: 5,
			},
		});
	}

	return (
		<View style={styles.container}>
			<Text>{isFocused ? 'focused' : 'unfocused'}</Text>
			<Button
				title='Schedule Notification'
				onPress={scheduleNotificationHandler}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
