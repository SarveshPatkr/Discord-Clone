import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "API",
    authDomain: "AuthDomain",
    databaseURL: "DatabaseURL",
    projectId: "ProjectID",
    storageBucket: "StorageBucket",
    messagingSenderId: "SenderID",
    appId: "AppID",
    measurementId: "MeasurementID"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth , provider };
export default db;
