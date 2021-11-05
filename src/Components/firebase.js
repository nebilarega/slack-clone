import {initializeApp} from "firebase/app"
import 'firebase/firestore'
import { getFirestore, collection } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
import auth from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3HrHd0s63DJNx-75DBCpcUqWSCC06qrk",
    authDomain: "slack-clone-92d10.firebaseapp.com",
    projectId: "slack-clone-92d10",
    storageBucket: "slack-clone-92d10.appspot.com",
    messagingSenderId: "365897978349",
    appId: "1:365897978349:web:94b67681c743a37c6ad7e4",
    measurementId: "G-M3WD9CS1HD"
  };

const firebaseapp = initializeApp(firebaseConfig);
const db =  getFirestore();
const rooms = collection(db, 'rooms');
const provider = new GoogleAuthProvider();
export default db
export { provider, rooms,  }
