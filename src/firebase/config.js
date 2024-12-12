import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQsKyQyizEMk0snPpg_zPl-VsjIneqngA",
    authDomain: "mirshod-e8a7f.firebaseapp.com",
    projectId: "mirshod-e8a7f",
    storageBucket: "mirshod-e8a7f.firebasestorage.app",
    messagingSenderId: "651399584576",
    appId: "1:651399584576:web:563591416f5c44bd9138a5",
    measurementId: "G-THSZ45WCK2"
};

// Read ReadMe.MD on GitHub to setup this project properly
// https://github.com/itfeelsharsh/shop/blob/main/README.md

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
