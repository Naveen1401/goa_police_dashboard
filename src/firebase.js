import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRGCakhGZlJPgg5Wnc_azYWU5W9M3FNo8",
  authDomain: "host-accounts.firebaseapp.com",
  databaseURL: "https://host-accounts-default-rtdb.firebaseio.com",
  projectId: "host-accounts",
  storageBucket: "host-accounts.appspot.com",
  messagingSenderId: "915004135859",
  appId: "1:915004135859:web:e50456393bb46fe522d3c6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)