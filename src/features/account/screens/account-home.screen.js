import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AccountCardBackground } from '../components/account.styles';
import AccountInfoCard from '../components/account-info-card.component';

const AccountHomeScreen = () => {
	return (
		<AccountCardBackground>
			<AccountInfoCard />
		</AccountCardBackground>
	);
};

export default AccountHomeScreen;
