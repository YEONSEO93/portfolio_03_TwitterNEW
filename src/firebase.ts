import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZaHAQt3ueZnxcVL1q9vTGm69RMRD4KA4",
  authDomain: "twitter-44ff3.firebaseapp.com",
  projectId: "twitter-44ff3",
  storageBucket: "twitter-44ff3.appspot.com",
  messagingSenderId: "412197234542",
  appId: "1:412197234542:web:d0459cefa8ef63f15fc37f",
  measurementId: "G-RRTWJ2646J"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
