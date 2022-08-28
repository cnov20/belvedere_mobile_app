import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AccountContainer,
	AccountBackground,
	AuthButton,
	CardButton,
	CardContainer,
} from './account.styles';

// import { SocialIcon } from '@rneui/themed';

// import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

// import { SocialIcon } from 'react-native-elements';

// import { Icon } from '@rneui/themed';

{
	/* <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
	{!photo && <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />}
	{photo && (
		<Avatar.Image
			size={180}
			source={{ uri: photo }}
			backgroundColor='#2182BD'
		/>
	)}
</TouchableOpacity>; */
}

const AccountInfoCard = () => {
	// console.log(pho)

	// React.useEffect(() => {
	// 	StatusBar.setBarStyle('dark-content');
	// }, []);

	const [photo, setPhoto] = useState(null);

	const { onLogout, user, auth } = useContext(AuthenticationContext);

	const navigation = useNavigation();

	if (user || auth) {
		const currentUser = auth.currentUser;
		console.log(currentUser);
	}

	const currentUser = auth.currentUser;

	const getProfilePicture = async (currentUser) => {
		const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
		setPhoto(photoUri);
		console.log(photo);
	};

	useFocusEffect(
		useCallback(() => {
			getProfilePicture(currentUser);
		}, [currentUser])
	);

	const LeftContent = (props) => (
		<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
			{!photo && (
				<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
			)}
			{photo && (
				<Avatar.Image
					// size={90}
					source={{ uri: photo }}
					backgroundColor='#2182BD'
				/>
			)}
		</TouchableOpacity>
	);

	return (
		<CardContainer>
			<Card style={{ flex: 2 }}>
				<Card.Title
					title='Card Title'
					subtitle='Card Subtitle'
					left={LeftContent}></Card.Title>
				<Card.Content>
					{/* <Title>Card title</Title>
				<Paragraph>Card content</Paragraph> */}
					<Spacer position='top' size='large'>
						<Title variant='label'>Hi, {auth.currentUser.email}!</Title>
						<Paragraph variant='label'>Ready to get started?</Paragraph>
					</Spacer>
				</Card.Content>
				{/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}

				<Card.Actions style={{ flexDirection: 'column' }}>
					<Spacer size='large'>
						<CardButton
							icon='lock-open-outline'
							mode='contained'
							onPress={() => navigation.navigate('Order A Drink')}>
							Yes, Let's Order A Drink!
						</CardButton>
					</Spacer>
					<Spacer size='xxlarge'>
						<CardButton
							icon='email'
							mode='contained'
							onPress={() => navigation.navigate('Location Finder')}>
							Mobile Bar Experience — Locations
						</CardButton>
					</Spacer>
					<Spacer size='medium'>
						<CardButton
							icon='email'
							mode='contained'
							onPress={() => navigation.navigate('How This Works')}>
							How Does This Work?
						</CardButton>
					</Spacer>
				</Card.Actions>
				{/* <Icon name='facebook' type='material' size={24} color='' /> */}
				<View style={styles.iconContainer}>
					{/* <SocialIcon type='facebook' /> */}
					{/* <Icon name='rocket' size={30} color='#900' /> */}

					{/* <Avatar.Icon icon='folder' />
					<Avatar.Icon icon='folder' />
					<Avatar.Icon icon='folder' />
					<Avatar.Icon icon='folder' /> */}

					{/* <Avatar.Text size={24} label='FB' /> */}
				</View>
			</Card>
		</CardContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	iconTitle: {
		textAlign: 'center',
	},
	iconContainer: {
		flexDirection: 'row',
		padding: 16,
		justifyContent: 'space-between',
	},
});

export default AccountInfoCard;
