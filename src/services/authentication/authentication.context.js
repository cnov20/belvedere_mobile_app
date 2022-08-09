import React, { useState, createContext } from 'react';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

import { getAnalytics, logEvent } from 'firebase/analytics';

import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const onLogin = (auth, email, password) => {
		setIsLoading(true);
		loginRequest(email, password)
			.then((u) => {
				setUser(u);
				console.log(u);
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
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};

// const [isAuthenticated, setIsAuthenticated] = useState(false);

// useEffect(() => {
//     setTimeout(() => {

//             .then((user) => {
//                 console.log(user);
//                 setIsAuthenticated(true);
//                 sendEmailVerification(auth.currentUser);
//                 logEvent(analytics, 'sign_up');
//             })
//             .catch((e) => {
//                 console.error(e);
//             });
//     }, 5000);
// }, []);
