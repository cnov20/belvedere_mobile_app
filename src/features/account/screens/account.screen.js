import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
} from '../components/account.styles';

const AccountScreen = () => {
	return (
		<AccountBackground>
			<AccountCover />
			<AccountContainer>
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate('Login')}>
					Login
				</AuthButton>
				{/* <Spacer size='large'> */}
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate('Register')}>
					Register
				</AuthButton>
				{/* </Spacer> */}
			</AccountContainer>
		</AccountBackground>
	);
};

export default AccountScreen;

// const styles = StyleSheet.create({});
