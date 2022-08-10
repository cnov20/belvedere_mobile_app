import React, { useState, createContext } from 'react';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

import { loginRequest } from './authentication.service';

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

const auth = getAuth();

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const onLogin = (email, password) => {
		setIsLoading(true);
		loginRequest(auth, email, password)
			.then((u) => {
				setUser(u);
				console.log(auth, email, password);
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				setError(e.toString());
			});
	};

	const onRegister = (email, password, repeatedPassword) => {
		if (password !== repeatedPassword) {
			setError('Error: Passwords do not match');
			// return;
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((u) => {
				setUser(u);
				console.log(auth, email, password);

				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				setError(e.toString());
			});
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};
