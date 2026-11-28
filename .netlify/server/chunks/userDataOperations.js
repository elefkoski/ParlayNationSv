import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { d as derived, w as writable } from "./index.js";
import { g as get_store_value } from "./ssr.js";
console.log("Entering craps-simulator-bet-placement.ts");
console.log("Exiting craps-simulator-bet-placement.ts");
console.log("Entering userData.ts");
const user = writable(null);
derived(user, ($user) => $user !== null && $user.id !== "guest");
const savedBookmarks = writable([]);
const playerBets = writable([]);
console.log("Exiting userData.ts");
console.log("Entering firebase.ts");
const firebaseConfig = {
  apiKey: "AIzaSyBwNrd8KXJ1tpw6NucTSliKIyI7vHA389M",
  authDomain: "parlaynationsv.firebaseapp.com",
  projectId: "parlaynationsv",
  storageBucket: "parlaynationsv.firebasestorage.app",
  messagingSenderId: "178868050222",
  appId: "1:178868050222:web:5f2622b07c7ca077be42bf",
  measurementId: "G-LNN949GCYB"
};
const app = initializeApp(firebaseConfig);
getAuth(app);
const db = getFirestore();
console.log("Leaving firebase.ts");
console.log("Entering userDataOperations.ts");
async function syncLocalToFirebase() {
  const currentUser = get_store_value(user);
  if (!currentUser || currentUser.id === "guest") {
    console.log("No user logged in. Skipping sync.");
    return;
  }
  console.log("Syncing local data to Firebase...");
  try {
    const userId = currentUser.id;
    const bookmarks = getUserDataFromLocal("savedBookmarks");
    if (bookmarks) {
      await Promise.all(
        bookmarks.map(
          (bookmark) => setDoc(doc(db, `users/${userId}/savedBookmarks/${bookmark.bookmarkId}`), bookmark)
        )
      );
    }
    const bets = getUserDataFromLocal("playerBets");
    if (bets) {
      await Promise.all(
        bets.map((bet) => setDoc(doc(db, `users/${userId}/playerBets/${bet.id}`), bet))
      );
    }
    const prefs = getUserDataFromLocal("crSimPrefs");
    if (prefs) {
      await updateDoc(doc(db, `users/${userId}`), { crapsSimulator: prefs });
    }
    console.log("Local data synced to Firebase successfully.");
  } catch (error) {
    console.error("Error syncing local data to Firebase:", error);
  }
}
function isPageBookmarked(pageUrl) {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return false;
  }
  const cachedBookmarks = JSON.parse(localStorage.getItem("savedBookmarks") || "[]");
  return cachedBookmarks.some((savedBookmark) => savedBookmark.pageUrl === pageUrl);
}
async function deleteProfilePageBookmark(bookmarkId) {
  try {
    const cachedBookmarks = JSON.parse(localStorage.getItem("savedBookmarks") || "[]");
    const updatedBookmarks = cachedBookmarks.filter(
      (savedBookmark) => savedBookmark.bookmarkId !== bookmarkId
    );
    savedBookmarks.set(updatedBookmarks);
    localStorage.setItem("savedBookmarks", JSON.stringify(updatedBookmarks));
    const currentUser = get_store_value(user);
    if (currentUser && currentUser.id !== "guest") {
      const removedBookmark = cachedBookmarks.find(
        (savedBookmark) => savedBookmark.bookmarkId === bookmarkId
      );
      const docId = removedBookmark?.id ?? bookmarkId;
      await deleteDoc(doc(db, `users/${currentUser.id}/savedBookmarks/${docId}`));
    }
    console.log(`Bookmark with ID ${bookmarkId} deleted locally and from Firebase.`);
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }
}
function getUserDataFromLocal(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading ${key} from LocalStorage:`, error);
    return null;
  }
}
console.log("Exiting userDataOperations.ts");
export {
  savedBookmarks as a,
  deleteProfilePageBookmark as d,
  isPageBookmarked as i,
  playerBets as p,
  syncLocalToFirebase as s,
  user as u
};
