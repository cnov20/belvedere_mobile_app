import React, { useState, useContext } from 'react';
// import { Button } from 'react-native-paper';
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
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import LottieView from 'lottie-react-native';

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
			<AnimationWrapper>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../../assets/5746-drinks.json')}
				/>
			</AnimationWrapper>
			{/* <View
				style={{
					justifyContent: 'center', //Centered vertically
					alignItems: 'center', // Centered horizontally
					flex: 1,
				}}></View> */}
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

				<Spacer size='xlarge'>
					{!isLoading ? (
						<View
							style={{
								justifyContent: 'center', //Centered vertically
								alignItems: 'center', // Centered horizontally
								// flex: 1,
							}}>
							<AuthButton
								// icon='lock-open-outline'
								mode='outlined'
								// compact={true}
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
								Sign In
							</AuthButton>
						</View>
					) : (
						<ActivityIndicator animating={true} color={Colors.blue300} />
					)}
				</Spacer>
				<Spacer size='large'>
					<View
						style={{
							justifyContent: 'center', //Centered vertically
							alignItems: 'center', // Centered horizontally
							// flex: 1,
						}}>
						<AuthButton
							mode='contained'
							onPress={() => navigation.navigate('Reset Password')}>
							Forgot Password
						</AuthButton>
					</View>
				</Spacer>
			</AccountContainer>

			{/* <Spacer size='xxlarge'>
				<AuthButton mode='outlined' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer> */}
		</AccountBackground>
	);
};
