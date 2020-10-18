import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDELXdbheQ0T2Gz46g2LPkzosE5tKS8G0",
  authDomain: "facebook-instagram-clone-9c07c.firebaseapp.com",
  databaseURL: "https://facebook-instagram-clone-9c07c.firebaseio.com",
  projectId: "facebook-instagram-clone-9c07c",
  storageBucket: "facebook-instagram-clone-9c07c.appspot.com",
  messagingSenderId: "668992358889",
  appId: "1:668992358889:web:f7d9a6be09fb441efd2378",
  measurementId: "G-6RTXRYVWY6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
