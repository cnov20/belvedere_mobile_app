import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';

import {
	AccountCardBackground,
	AccountContainer,
	CardContainer,
	Title,
} from '../components/account.styles';
// import AccountInfoCard from '../components/account-info-card.component';

const PrivacyPolicyScreen = () => {
	return (
		<AccountCardBackground>
			<CardContainer>
				<Card>
					<Title>Privacy Policy</Title>
					<Paragraph>
						I would like to get information about [ brand], its products,
						offers, and other related information. I understand that my
						information will be shared with Moet Hennessy and used as described
						in the Privacy Policy.{' '}
					</Paragraph>
				</Card>
			</CardContainer>
		</AccountCardBackground>
	);
};

export default PrivacyPolicyScreen;
