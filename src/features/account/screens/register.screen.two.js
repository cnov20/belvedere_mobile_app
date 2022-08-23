import React, { useState, useContext } from 'react';
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
import { AuthContext } from '../../../infrastructure/navigation/AuthPovider';

import { ActivityIndicator, Colors } from 'react-native-paper';

import { doc, setDoc } from 'firebase/firestore';
import { KeyboardAvoidingView } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

export const RegisterScreenTwo = ({ route, navigation }) => {
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let [confirmPassword, setConfirmPassword] = useState('');
	let [validationMessage, setValidationMessage] = useState('');

	const validateAndSet = (value, valueToCompare, setValue) => {
		if (value !== valueToCompare) {
			setValidationMessage('Passwords do not match.');
		} else {
			setValidationMessage('');
		}
		setValue(value);
	};

	const onPress = () => {
		if (password === confirmPassword) {
			onRegister(email, password);
		}
	};

	const { firstName, lastName, zipCode, dateOfBirth, country } = route.params;
	console.log(route);
	const { onRegister, onLogin, error, isLoading, addUserToDb } = useContext(
		AuthenticationContext
	);

	console.log(email, password);
	return (
		// <KeyboardAvoidingView>
		<AccountBackground>
			<AccountCover />
			<Title>Belvedere Vodka</Title>
			<AccountContainer>
				<Text variant='error'>{validationMessage}</Text>
				<Spacer size='large'>
					<AuthInput
						label='E-mail'
						value={email}
						textContentType='emailAddress'
						keyboardType='email-address'
						autoCapitalize='none'
						onChangeText={(u) => setEmail(u)}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthInput
						label='Password'
						value={password}
						textContentType='password'
						secureTextEntry
						autoCapitalize='none'
						onChangeText={(p) =>
							validateAndSet(p, confirmPassword, setPassword)
						}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthInput
						label='Repeat Password'
						value={confirmPassword}
						textContentType='password'
						secureTextEntry
						autoCapitalize='none'
						onChangeText={(cp) =>
							validateAndSet(cp, password, setConfirmPassword)
						}
					/>
				</Spacer>
				{error && (
					<ErrorContainer size='large'>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size='large'>
					{!isLoading ? (
						<AuthButton
							icon='email'
							mode='contained'
							onPress={onPress}
							// register()
							// 	.then((u) => {
							// 	setDoc(doc(db, 'users', user.uid), {
							// 		displayName: firstName,
							// 		lastName: lastName,
							// 		// photoURL: image,
							// 		password: password,
							// 		email: email,
							// 	});
							// 	u.user.updateProfile({
							// 		displayName: firstName,
							// 		// photoURL: image,
							// 	});
							// });
						>
							Register
						</AuthButton>
					) : (
						<ActivityIndicator animating={true} color={Colors.blue300} />
					)}
				</Spacer>
			</AccountContainer>
			<Spacer size='large'>
				<AuthButton mode='contained' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
		/* </KeyboardAvoidingView> */
	);
};
