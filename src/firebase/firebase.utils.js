import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFzvuYVYbI8YegygKJMIQQ6qHeIOZeMcE",
    authDomain: "crown-28c68.firebaseapp.com",
    databaseURL: "https://crown-28c68.firebaseio.com",
    projectId: "crown-28c68",
    storageBucket: "crown-28c68.appspot.com",
    messagingSenderId: "62477156983",
    appId: "1:62477156983:web:bc662c668e2da93bd67c72"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    let userRef = firestore.collection('users').doc(userAuth.uid);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;