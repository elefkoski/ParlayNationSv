// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import type { Bookmark } from './store';
import { getAnalytics } from 'firebase/analytics';
import {
	getFirestore,
	addDoc,
	collection,
	getDocs,
	getDoc,
	deleteDoc,
	doc,
	where,
	query as firestoreQuery
} from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';

// Add SDKs for Firebase products that you want to use
const firebaseConfig = {
	apiKey: 'AIzaSyBwNrd8KXJ1tpw6NucTSliKIyI7vHA389M',
	authDomain: 'parlaynationsv.firebaseapp.com',
	projectId: 'parlaynationsv',
	storageBucket: 'parlaynationsv.appspot.com',
	messagingSenderId: '178868050222',
	appId: '1:178868050222:web:5f2622b07c7ca077be42bf',
	measurementId: 'G-LNN949GCYB'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

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

export const savePage = async (userId: string, pageData: any) => {
	console.log('Debut firebase.ts: Entered savePage function.');
	let docRefId = null; // Initialize docRefId to null
	try {
		//console.log('Debug firebase.ts: User ID:', userId);
		console.log('Debug firebase.ts: Page data:', pageData);
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		//console.log('Debug firebase.ts: Bookmarks Collection:', bookmarksCollection);
		const docRef = await addDoc(bookmarksCollection, pageData);
		docRefId = docRef.id; // Set docRefId to the id of the document
		console.log('Debug firebase.ts: Doc Ref Id:', docRefId);
	} catch (e) {
		console.error('Error saving bookmark: ', e);
	}
	console.log('Debut firebase.ts: Leaving savePage function.');
	return docRefId; // Return the id of the document or null if there was an error
};

export const removePage = async (userId: string, bookmarkId: string) => {
	console.log('Debug firebase.ts: Entered removePage function');
	console.log(`Debug firebase.ts: User ID: ${userId}`);
	console.log(`Debug firebase.ts: BookmarkId: ${bookmarkId}`);

	try {
		const bookmarkRef = doc(db, `users/${userId}/bookmarks/${bookmarkId}`);
		console.log('Debug firebase.ts: Bookmark Reference:', bookmarkRef);

		await deleteDoc(bookmarkRef);
		console.log(`Debug firebase.ts: Successfully removed bookmarkId ${bookmarkId}.`);
	} catch (error) {
		console.error('Error removing document:', error);
	}
};

export const fetchBookmarkId = async (userId: string, pageUrl: string): Promise<string | null> => {
	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		const querySnapshot = await getDocs(
			firestoreQuery(bookmarksCollection, where('pageUrl', '==', pageUrl))
		);

		if (!querySnapshot.empty) {
			const doc = querySnapshot.docs[0];
			return doc.id;
		}
	} catch (e) {
		console.error('Error fetching bookmark: ', e);
	}
	return null;
};

export async function fetchAllBookmarks(userId: string): Promise<Array<Bookmark>> {
	const bookmarks: Array<Bookmark> = [];

	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		const bookmarkDocs = await getDocs(bookmarksCollection);

		for (const doc of bookmarkDocs.docs) {
			const bookmarkId = doc.id;
			console.log('Bookmark ID:', bookmarkId);
			const bookmarkData = doc.data();
			console.log('Bookmark Data:', bookmarkData);
			// Combine the bookmark ID and its details into one object
			bookmarks.push({ bookmarkId, ...bookmarkData });
		}
	} catch (error) {
		console.log('Error fetching all bookmarks:', error);
	}

	return bookmarks;
}
