import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANISkUdpwW9KmxuFYwdJshDaUwOXdtUI8",
    authDomain: "clothing-db-891ea.firebaseapp.com",
    projectId: "clothing-db-891ea",
    storageBucket: "clothing-db-891ea.appspot.com",
    messagingSenderId: "94752642761",
    appId: "1:94752642761:web:d0845a125b73ed00925f18",
    measurementId: "G-9PJDGZG2GJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
