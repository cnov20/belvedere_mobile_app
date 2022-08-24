import React, { useState, useContext } from 'react';
// import { Text } from 'react-native-paper';
import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { ActivityIndicator, Colors } from 'react-native-paper';
// import { auth } from 'firebaseui';
import { onAuthStateChanged } from 'firebase/auth';

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(error);
	const { onLogin, error, isLoading, auth } = useContext(AuthenticationContext);

	// if (auth.currentUser) {
	// 	navigation.navigate('Account Home');
	// } else {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			onLogin(email, password);
	// 		}
	// 	});
	// }
	return (
		<AccountBackground>
			<AccountCover />
			<AccountContainer>
				<AuthInput
					label='E-mail'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(u) => setEmail(u)}
				/>
				<Spacer size='large'>
					<AuthInput
						label='Password'
						value={password}
						textContentType='password'
						secureTextEntry
						autoCapitalize='none'
						// secure
						onChangeText={(p) => setPassword(p)}
					/>
				</Spacer>

				<Spacer size='large'>
					{!isLoading ? (
						<AuthButton
							icon='lock-open-outline'
							mode='contained'
							onPress={() => {
								if (email != '' && password != '') {
									onLogin(email, password);
								} else {
									error && (
										<ErrorContainer size='large'>
											<Text variant='error'>{errorMessage}</Text>
										</ErrorContainer>
									);
									console.log('ERROR: ', error);
								}
							}}>
							Login
						</AuthButton>
					) : (
						<ActivityIndicator animating={true} color={Colors.blue300} />
					)}
				</Spacer>
			</AccountContainer>
			<Spacer size='large'>
				<AuthButton
					mode='contained'
					onPress={() => navigation.navigate('Reset Password')}>
					Forgot Password
				</AuthButton>
			</Spacer>
			<Spacer size='large'>
				<AuthButton mode='contained' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
	);
};
