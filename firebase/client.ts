
import { initializeApp ,getApp, getApps} from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBf9DmslPhpzDItQz68MXLGKYlkJNM3kpI",
    authDomain: "prepwise-93de0.firebaseapp.com",
    projectId: "prepwise-93de0",
    storageBucket: "prepwise-93de0.firebasestorage.app",
    messagingSenderId: "103356629692",
    appId: "1:103356629692:web:d9a26bf5b2eb3647ef46b9",
    measurementId: "G-XNCZTBVFB4"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth= getAuth(app);
export const db= getFirestore(app);