// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import ApiData from "./ApiData";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ApiData.FirebaseKey,
    authDomain: "react-disney-plus-app-768ae.firebaseapp.com",
    projectId: "react-disney-plus-app-768ae",
    storageBucket: "react-disney-plus-app-768ae.appspot.com",
    messagingSenderId: "1033372338434",
    appId: "1:1033372338434:web:b4c86bac89bb1d9f981a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);