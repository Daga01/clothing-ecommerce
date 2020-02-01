import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtMP-TYa5mq73zHYNVqK5mFwzMDFT-dIU",
    authDomain: "clothing-ecommerce-db-fdf65.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-db-fdf65.firebaseio.com",
    projectId: "clothing-ecommerce-db-fdf65",
    storageBucket: "clothing-ecommerce-db-fdf65.appspot.com",
    messagingSenderId: "999074723889",
    appId: "1:999074723889:web:4c886f34bfdccdf1fdfd10",
    measurementId: "G-JGEZ8YYKZ8"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
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
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;