import React from 'react';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
} from '../components/account.styles';

const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
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
			</AccountContainer>
		</AccountBackground>
	);
};

export default AccountScreen;

// const styles = StyleSheet.create({});
