import React, { useState, createContext } from 'react';
// import * as firebase from 'firebase';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	signOut,
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
// import firestore from 'firebase/firestore';
import {
	doc,
	setDoc,
	getFirestore,
	collection,
	addDoc,
} from 'firebase/firestore';
// firebase.firestore();

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
auth.useDeviceLanguage();

const db = getFirestore();

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [emailVerified, setEmailVerified] = useState(null);

	const onLogin = (email, password) => {
		setIsLoading(true);
		loginRequest(auth, email, password)
			.then((u) => {
				setUser(u);
				// const user = userCredential.user;
				// console.log('USERRRRRRRRR: ', email);
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				setError(e.toString());
				console.error(e);
			});
	};
	// const onRegister = () => {};
	// if (password !== repeatedPassword) {
	// 	// setError('Error: Passwords do not match');
	// 	// return;
	// }
	const onRegister = (email, password) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((u) => {
				setUser(u);
				addUserToDb();
				setIsLoading(false);
			})
			// sendEmailVerification(auth.currentUser)
			//ensure we catch any errors at this stage to advise us if something does go wrong
			.catch((error) => {
				// console.log(
				// 	'Something went wrong with added user to firestore: ',
				// 	error
				// );
				setIsLoading(false);
				setError(error.toString());
				console.error(error);
			})

			//we need to catch the whole sign up process if it fails too.
			.catch((error) => {
				console.log('Something went wrong with sign up: ', error);
				setIsLoading(false);
				setError(error.toString());
				console.error(error);
			});
	};

	const onLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setUser(null);
				setError(null);
			})
			.catch((e) => {
				// An error happened.
				setError(e.toString());
				console.error(e);
			});
	};

	const addUserToDb = async (
		firstName,
		lastName,
		country,
		zipCode,
		dateOfBirth
	) => {
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				first: firstName,
				last: lastName,
				country: country,
				zip: zipCode,
				dob: dateOfBirth,
			});
			console.log('DOCUMENT REFERENCE IS: ', docRef);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				auth,
				user,
				db,
				isLoading,
				error,
				emailVerified,
				addUserToDb,
				onLogin,
				onRegister,
				onLogout,
				sendEmailVerification,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};

// register: async (email, password) => {
// 	try {
// 		await auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then(() => {
// 				//Once the user creation has happened successfully, we can add the currentUser into firestore
// 				//with the appropriate details.
// 				firestore()
// 					.collection('users')
// 					.doc(auth().currentUser.uid)
// 					.set({
// 						fname: '',
// 						lname: '',
// 						email: email,
// 						createdAt: firestore.Timestamp.fromDate(new Date()),
// 						userImg: null,
// 					})
// 					//ensure we catch any errors at this stage to advise us if something does go wrong
// 					.catch((error) => {
// 						console.log(
// 							'Something went wrong with added user to firestore: ',
// 							error
// 						);
// 					});
// 			})
// 			//we need to catch the whole sign up process if it fails too.
// 			.catch((error) => {
// 				console.log('Something went wrong with sign up: ', error);
// 			});
// 	}

// 	.then((u) => {
// 		setUser(u);
// 		// const user = userCredential.user;
// 		// console.log('USERRRRRRRRR: ', email);
// 		setIsLoading(false);
// 		sendEmailVerification(auth.currentUser);
// 	})
// 	.then((u) => {
// 		setDoc(doc(db, 'users', user.uid), {
// 			displayName: firstName,
// 			lastName: lastName,
// 			// photoURL: image,
// 			password: password,
// 			email: email,
// 		});

// 		u.user.updateProfile({
// 			displayName: firstName,
// 			// photoURL: image,
// 		});
// 	})
// 	.catch((e) => {
// 		setIsLoading(false);
// 		setError(e.toString());
// 		console.error(e);
// 	});

// Once the user creation has happened successfully, we can add the currentUser into firestore
// with the appropriate details.
// firestore()
// 		.collection('users')
// 		.doc(auth().currentUser.uid)
// 		.set({
// 			firstName: '',
// 			lname: '',
// 			email: email,
// 			createdAt: firestore.Timestamp.fromDate(new Date()),
// 			userImg: null,
// 		});
// firstName,
// lastName,
// country,
// zipCode,
// dateOfBirth,
// email,
// password
// 			firstName,
// 			lastName,
// 			country,
// 			zipCode,
// 			dateOfBirth,
// 			email,
// 			password
