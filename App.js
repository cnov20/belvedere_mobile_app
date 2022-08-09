import React, { useState, useEffect } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from './src/infrastructure/theme';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAN6cudr36kLBK5lf6ledbdt8ZsBGROn04',
	authDomain: 'belvedere-mobile-app.firebaseapp.com',
	projectId: 'belvedere-mobile-app',
	storageBucket: 'belvedere-mobile-app.appspot.com',
	messagingSenderId: '736588520002',
	appId: '1:736588520002:web:9075ffb8be47a5e35b6bdb',
	measurementId: 'G-FFMLBM5V3M',
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
// if (getApps().length < 1) {
// 	const app = initializeApp(firebaseConfig);
// 	// initializeApp(firebaseConfig);
// 	// Initialize other firebase products here
// }

const auth = getAuth(app);
const analytics = getAnalytics(app);

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<SafeAreaView style={styles.container}>
						<Navigation />
					</SafeAreaView>
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
