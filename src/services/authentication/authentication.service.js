import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

// const auth = getAuth(app);
// const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const loginRequest = (auth, email, password) =>
	// 	firebase.auth().signInWithEmailAndPassword(email, password);
	signInWithEmailAndPassword(auth, email, password);
