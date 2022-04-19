// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyMFeNr-DyR4hXKiHNzQGh1KnlyeLZuaY",
  authDomain: "instagram-clone-b4581.firebaseapp.com",
  projectId: "instagram-clone-b4581",
  storageBucket: "instagram-clone-b4581.appspot.com",
  messagingSenderId: "510703147688",
  appId: "1:510703147688:web:9a2b6fc2dc69624f74409d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
