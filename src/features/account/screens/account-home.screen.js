import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AccountCardBackground } from '../components/account.styles';
import AccountInfoCard from '../components/account-info-card.component';
import { AccountBackground } from '../components/account.styles';

const AccountHomeScreen = () => {
	return (
		<AccountBackground>
			<AccountCardBackground>
				<AccountInfoCard />
			</AccountCardBackground>
		</AccountBackground>
	);
};

export default AccountHomeScreen;
