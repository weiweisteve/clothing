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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

    // console.log(firestore.doc('users/asdfghjkl'));

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
