// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTgcc1QMEwRIQlDwx_wT9oT1lj4HF4h4Q",
    authDomain: "react-netflix-clone-c4590.firebaseapp.com",
    projectId: "react-netflix-clone-c4590",
    storageBucket: "react-netflix-clone-c4590.appspot.com",
    messagingSenderId: "599205625932",
    appId: "1:599205625932:web:67ca6dfc12802f9cbbb4e9",
    measurementId: "G-5PCZY5LDZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);