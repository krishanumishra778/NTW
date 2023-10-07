// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSpvhqr_6KFyVT7cdXYMDgIoRiL03iRaU",
  authDomain: "ntwtest-64a02.firebaseapp.com",
  projectId: "ntwtest-64a02",
  storageBucket: "ntwtest-64a02.appspot.com",
  messagingSenderId: "658646113081",
  appId: "1:658646113081:web:87a0ad4300dac011ce66e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports=app