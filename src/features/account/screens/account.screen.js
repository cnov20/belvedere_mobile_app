import React, { useContext, useEffect } from 'react';
import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthButtonOpaque,
	Title,
	AnimationWrapper,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { onAuthStateChanged } from 'firebase/auth';
import { View } from 'react-native';

const AccountScreen = ({ navigation }) => {
	const { auth, onLogin } = useContext(AuthenticationContext);
	// if (auth.currentUser) {
	// 	// navigation.navigate('Account Home');
	// 	onLogin(email, password);
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
					source={require('../../../../assets/89840-summer-drink.json')}
				/>
			</AnimationWrapper>
			{/* <Title>Belvedere Vodka</Title> */}
			{/* <AccountContainer> */}
			{/* <View style={{ backgroundColor: 'rgba(255, 0, 255, 1.0)' }}> */}
			<Spacer size='xxlarge'>
				<AuthButton
					// /* // icon='lock-open-outline'
					mode='outlined'
					onPress={() => navigation.navigate('Login')}>
					Sign In
				</AuthButton>
			</Spacer>
			{/* </View> */}
			<Spacer size='large'>
				<AuthButton
					// icon='email'
					mode='contained'
					onPress={() => navigation.navigate('Register')}>
					Create Account
				</AuthButton>
			</Spacer>
			{/* <GoogleSigninButton
					style={{ width: 192, height: 48 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={this._signIn}
					disabled={this.state.isSigninInProgress}
				/> */}
			{/* x</AccountContainer> */}
		</AccountBackground>
	);
};

export default AccountScreen;

// const styles = StyleSheet.create({});
