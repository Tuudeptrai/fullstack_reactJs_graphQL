// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDccdOAIDS7EHJOsFCmijmZAwHkwksBoPI",
  authDomain: "note-app-c718b.firebaseapp.com",
  projectId: "note-app-c718b",
  storageBucket: "note-app-c718b.appspot.com",
  messagingSenderId: "212583838392",
  appId: "1:212583838392:web:2b6053b9726443e42bfa4d",
  measurementId: "G-J2RFB7TMBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);