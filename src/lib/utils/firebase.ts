console.log('Entering firebase.ts');

import { initializeApp } from 'firebase/app';
//import type { Bookmark } from './userData';
import { getFirestore } from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';
import { user } from './userData';
import { fetchUserData } from './userDataOperations';

// Add SDKs for Firebase products that you want to use
// Firebase web config is loaded from environment variables (see .env.example).
// Vite exposes VITE_ variables to the client, so these values are still
// present in the built client bundle, but they are no longer hardcoded
// in this file or committed to git. Restrict the key in the Firebase
// console by API restriction and authorized domain.
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

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
		const firebaseUser = userCredential.user;

		// Update the user store
		user.set({
			id: firebaseUser.uid,
			email: firebaseUser.email,
			displayName: firebaseUser.displayName,
			profilePicture: firebaseUser.photoURL
		});

		// Fetch user data from Firebase and cache it locally
		await fetchUserData(firebaseUser);

		console.log('Login successful and data fetched.');
		return firebaseUser;
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

// <<<<< Not being used >>>>> //
let analytics;
export const initializeFirebaseAnalytics = () => {
	import('firebase/analytics').then((firebaseAnalytics) => {
		analytics = firebaseAnalytics.getAnalytics(app);
	});
};
export const sendPasswordResetEmail = async () => {};

console.log('Leaving firebase.ts');
