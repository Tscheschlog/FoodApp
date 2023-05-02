// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpUVkRTBwOSDjUsdcWHAUAczrvio61R7c",
    authDomain: "resturantapp-df947.firebaseapp.com",
    projectId: "resturantapp-df947",
    storageBucket: "resturantapp-df947.appspot.com",
    messagingSenderId: "345136227932",
    appId: "1:345136227932:web:b44d7b987e2d463bf9a899"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
