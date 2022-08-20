import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import {
	useIsFocused,
	useFocusEffect,
	useNavigation,
} from '@react-navigation/native';

import { ToggleSwitch } from '../../../components/UI/ToggleSwitch';
import Toggle from 'react-native-toggle-element';
import { Title } from '../../account/components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { AuthButton } from '../../account/components/account.styles';

import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

import { registerForPushNotificationsAsync } from '../../../services/notifications/push-notifications.service';
import {
	sendPushNotification,
	title,
	body,
} from '../../../services/notifications/push-notifications.service';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;

export default function AppNotifications({ handleChange, value }) {
	const isFocused = useIsFocused();
	const [toggleValue, setToggleValue] = useState(false);

	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();
	const navigation = useNavigation();

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) =>
			setExpoPushToken(token)
		);

		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<SafeArea>
			<View style={styles.container}>
				{/* <Text>{isFocused ? 'focused' : 'unfocused'}</Text> */}
				<Spacer size='xlarge'>
					<Title>App Notifications</Title>
				</Spacer>
			</View>
			<List.Section>
				<SettingsItem
					title='Reminders'
					description='Toggle Reminder Notifications'
					left={(props) => <ToggleSwitch />}
				/>
				<SettingsItem
					title='Incentive Alerts'
					description='Alerts for deals!'
					left={(props) => <ToggleSwitch />}
				/>
				<SettingsItem
					title='Brand Messaging'
					description='Belvedere — general alerts'
					left={(props) => <ToggleSwitch />}
				/>
				{/* <Text>Your expo push token: {expoPushToken}</Text>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Text>
						Title: {notification && notification.request.content.title}{' '}
					</Text>
					<Text>Body: {notification && notification.request.content.body}</Text>
					<Text>
						Data:{' '}
						{notification && JSON.stringify(notification.request.content.data)}
					</Text>
				</View> */}
				<Button
					title='Press to Send Notification'
					onPress={async () => {
						await sendPushNotification(expoPushToken);
					}}
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
