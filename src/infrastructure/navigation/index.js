import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
	const { auth, user, isAuthenticated, sendEmailVerification } = useContext(
		AuthenticationContext
	);
	// const [emailVerified, setEmailVerified] = useState(null);

	let showSendVerificationEmail = (auth) => {
		return (
			<View>
				<Text>Please verify your email to use ToDo</Text>
				<Button
					title='Send Verification Email'
					onPress={() => sendEmailVerification(auth.currentUser)}
				/>
			</View>
		);
	};

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
		</NavigationContainer>
	);
};

// showSendVerificationEmail()
// ) : auth.currentUser.emailVerified <AccountNavigator /> ? (
