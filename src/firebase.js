// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC_eYkNog_SNtB2zVhCpoOndsNNuV_4mpk",
    authDomain: "chats-c0713.firebaseapp.com",
    projectId: "chats-c0713",
    storageBucket: "chats-c0713.appspot.com",
    messagingSenderId: "192204864652",
    appId: "1:192204864652:web:a1b8f1dea060e5a15ecfa9",
    measurementId: "G-KHQ8PRE8F4"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth()
export const analytics = getAnalytics(app);
export const storage = getStorage()
export const db = firebase.firestore();