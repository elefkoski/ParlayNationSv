// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBwNrd8KXJ1tpw6NucTSliKIyI7vHA389M',
	authDomain: 'parlaynationsv.firebaseapp.com',
	projectId: 'parlaynationsv',
	storageBucket: 'parlaynationsv.appspot.com',
	messagingSenderId: '178868050222',
	appId: '1:178868050222:web:5f2622b07c7ca077be42bf',
	measurementId: 'G-LNN949GCYB'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore();

export const savePage = async (userId: string, pageData: any) => {
	try {
		const userRef = doc(db, 'users', userId);
		const uniqueId = Date.now().toString();
		const bookmakrWithId = { ...pageData, id: uniqueId };
		await updateDoc(userRef, {
			bookmarks: arrayUnion(bookmakrWithId)
		});
	} catch (e) {
		console.error('Error saving document: ', e);
	}
};

let analytics;
export const initializeFirebaseAnalytics = () => {
	// Dynamic import for Firebase Analytics
	import('firebase/analytics').then((firebaseAnalytics) => {
		analytics = firebaseAnalytics.getAnalytics(app);
	});
};

export const registerWithEmailPassword = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		console.error('Error during registration:', error);
		throw error;
	}
};

export const loginWithEmailPassword = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error: any) {
		console.error('Error during login:', error);
		if ('code' in error) {
			switch (error.code) {
				case 'auth/user-not-found':
					throw new Error('User not found.');
				case 'auth/wrong-password':
					throw new Error('Incorrect password.');
				case 'auth/invalid-email':
					throw new Error('Invalid email format.');
				default:
					throw new Error('Error during login. Please try again.');
			}
		} else {
			throw new Error('Error during login. Please try again.');
		}
	}
};

export const googleSignIn = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		return result.user;
	} catch (error) {
		console.error('Error during Google sign-in:', error);
		throw new Error('Error during Google sign-in.');
	}
};

export const facebookSignIn = async () => {
	const provider = new FacebookAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		return result.user;
	} catch (error) {
		console.error('Error during Facebook sign-in:', error);
		throw new Error('Error during Facebook sign-in.');
	}
};

export const sendPasswordResetEmail = async () => {};
