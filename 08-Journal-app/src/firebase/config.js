// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();



//DEV/PROD
// Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyCqvWXbU8b8U7JcVLGICWtaVJoYlZXOZi4",
  // authDomain: "react-cursos-f8ca6.firebaseapp.com",
  // projectId: "react-cursos-f8ca6",
  // storageBucket: "react-cursos-f8ca6.appspot.com",
  // messagingSenderId: "95497918856",
  // appId: "1:95497918856:web:b0d00a3d179711a9e5423d"
// };

// //Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDNYJbyGA76Nt5BOtkLTaHPnWLWrTa55nE",
//   authDomain: "test-project-238e3.firebaseapp.com",
//   projectId: "test-project-238e3",
//   storageBucket: "test-project-238e3.appspot.com",
//   messagingSenderId: "459474407643",
//   appId: "1:459474407643:web:16ff22d8a76f7e45acfcfe",
//   measurementId: "G-Y960V9XRQC"
// };

const firebaseConfig = {
  apiKey:VITE_APIKEY,
  authDomain:VITE_AUTHDOMAIN,
  projectId:VITE_PROJECTID,
  storageBucket:VITE_STORAGEBUCKET,
  messagingSenderId:VITE_MESSAGINGSENDERID,
  appId:VITE_APPID,
};


// console.log( process.env );
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth ( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );