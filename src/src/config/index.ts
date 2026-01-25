import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRHgHJj5PEuOF_XYxxtpYM-w1M3dELT2w",
  authDomain: "greenshop-e7681.firebaseapp.com",
  projectId: "greenshop-e7681",
  storageBucket: "greenshop-e7681.firebasestorage.app",
  messagingSenderId: "311959228068",
  appId: "1:311959228068:web:291f68dbbd953ef309e031",
  measurementId: "G-PPJ4H2WYFY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
