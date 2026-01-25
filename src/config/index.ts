import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvhr4bctMT2bpNBF-wYTgitI2rvY1GZ8Q",
  authDomain: "greenshop-n81.firebaseapp.com",
  projectId: "greenshop-n81",
  storageBucket: "greenshop-n81.firebasestorage.app",
  messagingSenderId: "704717771259",
  appId: "1:704717771259:web:891cda71cb230b85093b5e",
  measurementId: "G-VMBEC784LJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
