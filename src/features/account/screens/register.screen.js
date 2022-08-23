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

import { ActivityIndicator, Colors } from 'react-native-paper';

import {
	doc,
	setDoc,
	getFirestore,
	collection,
	addDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';

const db = getFirestore();

export const RegisterScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [country, setCountry] = useState('');

	const { onRegister, isLoading, error } = useContext(AuthenticationContext);
	// console.log(email, password);
	return (
		<AccountBackground>
			<AccountCover />
			<Title>Belvedere Vodka</Title>
			<AccountContainer>
				<AuthInput
					label='First Name'
					value={firstName}
					textContentType='givenName'
					keyboardType='default'
					autoCapitalize='none'
					onChangeText={(first) => setFirstName(first)}
				/>
				<Spacer size='large'>
					<AuthInput
						label='Last Name'
						value={lastName}
						textContentType='familyName'
						keyboardType='default'
						autoCapitalize='none'
						onChangeText={(last) => setLastName(last)}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthInput
						label='Date Of Birth'
						value={dateOfBirth}
						textContentType='date'
						keyboardType='date'
						autoCapitalize='none'
						onChangeText={(date) => setDateOfBirth(date)}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthInput
						label='Zip Code'
						value={zipCode}
						textContentType='number'
						// secureTextEntry
						autoCapitalize='none'
						onChangeText={(zip) => setZipCode(zip)}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthInput
						label='Country of Residence'
						value={country}
						textContentType='country'
						secureTextEntry
						autoCapitalize='none'
						onChangeText={(c) => setCountry(c)}
					/>
				</Spacer>
				{error && (
					<ErrorContainer size='large'>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
			</AccountContainer>
			<Spacer size='large'>
				<AuthButton icon='email' mode='contained' onPress={onPress}>
					Next
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

const onPress = async () => {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			first: firstName,
			last: lastName,
			country: country,
			zip: zipCode,
			dob: dateOfBirth,
		});
		console.log('DOCUMENT REFERENCE IS: ', docRef);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
	navigation.navigate('Register Final', {
		firstName: firstName,
		lastName: lastName,
		zipCode: zipCode,
		dateOfBirth: dateOfBirth,
		country: country,
	});
};
