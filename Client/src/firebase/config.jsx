// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkwdbA5gpdW5Ouz_QSn57GcHcJdzfGCeY",
  authDomain: "note-app-tuu.firebaseapp.com",
  projectId: "note-app-tuu",
  storageBucket: "note-app-tuu.appspot.com",
  messagingSenderId: "878887014089",
  appId: "1:878887014089:web:9751da7ad8b4b3a0b88718",
  measurementId: "G-ZCDXC1F7DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);