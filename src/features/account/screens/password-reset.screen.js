import React, { useState } from 'react';
import { Alert, View } from 'react-native';
// import Parse from 'parse/react-native';
import { useNavigation } from '@react-navigation/native';
// import Styles from './Styles';

import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AnimationWrapper,
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

export const ResetPassword = () => {
	const navigation = useNavigation();

	// Your state variable
	const [email, setEmail] = useState('');

	const doUserPasswordReset = async function () {
		// Note that this value come from state variables linked to your text input
		// const emailValue = email;
		return await sendPasswordResetEmail(auth, email)
			.then(() => {
				// Password reset email sent!
				// ..
				// logIn returns the corresponding ParseUser object
				Alert.alert(
					'Success!',
					`Please check ${email} to proceed with password reset.`
				);
				// Redirect user to your login screen
				navigation.navigate('Login');
				return true;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				// Error can be caused by lack of Internet connection
				Alert.alert('Error!', error.message);
				return false;
			});
	};

	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../../assets/watermelon.json')}
				/>
			</AnimationWrapper>
			<Title>Belvedere Vodka</Title>
			<AccountContainer>
				<Spacer size='large'>
					<AuthInput
						label='E-mail'
						value={email}
						placeholder={'Please enter account email to reset password:'}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						// textContentType='emailAddress'
						// keyboardType='email-address'
						// autoCapitalize='none'
						// onChangeText={(u) => setEmail(u)}
					/>
				</Spacer>
				<Spacer size='large'>
					<AuthButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => doUserPasswordReset()}>
						Reset Password
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
