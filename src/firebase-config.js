import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeAuth, indexedDBLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApoTPcYmWFrDGootbjDEPyISPnt63kieQ",
  authDomain: "firts-attempt-1203.firebaseapp.com",
  databaseURL: "https://firts-attempt-1203-default-rtdb.firebaseio.com",
  projectId: "firts-attempt-1203",
  storageBucket: "firts-attempt-1203.appspot.com",
  messagingSenderId: "982854747504",
  appId: "1:982854747504:web:bdc7d466eeba41d5cdbbb5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
export const auth = initializeAuth(app, {
  persistence: indexedDBLocalPersistence,
});
// Create database reference
export const database = getDatabase(app);
// Reference to posts in Realtime DB
export const postsRef = ref(database, "posts");
// Reference to users in Realtime DB
export const usersRef = ref(database, "users");
// Get reference to specific post using post id
export function getPostRef(postId) {
  return ref(database, "posts/" + postId);
}
// Get reference to specific user using user id
export function getUserRef(userId) {
  return ref(database, "users/" + userId);
}

// Reference to the storage service
export const storage = getStorage(app);
