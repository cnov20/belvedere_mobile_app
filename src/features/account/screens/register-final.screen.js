import React, { useState, useContext } from 'react';
import LottieView from 'lottie-react-native';

import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
	AnimationWrapper,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { AuthContext } from '../../../infrastructure/navigation/AuthPovider';

import { ActivityIndicator, Colors } from 'react-native-paper';

import { KeyboardAvoidingView, View } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

import {
	doc,
	setDoc,
	getFirestore,
	collection,
	addDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';

// const db = getFirestore();

export const RegisterFinalScreen = ({ route, navigation }) => {
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [validationMessage, setValidationMessage] = useState('');

	const validateAndSet = (value, valueToCompare, setValue) => {
		if (value !== valueToCompare) {
			setValidationMessage('Passwords do not match.');
		} else {
			setValidationMessage('');
		}
		setValue(value);
	};

	const { firstName, lastName, zipCode, dateOfBirth, country } = route.params;
	// console.log('DESTRCTURED: ', firstName, lastName);
	const { onRegister, onLogin, error, isLoading, addUserToDb, db, auth } =
		useContext(AuthenticationContext);

	const onPress = async () => {
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				first: firstName,
				last: lastName,
				country: country,
				zip: zipCode,
				dob: dateOfBirth,
				email: email,
				password: password,
				userId: auth.currentUser.uid,
			});
			console.log('DOCUMENT REFERENCE IS: ', docRef);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
		if (password === confirmPassword) {
			onRegister(email, password);
		}
	};

	// setDoc()

	// const docRef = doc(db, "countries", "my.custom.id@gmail.com" );

	// const data = {
	//    name: "Ottawa",
	//    country: "Canada",
	//    province: "ON"
	// };

	// setDoc(docRef, data)
	// .then(() => {
	//     console.log("Document has been added successfully);
	// })
	// .catch(error => {
	//     console.log(error);
	// })

	// console.log('ROUTE PARAMS: ', route.params);

	return (
		// <KeyboardAvoidingView>
		<AccountBackground>
			<AccountCover />
			{/* <Title>Belvedere Vodka</Title> */}
			<AnimationWrapper>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../../assets/5746-drinks.json')}
				/>
			</AnimationWrapper>
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
						<View style={{ paddingBottom: 15 }}>
							<AuthButton
								// icon='email'
								mode='outlined'
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
						</View>
					) : (
						<ActivityIndicator animating={true} color={Colors.blue300} />
					)}
				</Spacer>
				<AuthButton mode='contained' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</AccountContainer>
			{/* <Spacer size='large'> */}

			{/* </Spacer> */}
		</AccountBackground>
		/* </KeyboardAvoidingView> */
	);
};
