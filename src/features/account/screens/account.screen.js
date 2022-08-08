import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = () => {
	return (
		<View>
			<Text>Account Screen!</Text>
			<Button
				icon='lock-open-outline'
				mode='contained'
				onPress={() => navigation.navigate('Login')}>
				Login
			</Button>
			{/* <Spacer size="large"> */}
			<Button
				icon='lock-open-outline'
				mode='contained'
				onPress={() => navigation.navigate('Register')}>
				Register
			</Button>
		</View>
	);
};

export default AccountScreen;

// const styles = StyleSheet.create({});
