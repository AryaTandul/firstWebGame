//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDquqvuHL-JuLV1RG3ZxwjtxzbIAxGIpr4",
  authDomain: "freestylegame-d3523.firebaseapp.com",
  projectId: "freestylegame-d3523",
  storageBucket: "freestylegame-d3523.appspot.com",
  messagingSenderId: "870626638640",
  appId: "1:870626638640:web:fd6799bd567f608c11e6f5",
  measurementId: "G-G7RY8QDXSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var username = document.getElementById("newUser")
var password = document.getElementById("newPassword")