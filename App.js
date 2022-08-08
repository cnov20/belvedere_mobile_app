import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import AppOpen from './screens/App-Open';
import { Searchbar } from 'react-native-paper';

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<Searchbar placeholder='Search' />
				<AppOpen />
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
