import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAu3QcKsTq44QisJWYE1nQA7ftVdZZkiig",
    authDomain: "discord-by-sarvesh-patkar.firebaseapp.com",
    databaseURL: "https://discord-by-sarvesh-patkar.firebaseio.com",
    projectId: "discord-by-sarvesh-patkar",
    storageBucket: "discord-by-sarvesh-patkar.appspot.com",
    messagingSenderId: "432057910635",
    appId: "1:432057910635:web:19856577175f82b566382e",
    measurementId: "G-QV5FGR7QHQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;
