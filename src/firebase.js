import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATviEbfnFjkJ4HmoTYdI8r1vZkuIfEr3w",
    authDomain: "facebook-instagram-clone-dae38.firebaseapp.com",
    databaseURL: "https://facebook-instagram-clone-dae38.firebaseio.com",
    projectId: "facebook-instagram-clone-dae38",
    storageBucket: "facebook-instagram-clone-dae38.appspot.com",
    messagingSenderId: "957667878545",
    appId: "1:957667878545:web:777a5459b08d03a7280130",
    measurementId: "G-4NCNLZSG6M"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
