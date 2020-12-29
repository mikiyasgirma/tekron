import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});


export const db = app.firestore();
export const auth = app.auth();
export default app;

// apiKey: "AIzaSyDsdi_Px81xHCA5b45hQu-jcguvUnSnE6I",
//     authDomain: "reactterkon.firebaseapp.com",
//     projectId: "reactterkon",
//     storageBucket: "reactterkon.appspot.com",
//     messagingSenderId: "452106144500",
//     appId: "1:452106144500:web:3c092e8940b364dca06ca1",
//     measurementId: "G-CLMJRJE0F2"
