import React, { useContext, useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { List, Avatar } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
// import { EmailAuthCredential } from 'firebase/auth';

import EditProfileScreen from '../../account/screens/account-edit-profile.screen';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
	const { onLogout, user, auth } = useContext(AuthenticationContext);
	const [photo, setPhoto] = useState(null);

	// if (user || auth) {
	// 	const currentUser = auth.currentUser;
	// 	console.log(currentUser);
	// }

	const currentUser = auth.currentUser;

	const getProfilePicture = async (currentUser) => {
		const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
		setPhoto(photoUri);
	};

	useFocusEffect(
		useCallback(() => {
			getProfilePicture(currentUser);
		}, [currentUser])
	);

	return (
		<SafeArea>
			<AvatarContainer>
				<Spacer position='top' size='large'></Spacer>
				<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
					{!photo && (
						<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
					)}
					{photo && (
						<Avatar.Image
							size={180}
							source={{ uri: photo }}
							backgroundColor='#2182BD'
						/>
					)}
				</TouchableOpacity>
				<Spacer position='top' size='large'>
					{/* <Text variant='label'>{auth.currentUser.givenName}</Text> */}

					<Text variant='label'>{auth.currentUser.email}</Text>
				</Spacer>
			</AvatarContainer>
			<List.Section>
				<SettingsItem
					title='Update — Profile Information'
					description='Update/Change — email and password'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('Edit Profile')}
				/>
				<SettingsItem
					title='App Notification — Settings'
					description='Push notifications and reminders'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('App Notifications')}
				/>
				<SettingsItem
					title='Location — Notification — Settings'
					description='Location/bar-proximity notifications'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('Location Notifications Settings')}
				/>
				<SettingsItem
					title='Logout'
					left={(props) => <List.Icon {...props} color='black' icon='door' />}
					onPress={onLogout}
				/>
			</List.Section>
		</SafeArea>
	);
};
