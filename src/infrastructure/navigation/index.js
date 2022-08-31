import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { onAuthStateChanged } from 'firebase/auth';
import { onLog } from 'firebase/app';

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

	// if (auth.currentUser) {
	// 	<AppNavigator />;
	// } else {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			<AppNavigator />;
	// 		}
	// 	});
	// }

	// if (auth.currentUser && isAuthenticated) {
	// 	return (
	// 		<>
	// 			<AppNavigator />;
	// 		</>
	// 	);
	// } else {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			// User is signed in, see docs for a list of available properties
	// 			// https://firebase.google.com/docs/reference/js/firebase.User
	// 			const uid = user.uid;
	// 			// ...
	// 		} else {
	// 			// User is signed out
	// 			// ...
	// 		}
	// 	});
	// }

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AppNavigator />}
		</NavigationContainer>
	);
};

// showSendVerificationEmail()
// ) : auth.currentUser.emailVerified <AccountNavigator /> ? (
