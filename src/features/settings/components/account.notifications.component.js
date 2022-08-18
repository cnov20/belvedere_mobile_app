import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import {
	useIsFocused,
	useFocusEffect,
	useNavigation,
} from '@react-navigation/native';

import ToggleSwitch from '../../../components/UI/ToggleSwitch';
import Toggle from 'react-native-toggle-element';
import { Title } from '../../account/components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { AuthButton } from '../../account/components/account.styles';

import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;

export default function AppNotifications({ handleChange }) {
	const isFocused = useIsFocused();
	const [toggleValue, setToggleValue] = useState(false);

	const navigation = useNavigation();

	useEffect(() => {
		async function configurePushNotifications() {
			const { status } = await Notifications.getPermissionsAsync();
			let finalStatus = status;

			if (finalStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}

			if (finalStatus !== 'granted') {
				Alert.alert(
					'Permission required',
					'Push notifications need the appropriate permissions.'
				);
				return;
			}

			const pushTokenData = await Notifications.getExpoPushTokenAsync();
			console.log(pushTokenData);

			if (Platform.OS === 'android') {
				Notifications.setNotificationChannelAsync('default', {
					name: 'default',
					importance: Notifications.AndroidImportance.DEFAULT,
				});
			}
		}

		configurePushNotifications();
	}, []);

	async function allowsNotificationsAsync() {
		const settings = await Notifications.getPermissionsAsync();
		return (
			settings.granted ||
			settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
		);
	}

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
		}, [])
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
	}, [toggleValue]);

	function scheduleNotificationHandler() {
		// if (toggleValue === true) {
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first App notification',
				body: 'You will now receive: reminders/incentives/brand messages!',
				data: { userName: 'Chris' },
			},
			trigger: {
				seconds: 5,
			},
		});
		// }
	}

	return (
		<SafeArea>
			<View style={styles.container}>
				{/* <Text>{isFocused ? 'focused' : 'unfocused'}</Text> */}
				<Spacer size='xlarge'>
					<Title>App Notifications</Title>
				</Spacer>
				{/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
			</View>
			<List.Section>
				{/* <SettingsItem>
						<Button title='Reminders' onPress={scheduleNotificationHandler} />
						<ToggleSwitch></ToggleSwitch>
					</SettingsItem> */}

				<SettingsItem
					title='Reminders'
					description='Toggle Reminder Notifications'
					left={(props) => (
						<ToggleSwitch handleChange={scheduleNotificationHandler()} />
					)}
				/>
				<SettingsItem
					title='Incentive Alerts'
					description='Alerts for deals!'
					left={(props) => (
						<ToggleSwitch handleChange={scheduleNotificationHandler()} />
					)}
				/>
				<SettingsItem
					title='Brand Messaging'
					description='Belvedere — general alerts'
					left={(props) => (
						<ToggleSwitch handleChange={scheduleNotificationHandler()} />
					)}
				/>
			</List.Section>
			<Spacer size='large'>
				<AuthButton mode='contained' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer>
		</SafeArea>
		// <StatusBar style='auto' />
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
