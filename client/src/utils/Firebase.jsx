// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJuPQryXkpaU-Qz6bF0COFlK6DYKuINkI",
    authDomain: "stocks-app-213fd.firebaseapp.com",
    projectId: "stocks-app-213fd",
    storageBucket: "stocks-app-213fd.appspot.com",
    messagingSenderId: "153383922918",
    appId: "1:153383922918:web:ac787792bc308e1d7a5f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    let response = signInWithPopup(auth, provider)
        .then(res => {
            console.log(res.user.photoURL);
            return res
        })
        .catch(err => {
            console.log(err)
        })

    return response
}

export const signOutCurrentUser = () => {
    localStorage.clear();

    // TODO: Clear the useContext State
}
