import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
// import AppOpen from './src/screens/App-Open';
import { Searchbar } from 'react-native-paper';
import AccountScreen from './src/features/account/screens/account.screen';
// import { Icon } from 'react-native-vector-icons';

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				{/* <View>
					<Searchbar style={styles.search} placeholder='Search' />
				</View> */}
				<AccountScreen />
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		margin: 16,
		// padding: 16,
	},
});
