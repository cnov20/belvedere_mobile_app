import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import AccountScreen from './src/features/account/screens/account.screen';

import { ThemeProvider } from 'styled-components/native';
// import * as firebase from "firebase";

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from './src/infrastructure/theme';

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<SafeAreaView style={styles.container}>
					{/* <View>
					<Searchbar style={styles.search} placeholder='Search' />
				</View> */}
					<AccountScreen />
				</SafeAreaView>
				<ExpoStatusBar style='auto' />
			</ThemeProvider>
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
