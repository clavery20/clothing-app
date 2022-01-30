import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyDTnqR5-osx0fX7YSql_gjzxGRxDz71ifc",
        authDomain: "crwn-db-4a5ed.firebaseapp.com",
        projectId: "crwn-db-4a5ed",
        storageBucket: "crwn-db-4a5ed.appspot.com",
        messagingSenderId: "732423580609",
        appId: "1:732423580609:web:e9283b542315b2142b1d40",
        measurementId: "G-KC8365FKZC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
