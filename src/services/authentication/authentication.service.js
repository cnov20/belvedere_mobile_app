import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

// const auth = getAuth(app);

const loginRequest = (auth, email, password) =>
	// 	firebase.auth().signInWithEmailAndPassword(email, password);
	createUserWithEmailAndPassword(auth, 'novellichris@gmail.com', '123456');
