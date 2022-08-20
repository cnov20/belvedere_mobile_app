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
				<AuthButton
					icon='email'
					mode='contained'
					onPress={() =>
						navigation.navigate('Register Two', {
							firstName: firstName,
							lastName: lastName,
							zipCode: zipCode,
							dateOfBirth: dateOfBirth,
							country: country,
						})
					}>
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
