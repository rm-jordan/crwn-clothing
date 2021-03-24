import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAwevWmd1-4zpdbME0Sno0IdOvDsIodzqU",
  authDomain: "crwn-db-e57ec.firebaseapp.com",
  projectId: "crwn-db-e57ec",
  storageBucket: "crwn-db-e57ec.appspot.com",
  messagingSenderId: "343643861660",
  appId: "1:343643861660:web:1d9bc000e94564b6037359"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;


  const userRef= firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }

  }
  return userRef;

};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//below triggers googth auth 
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

