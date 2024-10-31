// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtKbwmYCu2_bn8svNHckFV-NFW9i4xHc4",
  authDomain: "hackathon2024tsi-7f76e.firebaseapp.com",
  projectId: "hackathon2024tsi-7f76e",
  storageBucket: "hackathon2024tsi-7f76e.firebasestorage.app",
  messagingSenderId: "470655378223",
  appId: "1:470655378223:web:64612e902d6ef65323b7da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };