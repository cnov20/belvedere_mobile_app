import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { List, Avatar } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
// import { EmailAuthCredential } from 'firebase/auth';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
	const { onLogout, user, auth } = useContext(AuthenticationContext);
	if (user || auth) {
		console.log(auth.currentUser);
	}
	return (
		<SafeArea>
			<AvatarContainer>
				<Spacer position='top' size='large'></Spacer>
				<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
				<Spacer position='top' size='large'>
					<Text variant='label'>{auth.currentUser.email}</Text>
				</Spacer>
			</AvatarContainer>
			<List.Section>
				<SettingsItem
					title='Favourites'
					description='View your favourites'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('Favourites')}
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
