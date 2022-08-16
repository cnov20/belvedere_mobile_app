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

const TermsAndConditionsScreen = () => {
	return (
		<AccountCardBackground>
			<CardContainer>
				<Card>
					<Title>Terms & Conditions</Title>
					<Paragraph>
						You must be of legal drinking and purchasing age in your location to
						use this app. If no such laws exist in your location, you must be 21
						to enter this site. by clicking the agree button, you agree to our
						Terms and Conditions of Use and have read our Privacy and Cookies
						notice. Do not forward these materials to anyone below the legal
						drinking age.
					</Paragraph>
				</Card>
			</CardContainer>
		</AccountCardBackground>
	);
};

export default TermsAndConditionsScreen;
