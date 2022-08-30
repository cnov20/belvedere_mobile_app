import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { SafeArea } from './src/components/utility/safe-area.component';

import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { MobileBarsContextProvider } from './src/services/mobile-bars/mobile-bars.context';

// import { mobileBarsRequest } from './src/services/mobile-bars/mobile-bars.service';

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from './src/infrastructure/theme';

// Initialize Firebase
// if (getApps().length < 1) {
// 	const app = initializeApp(firebaseConfig);
// 	// initializeApp(firebaseConfig);
// 	// Initialize other firebase products here
// }

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<MobileBarsContextProvider>
						<Navigation />
					</MobileBarsContextProvider>
					<ExpoStatusBar style='auto' />
				</AuthenticationContextProvider>
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
