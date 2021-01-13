import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcynpR4RQ-uxxzx23CFeFECizaJKQDzYw",
    authDomain: "snapchat-clone-demo-ac72b.firebaseapp.com",
    projectId: "snapchat-clone-demo-ac72b",
    storageBucket: "snapchat-clone-demo-ac72b.appspot.com",
    messagingSenderId: "55824876176",
    appId: "1:55824876176:web:24126fa3483755cb738e15"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };