import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDWvp9So16f3OdFJfmDZOhTxYy08Wf1vxk",
  authDomain: "drive-clone-c81fd.firebaseapp.com",
  projectId: "drive-clone-c81fd",
  storageBucket: "drive-clone-c81fd.appspot.com",
  messagingSenderId: "921175627308",
  appId: "1:921175627308:web:6304138e76796c35c1e389",
  measurementId: "G-78CCT5WF14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
