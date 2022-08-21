import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
	AnimationWrapper,
} from '../components/account.styles';

const AccountScreen = ({ navigation }) => {
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
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate('Login')}>
					Login
				</AuthButton>
				<Spacer size='large'>
					<AuthButton
						icon='email'
						mode='contained'
						onPress={() => navigation.navigate('Register')}>
						Register
					</AuthButton>
				</Spacer>
				{/* <GoogleSigninButton
					style={{ width: 192, height: 48 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={this._signIn}
					disabled={this.state.isSigninInProgress}
				/> */}
			</AccountContainer>
		</AccountBackground>
	);
};

export default AccountScreen;

// const styles = StyleSheet.create({});
