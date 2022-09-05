import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { SafeArea } from './src/components/utility/safe-area.component';

import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { MobileBarsContextProvider } from './src/services/mobile-bars/mobile-bars.context';
import { LocationContextProvider } from './src/services/location/location.context';

// import { mobileBarsRequest } from './src/services/mobile-bars/mobile-bars.service';

// import {
// 	useFonts as useOswald,
// 	Oswald_400Regular,
// } from '@expo-google-fonts/oswald';

// import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

export default function App() {
	// const [oswaldLoaded] = useOswald({
	// 	Oswald_400Regular,
	// });

	// const [latoLoaded] = useLato({
	// 	Lato_400Regular,
	// });

	// if (!oswaldLoaded || !latoLoaded) {
	// 	return null;
	// }
	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<AuthenticationContextProvider>
						<MobileBarsContextProvider>
							<Navigation />
						</MobileBarsContextProvider>
						<ExpoStatusBar style='auto' />
					</AuthenticationContextProvider>
				</LocationContextProvider>
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
